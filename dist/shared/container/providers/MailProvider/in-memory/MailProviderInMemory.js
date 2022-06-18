"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MailProviderImMemory = void 0;

class MailProviderImMemory {
  constructor() {
    this.message = [];
  }

  async sendMail(to, subject, variables, path) {
    this.message.push({
      to,
      subject,
      variables,
      path
    });
  }

}

exports.MailProviderImMemory = MailProviderImMemory;