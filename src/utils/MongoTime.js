export function get_id(date) {
	return Math.floor(date.getTime() / 1000).toString(16) + "0000000000000000";
};

export default function get_date(objectId) {
	return new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
};
