import NextAuth from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import { NextRequest } from 'next/server';

const prisma = new PrismaClient();
/**
 * @type {import('next-auth').AuthOptions}
 */
export const authOptions = {
	// OAuth 제공자
	providers: [
		DiscordProvider({
			clientId: process.env.DISCORD_CLIENT_ID,
			clientSecret: process.env.DISCORD_CLIENT_SECRET,
		}),
		GithubProvider({
			clientId: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
	// DB설정
	adapter: PrismaAdapter(prisma),
	session: {
		// default는 jwt, apapter옵션을 사용하면 자동으로 database가 default가 됨
		// jwt를 입력해서 강제로 jwt를 사용할수도 있음.
		// jwt로 설정하면 session cookie에 암호화된 JWT저장됨.
		// database로 설정하면 session cookie에 DB매칭용 sessionToken만 저장됨
		strategy: 'jwt',
		// 세션유지기한
		maxAge: 1 * 24 * 60 * 60,
		// 세션확장을 위한 DB업데이트 주기, JWT쓰면 적용안됨
		updateAge: 1 * 60 * 60,
		// // 랜덤 UUID가 설정되지만 custom 가능
		// generateSessionToken: () => {
		//     return randomUUID?.() ?? randomBytes(32).toString("hex")
		//   }
	},
	// // jwt관련 설정
	// jwt: {
	//     // 세션유지기한, 따로설정안하면 `session.maxAge`가 됨
	//     maxAge: 60 * 60 * 24 * 30,
	//     // 암, 복호화 설정 가능
	//     async encode() {},
	//     async decode() {},
	//   },
	// // 로그인관련 링크를 직접제작하고 연동시킬수있음
	// pages: {
	//     signIn: '/auth/signin',
	//     signOut: '/auth/signout',
	//     error: '/auth/error', // Error code passed in query string as ?error=
	//     verifyRequest: '/auth/verify-request', // (used for check email message)
	//     newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
	//   },
	// callback기능설정가능
	callbacks: {
		async signIn({ user, account, profile, email, credentials }) {
			console.log(user);
			console.log(account);
			console.log(profile);
			console.log(email);
			console.log(credentials);
			return true;
		},
		async redirect({ url, baseUrl }) {
			console.log(url);
			console.log(baseUrl);
			return url;
		},
		// 유저 세션이 조회될 때 마다 실행되는 코드
		async session({ session, token, user }) {
			console.log(session);
			console.log(token);
			console.log(user);
			return session;
		},
		// jwt 만들 때 실행되는 코드
		// user변수는 DB의 유저정보담겨있고 token.user에 뭐 저장하면 jwt에 들어갑니다.
		async jwt({ token, user, account, profile, isNewUser }) {
			console.log(token);
			console.log(user);
			console.log(account);
			console.log(profile);
			console.log(isNewUser);
			return token;
		},
	},
	// // 로그같이 특정 event발생이후 특정작업을 진행할 수 있음
	// events: {
	//     async signIn(message) { /* on successful sign in */ },
	//     async signOut(message) { /* on signout */ },
	//     async createUser(message) { /* user created */ },
	//     async updateUser(message) { /* user updated - e.g. their email was verified */ },
	//     async linkAccount(message) { /* account (e.g. Twitter) linked to a user */ },
	//     async session(message) { /* session is active */ },
	//   },
	// // 이건 진짜 로그가능
	// logger: {
	//     error(code, metadata) {
	//       log.error(code, metadata)
	//     },
	//     warn(code) {
	//       log.warn(code)
	//     },
	//     debug(code, metadata) {
	//       log.debug(code, metadata)
	//     }
	//   },
	// // 로그인페이지 테마설정
	// theme: {
	//     colorScheme: "auto", // "auto" | "dark" | "light"
	//     brandColor: "", // Hex color code
	//     logo: "", // Absolute URL to image
	//     buttonText: "" // Hex color code
	//   },
	// hash token에 사용되는 무작위 문자열, 자동으로 `NEXTAUTH_SECRET`사용
	// secret: process.env.NEXTAUTH_SECRET
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
