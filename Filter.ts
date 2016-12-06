enum FilterOp {
   EQ, NEQ, LT, LTE, GT, GTE, AND, OR, NOT
}
class Filter {
   op: FilterOp;
   values: Array<any>;
}
