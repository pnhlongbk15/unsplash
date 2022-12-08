class APIResponse {
        constructor(status = 200, message = "success", data = []) {
                this.status = status;
                this.message = message;
                this.data = data;
        }
}

class ErrResponse {
        constructor(status = 400, message = "fail") {
                this.status = status;
                this.message = message;
        }
}

class ModelResponse {
        constructor(code = 1, error = '', data = []) {
                this.code = code;
                this.error = error;
                this.data = data
        }
}
module.exports = {
        APIResponse, ErrResponse, ModelResponse
}