export interface IDog {
    message: string;
    status: string;
    name?: string;
    breed?: string;
    desc?: string;
}
export const enum DogApiStatus {
    success = 'success'
}

export interface DogApiResponse {
    message: string;
    status: DogApiStatus;
}