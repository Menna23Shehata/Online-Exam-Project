declare type SuccessfullResponse<T> = {
    status: 'success',
    statusCode: number,
    data: T
}

declare type ValidationError = {
    field: string,
    errorMessage: string
}

declare type ErrorResponse={
    status: 'error' | 'fail',
    statusCode: number,
    message: string | ValidationError[]
}


declare type APIResponse<T> = SuccessfullResponse<T> | ErrorResponse