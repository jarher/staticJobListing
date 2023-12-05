import { createNode } from "./createNode.js";
import { data } from "./data.js";
import { Event } from "./event.js";
import { Loader } from "./loader.js";

const instanceMethods = [
  { newFunction: new Loader().run },
  { newFunction: new Event().click },
];

instanceMethods.forEach((instance) => instance.newFunction(data, createNode));

