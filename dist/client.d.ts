export interface AddFaceResponse {
	success: boolean;
	message: string;
	face_id: string;
}

export interface SearchFaceItem {
	id: string;
	score: number;
	metadata: Record<string, any>;
}

export interface SearchFaceResponse {
	success: boolean;
	result: SearchFaceItem[];
}

export interface MatchFaceItem {
	id: string;
	match: boolean;
	score: number;
	metadata: Record<string, any>;
}

export interface MatchFaceResponse {
	success: boolean;
	result: MatchFaceItem[];
}

export interface DeleteFaceResponse {
	success: boolean;
	message: string;
}
