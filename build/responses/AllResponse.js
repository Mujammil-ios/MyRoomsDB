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
class AllResponse {
    successResponse({ res, message, data }) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield res.status(200).json({
                status: "ok",
                statusCode: 200,
                isSuccess: true,
                message: message,
                data: data,
                error: null,
            });
        });
    }
    internalServerErrorResponse({ res, err }) {
        return __awaiter(this, void 0, void 0, function* () {
            yield res.status(500).json({
                status: "ok",
                statusCode: 500,
                isSuccess: false,
                message: "Internal server error",
                data: null,
                error: err,
            });
        });
    }
    conflictErrorResponse({ res, message }) {
        return __awaiter(this, void 0, void 0, function* () {
            yield res.status(200).json({
                status: "ok",
                statusCode: 409,
                isSuccess: false,
                message: message,
                data: null,
                error: "conflict",
            });
        });
    }
    badRequestResponse({ res, err }) {
        return __awaiter(this, void 0, void 0, function* () {
            yield res.status(200).json({
                status: "ok",
                statusCode: 400,
                isSuccess: false,
                message: err,
                data: null,
                error: "Bad Request Error is occured",
            });
        });
    }
    unauthorizedResponse({ res, message }) {
        return __awaiter(this, void 0, void 0, function* () {
            yield res.status(401).json({
                status: "unauthorized",
                statusCode: 401,
                isSuccess: false,
                message: message,
                data: null,
                error: null,
            });
        });
    }
    success(ResponceMessage, ResponceData) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                ResponceCode: 0,
                ResponceMessage: ResponceMessage,
                ResponceData: ResponceData
            };
        });
    }
    fail(ResponceMessage, ResponceData) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                ResponceCode: 1,
                ResponceMessage: ResponceMessage,
                ResponceData: ResponceData
            };
        });
    }
}
exports.default = AllResponse;
