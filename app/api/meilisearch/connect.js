import MeiliSearch from 'meilisearch';
export default function connect() {
	const meiliClient = new MeiliSearch({
		host: process.env.meilisearch_host,
		apiKey: process.env.meilisearch_admin_key,
	});
	return meiliClient;
}
