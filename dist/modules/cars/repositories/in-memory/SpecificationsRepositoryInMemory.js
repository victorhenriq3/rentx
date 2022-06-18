"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpecificationsRepositoryInMemory = void 0;

var _Specification = require("../../infra/typeorm/entities/Specification");

class SpecificationsRepositoryInMemory {
  constructor() {
    this.specifications = [];
  }

  async create({
    description,
    name
  }) {
    const specification = new _Specification.Specification();
    Object.assign(specification, {
      description,
      name
    });
    this.specifications.push(specification);
    return specification;
  }

  async findByName(name) {
    return this.specifications.find(specification => specification.name === name);
  }

  async findByIds(ids) {
    const allSpecifications = this.specifications.filter(specification => ids.includes(specification.id));
    return allSpecifications;
  }

}

exports.SpecificationsRepositoryInMemory = SpecificationsRepositoryInMemory;