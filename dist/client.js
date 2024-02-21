"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MugshotClient = void 0;
class MugshotClient {
    constructor(apiKey, baseUrl = 'https://v1.mugshot.dev') {
        this.apiKey = apiKey;
        this.baseUrl = baseUrl;
    }
    addFace(imageFile, metadata) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.baseUrl}/face/add`;
            const formData = new FormData();
            formData.append('image', imageFile);
            formData.append('metadata', JSON.stringify(metadata));
            const response = yield fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: this.apiKey,
                    'User-Agent': 'Mugshot-SDK/1.0.0',
                },
                body: formData,
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            const data = yield response.json();
            return data;
        });
    }
    searchFace(imageFile) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.baseUrl}/face/find`;
            const formData = new FormData();
            formData.append('image', imageFile);
            const response = yield fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: this.apiKey,
                    'User-Agent': 'Mugshot-SDK/1.0.0',
                },
                body: formData,
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = (yield response.json());
            return data;
        });
    }
    searchFaceFirst(imageFile) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.baseUrl}/face/find`;
            const formData = new FormData();
            formData.append('image', imageFile);
            const response = yield fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: this.apiKey,
                    'User-Agent': 'Mugshot-SDK/1.0.0',
                },
                body: formData,
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = (yield response.json());
            return data;
        });
    }
    matchFace(imageFile) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.baseUrl}/face/find/match`;
            const formData = new FormData();
            formData.append('image', imageFile);
            const response = yield fetch(url, {
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
            const data = (yield response.json());
            return data;
        });
    }
    deleteFace(faceId) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `${this.baseUrl}/face/delete`;
            const formData = new URLSearchParams();
            formData.append('face_id', faceId);
            const response = yield fetch(url, {
                method: 'POST',
                headers: {
                    Authorization: this.apiKey,
                    'User-Agent': 'Mugshot-SDK/1.0.0',
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formData.toString(),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = (yield response.json());
            return data;
        });
    }
}
exports.MugshotClient = MugshotClient;
