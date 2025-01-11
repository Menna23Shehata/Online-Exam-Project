declare type SuccessfullResponse<T> = {
    status: 'success',
    statusCode: number,
    data: T
}

declare type ErrorResponse = {
    status: 'error' | 'fail',
    statusCode: number,
    message: string
}

declare type APIResponse<T> = SuccessfullResponse<T> | ErrorResponse