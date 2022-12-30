import { NodeObject, Primitive } from './types';

type StringifyOptions = {
  linebreak?: string;
  indent?: string;
};

export declare function stringify<ID extends Primitive>(nodes: NodeObject<ID>[] | NodeObject<ID>, options?: StringifyOptions): string;
