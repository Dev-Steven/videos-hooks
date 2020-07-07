import axios from 'axios';

const KEY = 'AIzaSyAHc915CqasINpNR12s_BGkfuYrmm5asaU';

export const baseParams = {
	part: 'snippet',
	maxResults: 5,
	key: KEY,
};

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: baseParams,
});
