import {
	AddFaceResponse,
	SearchFaceResponse,
	MatchFaceResponse,
	DeleteFaceResponse,
} from './client.d';

class MugshotClient {
	private apiKey: string;
	private baseUrl: string;

	constructor(apiKey: string, baseUrl: string = 'https://v1.mugshot.dev') {
		this.apiKey = apiKey;
		this.baseUrl = baseUrl;
	}

	public async addFace(
		imageFile: Blob,
		metadata: Record<string, any>,
	): Promise<AddFaceResponse> {
		const url = `${this.baseUrl}/face/add`;
		const formData = new FormData();
		formData.append('image', imageFile);
		formData.append('metadata', JSON.stringify(metadata));

		const response = await fetch(url, {
			method: 'POST',
			headers: {
				Authorization: this.apiKey,
				'User-Agent': 'Mugshot-SDK/1.0.0',
			},
			body: formData,
		});

		if (!response.ok) {
			throw new Error(`Error: ${response.statusText}`);
		}

		const data: AddFaceResponse = await response.json();
		return data;
	}

	public async searchFace(imageFile: Blob): Promise<SearchFaceResponse> {
		const url = `${this.baseUrl}/face/find`;
		const formData = new FormData();
		formData.append('image', imageFile);

		const response = await fetch(url, {
			method: 'POST',
			headers: {
				Authorization: this.apiKey,
				'User-Agent': 'Mugshot-SDK/1.0.0',
			},
			body: formData,
		});

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = (await response.json()) as SearchFaceResponse;
		return data;
	}

	public async searchFaceFirst(imageFile: Blob): Promise<SearchFaceResponse> {
		const url = `${this.baseUrl}/face/find`;
		const formData = new FormData();
		formData.append('image', imageFile);

		const response = await fetch(url, {
			method: 'POST',
			headers: {
				Authorization: this.apiKey,
				'User-Agent': 'Mugshot-SDK/1.0.0',
			},
			body: formData,
		});

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = (await response.json()) as SearchFaceResponse;
		return data;
	}

	public async matchFace(imageFile: Blob): Promise<MatchFaceResponse> {
		const url = `${this.baseUrl}/face/find/match`;
		const formData = new FormData();
		formData.append('image', imageFile);

		const response = await fetch(url, {
			method: 'POST',
			headers: {
				Authorization: this.apiKey,
				'User-Agent': 'Mugshot-SDK/1.0.0',
			},
			body: formData,
		});

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = (await response.json()) as MatchFaceResponse;
		return data;
	}

	public async deleteFace(faceId: string): Promise<DeleteFaceResponse> {
		const url = `${this.baseUrl}/face/delete`;
		const formData = new URLSearchParams();
		formData.append('face_id', faceId);

		const response = await fetch(url, {
			method: 'POST',
			headers: {
				Authorization: this.apiKey,
				'User-Agent': 'Mugshot-SDK/1.0.0',
			},
			body: formData.toString(),
		});

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = (await response.json()) as DeleteFaceResponse;
		return data;
	}
}

export {MugshotClient};
