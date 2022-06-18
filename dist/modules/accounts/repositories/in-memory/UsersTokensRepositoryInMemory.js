"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersTokenRepositoryInMemory = void 0;

var _UserToken = require("../../infra/typeorm/entities/UserToken");

class UsersTokenRepositoryInMemory {
  constructor() {
    this.usersToken = [];
  }

  async create({
    expires_date,
    refresh_token,
    user_id
  }) {
    const userToken = new _UserToken.UserTokens();
    Object.assign(userToken, {
      expires_date,
      refresh_token,
      user_id
    });
    this.usersToken.push(userToken);
    return userToken;
  }

  async findByUserIdAndRefreshToken(user_id, refresh_token) {
    const userToken = this.usersToken.find(userToken => userToken.user_id === user_id && userToken.refresh_token === refresh_token);
    return userToken;
  }

  async deleteById(id) {
    const userToken = this.usersToken.find(ut => ut.id === id);
    this.usersToken.splice(this.usersToken.indexOf(userToken));
  }

  async findByRefreshToken(refresh_token) {
    const userToken = this.usersToken.find(ut => ut.refresh_token === refresh_token);
    return userToken;
  }

}

exports.UsersTokenRepositoryInMemory = UsersTokenRepositoryInMemory;