var name = "test";
var version$1 = "1.0.0";
var description = "前端监控SDK，可用来收集并上报：代码报错、性能数据、用户行为、加载资源、个性化指标等数据";
var main = "dist/index.min.js";
var module = "dist/index.esm.js";
var scripts = {
	build: "rollup -c",
	prepare: "husky install",
	commit: "git-cz",
	changeset: "changeset",
	"version-packages": "changeset version",
	release: "pnpm build && pnpm publish",
	publish: "changeset publish --registry=https://registry.npmjs.com/",
	lint: "eslint . --ext .js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore"
};
var keywords = [
	"web see",
	"web monitor",
	"web see sdk"
];
var author = "websee";
var license = "ISC";
var dependencies = {
	"@changesets/cli": "^2.26.1",
	"core-js": "^3.19.1",
	"error-stack-parser": "^2.1.4",
	"js-base64": "^3.7.3",
	"path-to-regexp": "^6.2.0",
	rrweb: "^1.1.3",
	tslib: "^2.4.1",
	"ua-parser-js": "^1.0.32",
	"web-vitals": "^3.1.0"
};
var devDependencies = {
	"@commitlint/cli": "^17.3.0",
	"@commitlint/config-conventional": "^17.3.0",
	"@rollup/plugin-commonjs": "^23.0.3",
	"@rollup/plugin-json": "^5.0.2",
	"@rollup/plugin-node-resolve": "^15.0.1",
	"@typescript-eslint/eslint-plugin": "^5.46.1",
	"@typescript-eslint/parser": "^5.46.1",
	commitizen: "^4.2.6",
	"cz-conventional-changelog": "^3.3.0",
	eslint: "^8.29.0",
	"eslint-plugin-prettier": "^4.2.1",
	husky: "^8.0.2",
	"lint-staged": "^13.1.0",
	prettier: "^2.8.0",
	rollup: "^2.78.0",
	"rollup-plugin-dts": "^5.0.0",
	"rollup-plugin-typescript2": "^0.34.1",
	"rollup-plugin-uglify": "^6.0.4",
	"ts-loader": "^9.4.2",
	typescript: "^4.9.4"
};
var repository = {
	type: "git",
	url: "git@github.com:xy-sea/web-see.git"
};
var config = {
	commitizen: {
		path: "./node_modules/cz-conventional-changelog"
	}
};
var version$2 = {
	name: name,
	version: version$1,
	"private": true,
	description: description,
	main: main,
	module: module,
	scripts: scripts,
	keywords: keywords,
	author: author,
	license: license,
	dependencies: dependencies,
	devDependencies: devDependencies,
	"lint-staged": {
	"**/*.{ts,tsx,json}": [
		"prettier --write",
		"eslint --fix"
	]
},
	repository: repository,
	config: config
};

var SDK_NAME = 'web-see';
var SDK_VERSION = version$2.version;

/**
 * 接口错误状态
 */
var SpanStatus;
(function (SpanStatus) {
    SpanStatus["Ok"] = "ok";
    SpanStatus["DeadlineExceeded"] = "deadline_exceeded";
    SpanStatus["Unauthenticated"] = "unauthenticated";
    SpanStatus["PermissionDenied"] = "permission_denied";
    SpanStatus["NotFound"] = "not_found";
    SpanStatus["ResourceExhausted"] = "resource_exhausted";
    SpanStatus["InvalidArgument"] = "invalid_argument";
    SpanStatus["Unimplemented"] = "unimplemented";
    SpanStatus["Unavailable"] = "unavailable";
    SpanStatus["InternalError"] = "internal_error";
    SpanStatus["UnknownError"] = "unknown_error";
    SpanStatus["Cancelled"] = "cancelled";
    SpanStatus["AlreadyExists"] = "already_exists";
    SpanStatus["FailedPrecondition"] = "failed_precondition";
    SpanStatus["Aborted"] = "aborted";
    SpanStatus["OutOfRange"] = "out_of_range";
    SpanStatus["DataLoss"] = "data_loss";
})(SpanStatus || (SpanStatus = {}));
/**
 * 用户行为
 */
var BREADCRUMBTYPES;
(function (BREADCRUMBTYPES) {
    BREADCRUMBTYPES["HTTP"] = "Http";
    BREADCRUMBTYPES["CLICK"] = "Click";
    BREADCRUMBTYPES["RESOURCE"] = "Resource_Error";
    BREADCRUMBTYPES["CODEERROR"] = "Code_Error";
    BREADCRUMBTYPES["ROUTE"] = "Route";
    BREADCRUMBTYPES["CUSTOM"] = "Custom";
})(BREADCRUMBTYPES || (BREADCRUMBTYPES = {}));
/**
 * 状态
 */
var STATUS_CODE;
(function (STATUS_CODE) {
    STATUS_CODE["ERROR"] = "error";
    STATUS_CODE["OK"] = "ok";
})(STATUS_CODE || (STATUS_CODE = {}));
/**
 * 事件类型
 */
var EVENTTYPES;
(function (EVENTTYPES) {
    EVENTTYPES["XHR"] = "xhr";
    EVENTTYPES["FETCH"] = "fetch";
    EVENTTYPES["CLICK"] = "click";
    EVENTTYPES["HISTORY"] = "history";
    EVENTTYPES["ERROR"] = "error";
    EVENTTYPES["HASHCHANGE"] = "hashchange";
    EVENTTYPES["UNHANDLEDREJECTION"] = "unhandledrejection";
    EVENTTYPES["RESOURCE"] = "resource";
    EVENTTYPES["DOM"] = "dom";
    EVENTTYPES["VUE"] = "vue";
    EVENTTYPES["REACT"] = "react";
    EVENTTYPES["CUSTOM"] = "custom";
    EVENTTYPES["PERFORMANCE"] = "performance";
    EVENTTYPES["RECORDSCREEN"] = "recordScreen";
    EVENTTYPES["WHITESCREEN"] = "whiteScreen";
})(EVENTTYPES || (EVENTTYPES = {}));
var HTTPTYPE;
(function (HTTPTYPE) {
    HTTPTYPE["XHR"] = "xhr";
    HTTPTYPE["FETCH"] = "fetch";
})(HTTPTYPE || (HTTPTYPE = {}));
var HTTP_CODE;
(function (HTTP_CODE) {
    HTTP_CODE[HTTP_CODE["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HTTP_CODE[HTTP_CODE["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
})(HTTP_CODE || (HTTP_CODE = {}));
var EMethods;
(function (EMethods) {
    EMethods["Get"] = "GET";
    EMethods["Post"] = "POST";
    EMethods["Put"] = "PUT";
    EMethods["Delete"] = "DELETE";
})(EMethods || (EMethods = {}));

/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

/* eslint-disable space-unary-ops */

/* Public constants ==========================================================*/
/* ===========================================================================*/


//const Z_FILTERED          = 1;
//const Z_HUFFMAN_ONLY      = 2;
//const Z_RLE               = 3;
const Z_FIXED$1               = 4;
//const Z_DEFAULT_STRATEGY  = 0;

/* Possible values of the data_type field (though see inflate()) */
const Z_BINARY              = 0;
const Z_TEXT                = 1;
//const Z_ASCII             = 1; // = Z_TEXT
const Z_UNKNOWN$1             = 2;

/*============================================================================*/


function zero$1(buf) { let len = buf.length; while (--len >= 0) { buf[len] = 0; } }

// From zutil.h

const STORED_BLOCK = 0;
const STATIC_TREES = 1;
const DYN_TREES    = 2;
/* The three kinds of block type */

const MIN_MATCH$1    = 3;
const MAX_MATCH$1    = 258;
/* The minimum and maximum match lengths */

// From deflate.h
/* ===========================================================================
 * Internal compression state.
 */

const LENGTH_CODES$1  = 29;
/* number of length codes, not counting the special END_BLOCK code */

const LITERALS$1      = 256;
/* number of literal bytes 0..255 */

const L_CODES$1       = LITERALS$1 + 1 + LENGTH_CODES$1;
/* number of Literal or Length codes, including the END_BLOCK code */

const D_CODES$1       = 30;
/* number of distance codes */

const BL_CODES$1      = 19;
/* number of codes used to transfer the bit lengths */

const HEAP_SIZE$1     = 2 * L_CODES$1 + 1;
/* maximum heap size */

const MAX_BITS$1      = 15;
/* All codes must not exceed MAX_BITS bits */

const Buf_size      = 16;
/* size of bit buffer in bi_buf */


/* ===========================================================================
 * Constants
 */

const MAX_BL_BITS = 7;
/* Bit length codes must not exceed MAX_BL_BITS bits */

const END_BLOCK   = 256;
/* end of block literal code */

const REP_3_6     = 16;
/* repeat previous bit length 3-6 times (2 bits of repeat count) */

const REPZ_3_10   = 17;
/* repeat a zero length 3-10 times  (3 bits of repeat count) */

const REPZ_11_138 = 18;
/* repeat a zero length 11-138 times  (7 bits of repeat count) */

/* eslint-disable comma-spacing,array-bracket-spacing */
const extra_lbits =   /* extra bits for each length code */
  new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]);

const extra_dbits =   /* extra bits for each distance code */
  new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]);

const extra_blbits =  /* extra bits for each bit length code */
  new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]);

const bl_order =
  new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);
/* eslint-enable comma-spacing,array-bracket-spacing */

/* The lengths of the bit length codes are sent in order of decreasing
 * probability, to avoid transmitting the lengths for unused bit length codes.
 */

/* ===========================================================================
 * Local data. These are initialized only once.
 */

// We pre-fill arrays with 0 to avoid uninitialized gaps

const DIST_CODE_LEN = 512; /* see definition of array dist_code below */

// !!!! Use flat array instead of structure, Freq = i*2, Len = i*2+1
const static_ltree  = new Array((L_CODES$1 + 2) * 2);
zero$1(static_ltree);
/* The static literal tree. Since the bit lengths are imposed, there is no
 * need for the L_CODES extra codes used during heap construction. However
 * The codes 286 and 287 are needed to build a canonical tree (see _tr_init
 * below).
 */

const static_dtree  = new Array(D_CODES$1 * 2);
zero$1(static_dtree);
/* The static distance tree. (Actually a trivial tree since all codes use
 * 5 bits.)
 */

const _dist_code    = new Array(DIST_CODE_LEN);
zero$1(_dist_code);
/* Distance codes. The first 256 values correspond to the distances
 * 3 .. 258, the last 256 values correspond to the top 8 bits of
 * the 15 bit distances.
 */

const _length_code  = new Array(MAX_MATCH$1 - MIN_MATCH$1 + 1);
zero$1(_length_code);
/* length code for each normalized match length (0 == MIN_MATCH) */

const base_length   = new Array(LENGTH_CODES$1);
zero$1(base_length);
/* First normalized length for each code (0 = MIN_MATCH) */

const base_dist     = new Array(D_CODES$1);
zero$1(base_dist);
/* First normalized distance for each code (0 = distance of 1) */


function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {

  this.static_tree  = static_tree;  /* static tree or NULL */
  this.extra_bits   = extra_bits;   /* extra bits for each code or NULL */
  this.extra_base   = extra_base;   /* base index for extra_bits */
  this.elems        = elems;        /* max number of elements in the tree */
  this.max_length   = max_length;   /* max bit length for the codes */

  // show if `static_tree` has data or dummy - needed for monomorphic objects
  this.has_stree    = static_tree && static_tree.length;
}


let static_l_desc;
let static_d_desc;
let static_bl_desc;


function TreeDesc(dyn_tree, stat_desc) {
  this.dyn_tree = dyn_tree;     /* the dynamic tree */
  this.max_code = 0;            /* largest code with non zero frequency */
  this.stat_desc = stat_desc;   /* the corresponding static tree */
}



const d_code = (dist) => {

  return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
};


/* ===========================================================================
 * Output a short LSB first on the stream.
 * IN assertion: there is enough room in pendingBuf.
 */
const put_short = (s, w) => {
//    put_byte(s, (uch)((w) & 0xff));
//    put_byte(s, (uch)((ush)(w) >> 8));
  s.pending_buf[s.pending++] = (w) & 0xff;
  s.pending_buf[s.pending++] = (w >>> 8) & 0xff;
};


/* ===========================================================================
 * Send a value on a given number of bits.
 * IN assertion: length <= 16 and value fits in length bits.
 */
const send_bits = (s, value, length) => {

  if (s.bi_valid > (Buf_size - length)) {
    s.bi_buf |= (value << s.bi_valid) & 0xffff;
    put_short(s, s.bi_buf);
    s.bi_buf = value >> (Buf_size - s.bi_valid);
    s.bi_valid += length - Buf_size;
  } else {
    s.bi_buf |= (value << s.bi_valid) & 0xffff;
    s.bi_valid += length;
  }
};


const send_code = (s, c, tree) => {

  send_bits(s, tree[c * 2]/*.Code*/, tree[c * 2 + 1]/*.Len*/);
};


/* ===========================================================================
 * Reverse the first len bits of a code, using straightforward code (a faster
 * method would use a table)
 * IN assertion: 1 <= len <= 15
 */
const bi_reverse = (code, len) => {

  let res = 0;
  do {
    res |= code & 1;
    code >>>= 1;
    res <<= 1;
  } while (--len > 0);
  return res >>> 1;
};


/* ===========================================================================
 * Flush the bit buffer, keeping at most 7 bits in it.
 */
const bi_flush = (s) => {

  if (s.bi_valid === 16) {
    put_short(s, s.bi_buf);
    s.bi_buf = 0;
    s.bi_valid = 0;

  } else if (s.bi_valid >= 8) {
    s.pending_buf[s.pending++] = s.bi_buf & 0xff;
    s.bi_buf >>= 8;
    s.bi_valid -= 8;
  }
};


/* ===========================================================================
 * Compute the optimal bit lengths for a tree and update the total bit length
 * for the current block.
 * IN assertion: the fields freq and dad are set, heap[heap_max] and
 *    above are the tree nodes sorted by increasing frequency.
 * OUT assertions: the field len is set to the optimal bit length, the
 *     array bl_count contains the frequencies for each bit length.
 *     The length opt_len is updated; static_len is also updated if stree is
 *     not null.
 */
const gen_bitlen = (s, desc) => {
//    deflate_state *s;
//    tree_desc *desc;    /* the tree descriptor */

  const tree            = desc.dyn_tree;
  const max_code        = desc.max_code;
  const stree           = desc.stat_desc.static_tree;
  const has_stree       = desc.stat_desc.has_stree;
  const extra           = desc.stat_desc.extra_bits;
  const base            = desc.stat_desc.extra_base;
  const max_length      = desc.stat_desc.max_length;
  let h;              /* heap index */
  let n, m;           /* iterate over the tree elements */
  let bits;           /* bit length */
  let xbits;          /* extra bits */
  let f;              /* frequency */
  let overflow = 0;   /* number of elements with bit length too large */

  for (bits = 0; bits <= MAX_BITS$1; bits++) {
    s.bl_count[bits] = 0;
  }

  /* In a first pass, compute the optimal bit lengths (which may
   * overflow in the case of the bit length tree).
   */
  tree[s.heap[s.heap_max] * 2 + 1]/*.Len*/ = 0; /* root of the heap */

  for (h = s.heap_max + 1; h < HEAP_SIZE$1; h++) {
    n = s.heap[h];
    bits = tree[tree[n * 2 + 1]/*.Dad*/ * 2 + 1]/*.Len*/ + 1;
    if (bits > max_length) {
      bits = max_length;
      overflow++;
    }
    tree[n * 2 + 1]/*.Len*/ = bits;
    /* We overwrite tree[n].Dad which is no longer needed */

    if (n > max_code) { continue; } /* not a leaf node */

    s.bl_count[bits]++;
    xbits = 0;
    if (n >= base) {
      xbits = extra[n - base];
    }
    f = tree[n * 2]/*.Freq*/;
    s.opt_len += f * (bits + xbits);
    if (has_stree) {
      s.static_len += f * (stree[n * 2 + 1]/*.Len*/ + xbits);
    }
  }
  if (overflow === 0) { return; }

  // Tracev((stderr,"\nbit length overflow\n"));
  /* This happens for example on obj2 and pic of the Calgary corpus */

  /* Find the first bit length which could increase: */
  do {
    bits = max_length - 1;
    while (s.bl_count[bits] === 0) { bits--; }
    s.bl_count[bits]--;      /* move one leaf down the tree */
    s.bl_count[bits + 1] += 2; /* move one overflow item as its brother */
    s.bl_count[max_length]--;
    /* The brother of the overflow item also moves one step up,
     * but this does not affect bl_count[max_length]
     */
    overflow -= 2;
  } while (overflow > 0);

  /* Now recompute all bit lengths, scanning in increasing frequency.
   * h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
   * lengths instead of fixing only the wrong ones. This idea is taken
   * from 'ar' written by Haruhiko Okumura.)
   */
  for (bits = max_length; bits !== 0; bits--) {
    n = s.bl_count[bits];
    while (n !== 0) {
      m = s.heap[--h];
      if (m > max_code) { continue; }
      if (tree[m * 2 + 1]/*.Len*/ !== bits) {
        // Tracev((stderr,"code %d bits %d->%d\n", m, tree[m].Len, bits));
        s.opt_len += (bits - tree[m * 2 + 1]/*.Len*/) * tree[m * 2]/*.Freq*/;
        tree[m * 2 + 1]/*.Len*/ = bits;
      }
      n--;
    }
  }
};


/* ===========================================================================
 * Generate the codes for a given tree and bit counts (which need not be
 * optimal).
 * IN assertion: the array bl_count contains the bit length statistics for
 * the given tree and the field len is set for all tree elements.
 * OUT assertion: the field code is set for all tree elements of non
 *     zero code length.
 */
const gen_codes = (tree, max_code, bl_count) => {
//    ct_data *tree;             /* the tree to decorate */
//    int max_code;              /* largest code with non zero frequency */
//    ushf *bl_count;            /* number of codes at each bit length */

  const next_code = new Array(MAX_BITS$1 + 1); /* next code value for each bit length */
  let code = 0;              /* running code value */
  let bits;                  /* bit index */
  let n;                     /* code index */

  /* The distribution counts are first used to generate the code values
   * without bit reversal.
   */
  for (bits = 1; bits <= MAX_BITS$1; bits++) {
    code = (code + bl_count[bits - 1]) << 1;
    next_code[bits] = code;
  }
  /* Check that the bit counts in bl_count are consistent. The last code
   * must be all ones.
   */
  //Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
  //        "inconsistent bit counts");
  //Tracev((stderr,"\ngen_codes: max_code %d ", max_code));

  for (n = 0;  n <= max_code; n++) {
    let len = tree[n * 2 + 1]/*.Len*/;
    if (len === 0) { continue; }
    /* Now reverse the bits */
    tree[n * 2]/*.Code*/ = bi_reverse(next_code[len]++, len);

    //Tracecv(tree != static_ltree, (stderr,"\nn %3d %c l %2d c %4x (%x) ",
    //     n, (isgraph(n) ? n : ' '), len, tree[n].Code, next_code[len]-1));
  }
};


/* ===========================================================================
 * Initialize the various 'constant' tables.
 */
const tr_static_init = () => {

  let n;        /* iterates over tree elements */
  let bits;     /* bit counter */
  let length;   /* length value */
  let code;     /* code value */
  let dist;     /* distance index */
  const bl_count = new Array(MAX_BITS$1 + 1);
  /* number of codes at each bit length for an optimal tree */

  // do check in _tr_init()
  //if (static_init_done) return;

  /* For some embedded targets, global variables are not initialized: */
/*#ifdef NO_INIT_GLOBAL_POINTERS
  static_l_desc.static_tree = static_ltree;
  static_l_desc.extra_bits = extra_lbits;
  static_d_desc.static_tree = static_dtree;
  static_d_desc.extra_bits = extra_dbits;
  static_bl_desc.extra_bits = extra_blbits;
#endif*/

  /* Initialize the mapping length (0..255) -> length code (0..28) */
  length = 0;
  for (code = 0; code < LENGTH_CODES$1 - 1; code++) {
    base_length[code] = length;
    for (n = 0; n < (1 << extra_lbits[code]); n++) {
      _length_code[length++] = code;
    }
  }
  //Assert (length == 256, "tr_static_init: length != 256");
  /* Note that the length 255 (match length 258) can be represented
   * in two different ways: code 284 + 5 bits or code 285, so we
   * overwrite length_code[255] to use the best encoding:
   */
  _length_code[length - 1] = code;

  /* Initialize the mapping dist (0..32K) -> dist code (0..29) */
  dist = 0;
  for (code = 0; code < 16; code++) {
    base_dist[code] = dist;
    for (n = 0; n < (1 << extra_dbits[code]); n++) {
      _dist_code[dist++] = code;
    }
  }
  //Assert (dist == 256, "tr_static_init: dist != 256");
  dist >>= 7; /* from now on, all distances are divided by 128 */
  for (; code < D_CODES$1; code++) {
    base_dist[code] = dist << 7;
    for (n = 0; n < (1 << (extra_dbits[code] - 7)); n++) {
      _dist_code[256 + dist++] = code;
    }
  }
  //Assert (dist == 256, "tr_static_init: 256+dist != 512");

  /* Construct the codes of the static literal tree */
  for (bits = 0; bits <= MAX_BITS$1; bits++) {
    bl_count[bits] = 0;
  }

  n = 0;
  while (n <= 143) {
    static_ltree[n * 2 + 1]/*.Len*/ = 8;
    n++;
    bl_count[8]++;
  }
  while (n <= 255) {
    static_ltree[n * 2 + 1]/*.Len*/ = 9;
    n++;
    bl_count[9]++;
  }
  while (n <= 279) {
    static_ltree[n * 2 + 1]/*.Len*/ = 7;
    n++;
    bl_count[7]++;
  }
  while (n <= 287) {
    static_ltree[n * 2 + 1]/*.Len*/ = 8;
    n++;
    bl_count[8]++;
  }
  /* Codes 286 and 287 do not exist, but we must include them in the
   * tree construction to get a canonical Huffman tree (longest code
   * all ones)
   */
  gen_codes(static_ltree, L_CODES$1 + 1, bl_count);

  /* The static distance tree is trivial: */
  for (n = 0; n < D_CODES$1; n++) {
    static_dtree[n * 2 + 1]/*.Len*/ = 5;
    static_dtree[n * 2]/*.Code*/ = bi_reverse(n, 5);
  }

  // Now data ready and we can init static trees
  static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS$1 + 1, L_CODES$1, MAX_BITS$1);
  static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0,          D_CODES$1, MAX_BITS$1);
  static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0,         BL_CODES$1, MAX_BL_BITS);

  //static_init_done = true;
};


/* ===========================================================================
 * Initialize a new block.
 */
const init_block = (s) => {

  let n; /* iterates over tree elements */

  /* Initialize the trees. */
  for (n = 0; n < L_CODES$1;  n++) { s.dyn_ltree[n * 2]/*.Freq*/ = 0; }
  for (n = 0; n < D_CODES$1;  n++) { s.dyn_dtree[n * 2]/*.Freq*/ = 0; }
  for (n = 0; n < BL_CODES$1; n++) { s.bl_tree[n * 2]/*.Freq*/ = 0; }

  s.dyn_ltree[END_BLOCK * 2]/*.Freq*/ = 1;
  s.opt_len = s.static_len = 0;
  s.sym_next = s.matches = 0;
};


/* ===========================================================================
 * Flush the bit buffer and align the output on a byte boundary
 */
const bi_windup = (s) =>
{
  if (s.bi_valid > 8) {
    put_short(s, s.bi_buf);
  } else if (s.bi_valid > 0) {
    //put_byte(s, (Byte)s->bi_buf);
    s.pending_buf[s.pending++] = s.bi_buf;
  }
  s.bi_buf = 0;
  s.bi_valid = 0;
};

/* ===========================================================================
 * Compares to subtrees, using the tree depth as tie breaker when
 * the subtrees have equal frequency. This minimizes the worst case length.
 */
const smaller = (tree, n, m, depth) => {

  const _n2 = n * 2;
  const _m2 = m * 2;
  return (tree[_n2]/*.Freq*/ < tree[_m2]/*.Freq*/ ||
         (tree[_n2]/*.Freq*/ === tree[_m2]/*.Freq*/ && depth[n] <= depth[m]));
};

/* ===========================================================================
 * Restore the heap property by moving down the tree starting at node k,
 * exchanging a node with the smallest of its two sons if necessary, stopping
 * when the heap property is re-established (each father smaller than its
 * two sons).
 */
const pqdownheap = (s, tree, k) => {
//    deflate_state *s;
//    ct_data *tree;  /* the tree to restore */
//    int k;               /* node to move down */

  const v = s.heap[k];
  let j = k << 1;  /* left son of k */
  while (j <= s.heap_len) {
    /* Set j to the smallest of the two sons: */
    if (j < s.heap_len &&
      smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
      j++;
    }
    /* Exit if v is smaller than both sons */
    if (smaller(tree, v, s.heap[j], s.depth)) { break; }

    /* Exchange v with the smallest son */
    s.heap[k] = s.heap[j];
    k = j;

    /* And continue down the tree, setting j to the left son of k */
    j <<= 1;
  }
  s.heap[k] = v;
};


// inlined manually
// const SMALLEST = 1;

/* ===========================================================================
 * Send the block data compressed using the given Huffman trees
 */
const compress_block = (s, ltree, dtree) => {
//    deflate_state *s;
//    const ct_data *ltree; /* literal tree */
//    const ct_data *dtree; /* distance tree */

  let dist;           /* distance of matched string */
  let lc;             /* match length or unmatched char (if dist == 0) */
  let sx = 0;         /* running index in sym_buf */
  let code;           /* the code to send */
  let extra;          /* number of extra bits to send */

  if (s.sym_next !== 0) {
    do {
      dist = s.pending_buf[s.sym_buf + sx++] & 0xff;
      dist += (s.pending_buf[s.sym_buf + sx++] & 0xff) << 8;
      lc = s.pending_buf[s.sym_buf + sx++];
      if (dist === 0) {
        send_code(s, lc, ltree); /* send a literal byte */
        //Tracecv(isgraph(lc), (stderr," '%c' ", lc));
      } else {
        /* Here, lc is the match length - MIN_MATCH */
        code = _length_code[lc];
        send_code(s, code + LITERALS$1 + 1, ltree); /* send the length code */
        extra = extra_lbits[code];
        if (extra !== 0) {
          lc -= base_length[code];
          send_bits(s, lc, extra);       /* send the extra length bits */
        }
        dist--; /* dist is now the match distance - 1 */
        code = d_code(dist);
        //Assert (code < D_CODES, "bad d_code");

        send_code(s, code, dtree);       /* send the distance code */
        extra = extra_dbits[code];
        if (extra !== 0) {
          dist -= base_dist[code];
          send_bits(s, dist, extra);   /* send the extra distance bits */
        }
      } /* literal or match pair ? */

      /* Check that the overlay between pending_buf and sym_buf is ok: */
      //Assert(s->pending < s->lit_bufsize + sx, "pendingBuf overflow");

    } while (sx < s.sym_next);
  }

  send_code(s, END_BLOCK, ltree);
};


/* ===========================================================================
 * Construct one Huffman tree and assigns the code bit strings and lengths.
 * Update the total bit length for the current block.
 * IN assertion: the field freq is set for all tree elements.
 * OUT assertions: the fields len and code are set to the optimal bit length
 *     and corresponding code. The length opt_len is updated; static_len is
 *     also updated if stree is not null. The field max_code is set.
 */
const build_tree = (s, desc) => {
//    deflate_state *s;
//    tree_desc *desc; /* the tree descriptor */

  const tree     = desc.dyn_tree;
  const stree    = desc.stat_desc.static_tree;
  const has_stree = desc.stat_desc.has_stree;
  const elems    = desc.stat_desc.elems;
  let n, m;          /* iterate over heap elements */
  let max_code = -1; /* largest code with non zero frequency */
  let node;          /* new node being created */

  /* Construct the initial heap, with least frequent element in
   * heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
   * heap[0] is not used.
   */
  s.heap_len = 0;
  s.heap_max = HEAP_SIZE$1;

  for (n = 0; n < elems; n++) {
    if (tree[n * 2]/*.Freq*/ !== 0) {
      s.heap[++s.heap_len] = max_code = n;
      s.depth[n] = 0;

    } else {
      tree[n * 2 + 1]/*.Len*/ = 0;
    }
  }

  /* The pkzip format requires that at least one distance code exists,
   * and that at least one bit should be sent even if there is only one
   * possible code. So to avoid special checks later on we force at least
   * two codes of non zero frequency.
   */
  while (s.heap_len < 2) {
    node = s.heap[++s.heap_len] = (max_code < 2 ? ++max_code : 0);
    tree[node * 2]/*.Freq*/ = 1;
    s.depth[node] = 0;
    s.opt_len--;

    if (has_stree) {
      s.static_len -= stree[node * 2 + 1]/*.Len*/;
    }
    /* node is 0 or 1 so it does not have extra bits */
  }
  desc.max_code = max_code;

  /* The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
   * establish sub-heaps of increasing lengths:
   */
  for (n = (s.heap_len >> 1/*int /2*/); n >= 1; n--) { pqdownheap(s, tree, n); }

  /* Construct the Huffman tree by repeatedly combining the least two
   * frequent nodes.
   */
  node = elems;              /* next internal node of the tree */
  do {
    //pqremove(s, tree, n);  /* n = node of least frequency */
    /*** pqremove ***/
    n = s.heap[1/*SMALLEST*/];
    s.heap[1/*SMALLEST*/] = s.heap[s.heap_len--];
    pqdownheap(s, tree, 1/*SMALLEST*/);
    /***/

    m = s.heap[1/*SMALLEST*/]; /* m = node of next least frequency */

    s.heap[--s.heap_max] = n; /* keep the nodes sorted by frequency */
    s.heap[--s.heap_max] = m;

    /* Create a new node father of n and m */
    tree[node * 2]/*.Freq*/ = tree[n * 2]/*.Freq*/ + tree[m * 2]/*.Freq*/;
    s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
    tree[n * 2 + 1]/*.Dad*/ = tree[m * 2 + 1]/*.Dad*/ = node;

    /* and insert the new node in the heap */
    s.heap[1/*SMALLEST*/] = node++;
    pqdownheap(s, tree, 1/*SMALLEST*/);

  } while (s.heap_len >= 2);

  s.heap[--s.heap_max] = s.heap[1/*SMALLEST*/];

  /* At this point, the fields freq and dad are set. We can now
   * generate the bit lengths.
   */
  gen_bitlen(s, desc);

  /* The field len is now set, we can generate the bit codes */
  gen_codes(tree, max_code, s.bl_count);
};


/* ===========================================================================
 * Scan a literal or distance tree to determine the frequencies of the codes
 * in the bit length tree.
 */
const scan_tree = (s, tree, max_code) => {
//    deflate_state *s;
//    ct_data *tree;   /* the tree to be scanned */
//    int max_code;    /* and its largest code of non zero frequency */

  let n;                     /* iterates over all tree elements */
  let prevlen = -1;          /* last emitted length */
  let curlen;                /* length of current code */

  let nextlen = tree[0 * 2 + 1]/*.Len*/; /* length of next code */

  let count = 0;             /* repeat count of the current code */
  let max_count = 7;         /* max repeat count */
  let min_count = 4;         /* min repeat count */

  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }
  tree[(max_code + 1) * 2 + 1]/*.Len*/ = 0xffff; /* guard */

  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1]/*.Len*/;

    if (++count < max_count && curlen === nextlen) {
      continue;

    } else if (count < min_count) {
      s.bl_tree[curlen * 2]/*.Freq*/ += count;

    } else if (curlen !== 0) {

      if (curlen !== prevlen) { s.bl_tree[curlen * 2]/*.Freq*/++; }
      s.bl_tree[REP_3_6 * 2]/*.Freq*/++;

    } else if (count <= 10) {
      s.bl_tree[REPZ_3_10 * 2]/*.Freq*/++;

    } else {
      s.bl_tree[REPZ_11_138 * 2]/*.Freq*/++;
    }

    count = 0;
    prevlen = curlen;

    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;

    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;

    } else {
      max_count = 7;
      min_count = 4;
    }
  }
};


/* ===========================================================================
 * Send a literal or distance tree in compressed form, using the codes in
 * bl_tree.
 */
const send_tree = (s, tree, max_code) => {
//    deflate_state *s;
//    ct_data *tree; /* the tree to be scanned */
//    int max_code;       /* and its largest code of non zero frequency */

  let n;                     /* iterates over all tree elements */
  let prevlen = -1;          /* last emitted length */
  let curlen;                /* length of current code */

  let nextlen = tree[0 * 2 + 1]/*.Len*/; /* length of next code */

  let count = 0;             /* repeat count of the current code */
  let max_count = 7;         /* max repeat count */
  let min_count = 4;         /* min repeat count */

  /* tree[max_code+1].Len = -1; */  /* guard already set */
  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }

  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1]/*.Len*/;

    if (++count < max_count && curlen === nextlen) {
      continue;

    } else if (count < min_count) {
      do { send_code(s, curlen, s.bl_tree); } while (--count !== 0);

    } else if (curlen !== 0) {
      if (curlen !== prevlen) {
        send_code(s, curlen, s.bl_tree);
        count--;
      }
      //Assert(count >= 3 && count <= 6, " 3_6?");
      send_code(s, REP_3_6, s.bl_tree);
      send_bits(s, count - 3, 2);

    } else if (count <= 10) {
      send_code(s, REPZ_3_10, s.bl_tree);
      send_bits(s, count - 3, 3);

    } else {
      send_code(s, REPZ_11_138, s.bl_tree);
      send_bits(s, count - 11, 7);
    }

    count = 0;
    prevlen = curlen;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;

    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;

    } else {
      max_count = 7;
      min_count = 4;
    }
  }
};


/* ===========================================================================
 * Construct the Huffman tree for the bit lengths and return the index in
 * bl_order of the last bit length code to send.
 */
const build_bl_tree = (s) => {

  let max_blindex;  /* index of last bit length code of non zero freq */

  /* Determine the bit length frequencies for literal and distance trees */
  scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
  scan_tree(s, s.dyn_dtree, s.d_desc.max_code);

  /* Build the bit length tree: */
  build_tree(s, s.bl_desc);
  /* opt_len now includes the length of the tree representations, except
   * the lengths of the bit lengths codes and the 5+5+4 bits for the counts.
   */

  /* Determine the number of bit length codes to send. The pkzip format
   * requires that at least 4 bit length codes be sent. (appnote.txt says
   * 3 but the actual value used is 4.)
   */
  for (max_blindex = BL_CODES$1 - 1; max_blindex >= 3; max_blindex--) {
    if (s.bl_tree[bl_order[max_blindex] * 2 + 1]/*.Len*/ !== 0) {
      break;
    }
  }
  /* Update opt_len to include the bit length tree and counts */
  s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
  //Tracev((stderr, "\ndyn trees: dyn %ld, stat %ld",
  //        s->opt_len, s->static_len));

  return max_blindex;
};


/* ===========================================================================
 * Send the header for a block using dynamic Huffman trees: the counts, the
 * lengths of the bit length codes, the literal tree and the distance tree.
 * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
 */
const send_all_trees = (s, lcodes, dcodes, blcodes) => {
//    deflate_state *s;
//    int lcodes, dcodes, blcodes; /* number of codes for each tree */

  let rank;                    /* index in bl_order */

  //Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, "not enough codes");
  //Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES,
  //        "too many codes");
  //Tracev((stderr, "\nbl counts: "));
  send_bits(s, lcodes - 257, 5); /* not +255 as stated in appnote.txt */
  send_bits(s, dcodes - 1,   5);
  send_bits(s, blcodes - 4,  4); /* not -3 as stated in appnote.txt */
  for (rank = 0; rank < blcodes; rank++) {
    //Tracev((stderr, "\nbl code %2d ", bl_order[rank]));
    send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1]/*.Len*/, 3);
  }
  //Tracev((stderr, "\nbl tree: sent %ld", s->bits_sent));

  send_tree(s, s.dyn_ltree, lcodes - 1); /* literal tree */
  //Tracev((stderr, "\nlit tree: sent %ld", s->bits_sent));

  send_tree(s, s.dyn_dtree, dcodes - 1); /* distance tree */
  //Tracev((stderr, "\ndist tree: sent %ld", s->bits_sent));
};


/* ===========================================================================
 * Check if the data type is TEXT or BINARY, using the following algorithm:
 * - TEXT if the two conditions below are satisfied:
 *    a) There are no non-portable control characters belonging to the
 *       "block list" (0..6, 14..25, 28..31).
 *    b) There is at least one printable character belonging to the
 *       "allow list" (9 {TAB}, 10 {LF}, 13 {CR}, 32..255).
 * - BINARY otherwise.
 * - The following partially-portable control characters form a
 *   "gray list" that is ignored in this detection algorithm:
 *   (7 {BEL}, 8 {BS}, 11 {VT}, 12 {FF}, 26 {SUB}, 27 {ESC}).
 * IN assertion: the fields Freq of dyn_ltree are set.
 */
const detect_data_type = (s) => {
  /* block_mask is the bit mask of block-listed bytes
   * set bits 0..6, 14..25, and 28..31
   * 0xf3ffc07f = binary 11110011111111111100000001111111
   */
  let block_mask = 0xf3ffc07f;
  let n;

  /* Check for non-textual ("block-listed") bytes. */
  for (n = 0; n <= 31; n++, block_mask >>>= 1) {
    if ((block_mask & 1) && (s.dyn_ltree[n * 2]/*.Freq*/ !== 0)) {
      return Z_BINARY;
    }
  }

  /* Check for textual ("allow-listed") bytes. */
  if (s.dyn_ltree[9 * 2]/*.Freq*/ !== 0 || s.dyn_ltree[10 * 2]/*.Freq*/ !== 0 ||
      s.dyn_ltree[13 * 2]/*.Freq*/ !== 0) {
    return Z_TEXT;
  }
  for (n = 32; n < LITERALS$1; n++) {
    if (s.dyn_ltree[n * 2]/*.Freq*/ !== 0) {
      return Z_TEXT;
    }
  }

  /* There are no "block-listed" or "allow-listed" bytes:
   * this stream either is empty or has tolerated ("gray-listed") bytes only.
   */
  return Z_BINARY;
};


let static_init_done = false;

/* ===========================================================================
 * Initialize the tree data structures for a new zlib stream.
 */
const _tr_init$1 = (s) =>
{

  if (!static_init_done) {
    tr_static_init();
    static_init_done = true;
  }

  s.l_desc  = new TreeDesc(s.dyn_ltree, static_l_desc);
  s.d_desc  = new TreeDesc(s.dyn_dtree, static_d_desc);
  s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);

  s.bi_buf = 0;
  s.bi_valid = 0;

  /* Initialize the first block of the first file: */
  init_block(s);
};


/* ===========================================================================
 * Send a stored block
 */
const _tr_stored_block$1 = (s, buf, stored_len, last) => {
//DeflateState *s;
//charf *buf;       /* input block */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */

  send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3);    /* send block type */
  bi_windup(s);        /* align on byte boundary */
  put_short(s, stored_len);
  put_short(s, ~stored_len);
  if (stored_len) {
    s.pending_buf.set(s.window.subarray(buf, buf + stored_len), s.pending);
  }
  s.pending += stored_len;
};


/* ===========================================================================
 * Send one empty static block to give enough lookahead for inflate.
 * This takes 10 bits, of which 7 may remain in the bit buffer.
 */
const _tr_align$1 = (s) => {
  send_bits(s, STATIC_TREES << 1, 3);
  send_code(s, END_BLOCK, static_ltree);
  bi_flush(s);
};


/* ===========================================================================
 * Determine the best encoding for the current block: dynamic trees, static
 * trees or store, and write out the encoded block.
 */
const _tr_flush_block$1 = (s, buf, stored_len, last) => {
//DeflateState *s;
//charf *buf;       /* input block, or NULL if too old */
//ulg stored_len;   /* length of input block */
//int last;         /* one if this is the last block for a file */

  let opt_lenb, static_lenb;  /* opt_len and static_len in bytes */
  let max_blindex = 0;        /* index of last bit length code of non zero freq */

  /* Build the Huffman trees unless a stored block is forced */
  if (s.level > 0) {

    /* Check if the file is binary or text */
    if (s.strm.data_type === Z_UNKNOWN$1) {
      s.strm.data_type = detect_data_type(s);
    }

    /* Construct the literal and distance trees */
    build_tree(s, s.l_desc);
    // Tracev((stderr, "\nlit data: dyn %ld, stat %ld", s->opt_len,
    //        s->static_len));

    build_tree(s, s.d_desc);
    // Tracev((stderr, "\ndist data: dyn %ld, stat %ld", s->opt_len,
    //        s->static_len));
    /* At this point, opt_len and static_len are the total bit lengths of
     * the compressed block data, excluding the tree representations.
     */

    /* Build the bit length tree for the above two trees, and get the index
     * in bl_order of the last bit length code to send.
     */
    max_blindex = build_bl_tree(s);

    /* Determine the best encoding. Compute the block lengths in bytes. */
    opt_lenb = (s.opt_len + 3 + 7) >>> 3;
    static_lenb = (s.static_len + 3 + 7) >>> 3;

    // Tracev((stderr, "\nopt %lu(%lu) stat %lu(%lu) stored %lu lit %u ",
    //        opt_lenb, s->opt_len, static_lenb, s->static_len, stored_len,
    //        s->sym_next / 3));

    if (static_lenb <= opt_lenb) { opt_lenb = static_lenb; }

  } else {
    // Assert(buf != (char*)0, "lost buf");
    opt_lenb = static_lenb = stored_len + 5; /* force a stored block */
  }

  if ((stored_len + 4 <= opt_lenb) && (buf !== -1)) {
    /* 4: two words for the lengths */

    /* The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
     * Otherwise we can't have processed more than WSIZE input bytes since
     * the last block flush, because compression would have been
     * successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
     * transform a block into a stored block.
     */
    _tr_stored_block$1(s, buf, stored_len, last);

  } else if (s.strategy === Z_FIXED$1 || static_lenb === opt_lenb) {

    send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
    compress_block(s, static_ltree, static_dtree);

  } else {
    send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
    send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
    compress_block(s, s.dyn_ltree, s.dyn_dtree);
  }
  // Assert (s->compressed_len == s->bits_sent, "bad compressed size");
  /* The above check is made mod 2^32, for files larger than 512 MB
   * and uLong implemented on 32 bits.
   */
  init_block(s);

  if (last) {
    bi_windup(s);
  }
  // Tracev((stderr,"\ncomprlen %lu(%lu) ", s->compressed_len>>3,
  //       s->compressed_len-7*last));
};

/* ===========================================================================
 * Save the match info and tally the frequency counts. Return true if
 * the current block must be flushed.
 */
const _tr_tally$1 = (s, dist, lc) => {
//    deflate_state *s;
//    unsigned dist;  /* distance of matched string */
//    unsigned lc;    /* match length-MIN_MATCH or unmatched char (if dist==0) */

  s.pending_buf[s.sym_buf + s.sym_next++] = dist;
  s.pending_buf[s.sym_buf + s.sym_next++] = dist >> 8;
  s.pending_buf[s.sym_buf + s.sym_next++] = lc;
  if (dist === 0) {
    /* lc is the unmatched char */
    s.dyn_ltree[lc * 2]/*.Freq*/++;
  } else {
    s.matches++;
    /* Here, lc is the match length - MIN_MATCH */
    dist--;             /* dist = match distance - 1 */
    //Assert((ush)dist < (ush)MAX_DIST(s) &&
    //       (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) &&
    //       (ush)d_code(dist) < (ush)D_CODES,  "_tr_tally: bad match");

    s.dyn_ltree[(_length_code[lc] + LITERALS$1 + 1) * 2]/*.Freq*/++;
    s.dyn_dtree[d_code(dist) * 2]/*.Freq*/++;
  }

  return (s.sym_next === s.sym_end);
};

var _tr_init_1  = _tr_init$1;
var _tr_stored_block_1 = _tr_stored_block$1;
var _tr_flush_block_1  = _tr_flush_block$1;
var _tr_tally_1 = _tr_tally$1;
var _tr_align_1 = _tr_align$1;

var trees = {
	_tr_init: _tr_init_1,
	_tr_stored_block: _tr_stored_block_1,
	_tr_flush_block: _tr_flush_block_1,
	_tr_tally: _tr_tally_1,
	_tr_align: _tr_align_1
};

// Note: adler32 takes 12% for level 0 and 2% for level 6.
// It isn't worth it to make additional optimizations as in original.
// Small size is preferable.

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

const adler32 = (adler, buf, len, pos) => {
  let s1 = (adler & 0xffff) |0,
      s2 = ((adler >>> 16) & 0xffff) |0,
      n = 0;

  while (len !== 0) {
    // Set limit ~ twice less than 5552, to keep
    // s2 in 31-bits, because we force signed ints.
    // in other case %= will fail.
    n = len > 2000 ? 2000 : len;
    len -= n;

    do {
      s1 = (s1 + buf[pos++]) |0;
      s2 = (s2 + s1) |0;
    } while (--n);

    s1 %= 65521;
    s2 %= 65521;
  }

  return (s1 | (s2 << 16)) |0;
};


var adler32_1 = adler32;

// Note: we can't get significant speed boost here.
// So write code to minimize size - no pregenerated tables
// and array tools dependencies.

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

// Use ordinary array, since untyped makes no boost here
const makeTable = () => {
  let c, table = [];

  for (var n = 0; n < 256; n++) {
    c = n;
    for (var k = 0; k < 8; k++) {
      c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
    }
    table[n] = c;
  }

  return table;
};

// Create table on load. Just 255 signed longs. Not a problem.
const crcTable = new Uint32Array(makeTable());


const crc32 = (crc, buf, len, pos) => {
  const t = crcTable;
  const end = pos + len;

  crc ^= -1;

  for (let i = pos; i < end; i++) {
    crc = (crc >>> 8) ^ t[(crc ^ buf[i]) & 0xFF];
  }

  return (crc ^ (-1)); // >>> 0;
};


var crc32_1 = crc32;

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var messages = {
  2:      'need dictionary',     /* Z_NEED_DICT       2  */
  1:      'stream end',          /* Z_STREAM_END      1  */
  0:      '',                    /* Z_OK              0  */
  '-1':   'file error',          /* Z_ERRNO         (-1) */
  '-2':   'stream error',        /* Z_STREAM_ERROR  (-2) */
  '-3':   'data error',          /* Z_DATA_ERROR    (-3) */
  '-4':   'insufficient memory', /* Z_MEM_ERROR     (-4) */
  '-5':   'buffer error',        /* Z_BUF_ERROR     (-5) */
  '-6':   'incompatible version' /* Z_VERSION_ERROR (-6) */
};

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

var constants$2 = {

  /* Allowed flush values; see deflate() and inflate() below for details */
  Z_NO_FLUSH:         0,
  Z_PARTIAL_FLUSH:    1,
  Z_SYNC_FLUSH:       2,
  Z_FULL_FLUSH:       3,
  Z_FINISH:           4,
  Z_BLOCK:            5,
  Z_TREES:            6,

  /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */
  Z_OK:               0,
  Z_STREAM_END:       1,
  Z_NEED_DICT:        2,
  Z_ERRNO:           -1,
  Z_STREAM_ERROR:    -2,
  Z_DATA_ERROR:      -3,
  Z_MEM_ERROR:       -4,
  Z_BUF_ERROR:       -5,
  //Z_VERSION_ERROR: -6,

  /* compression levels */
  Z_NO_COMPRESSION:         0,
  Z_BEST_SPEED:             1,
  Z_BEST_COMPRESSION:       9,
  Z_DEFAULT_COMPRESSION:   -1,


  Z_FILTERED:               1,
  Z_HUFFMAN_ONLY:           2,
  Z_RLE:                    3,
  Z_FIXED:                  4,
  Z_DEFAULT_STRATEGY:       0,

  /* Possible values of the data_type field (though see inflate()) */
  Z_BINARY:                 0,
  Z_TEXT:                   1,
  //Z_ASCII:                1, // = Z_TEXT (deprecated)
  Z_UNKNOWN:                2,

  /* The deflate compression method */
  Z_DEFLATED:               8
  //Z_NULL:                 null // Use -1 or null inline, depending on var type
};

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

const { _tr_init, _tr_stored_block, _tr_flush_block, _tr_tally, _tr_align } = trees;




/* Public constants ==========================================================*/
/* ===========================================================================*/

const {
  Z_NO_FLUSH: Z_NO_FLUSH$2, Z_PARTIAL_FLUSH, Z_FULL_FLUSH: Z_FULL_FLUSH$1, Z_FINISH: Z_FINISH$3, Z_BLOCK: Z_BLOCK$1,
  Z_OK: Z_OK$3, Z_STREAM_END: Z_STREAM_END$3, Z_STREAM_ERROR: Z_STREAM_ERROR$2, Z_DATA_ERROR: Z_DATA_ERROR$2, Z_BUF_ERROR: Z_BUF_ERROR$1,
  Z_DEFAULT_COMPRESSION: Z_DEFAULT_COMPRESSION$1,
  Z_FILTERED, Z_HUFFMAN_ONLY, Z_RLE, Z_FIXED, Z_DEFAULT_STRATEGY: Z_DEFAULT_STRATEGY$1,
  Z_UNKNOWN,
  Z_DEFLATED: Z_DEFLATED$2
} = constants$2;

/*============================================================================*/


const MAX_MEM_LEVEL = 9;
/* Maximum value for memLevel in deflateInit2 */
const MAX_WBITS$1 = 15;
/* 32K LZ77 window */
const DEF_MEM_LEVEL = 8;


const LENGTH_CODES  = 29;
/* number of length codes, not counting the special END_BLOCK code */
const LITERALS      = 256;
/* number of literal bytes 0..255 */
const L_CODES       = LITERALS + 1 + LENGTH_CODES;
/* number of Literal or Length codes, including the END_BLOCK code */
const D_CODES       = 30;
/* number of distance codes */
const BL_CODES      = 19;
/* number of codes used to transfer the bit lengths */
const HEAP_SIZE     = 2 * L_CODES + 1;
/* maximum heap size */
const MAX_BITS  = 15;
/* All codes must not exceed MAX_BITS bits */

const MIN_MATCH = 3;
const MAX_MATCH = 258;
const MIN_LOOKAHEAD = (MAX_MATCH + MIN_MATCH + 1);

const PRESET_DICT = 0x20;

const INIT_STATE    =  42;    /* zlib header -> BUSY_STATE */
//#ifdef GZIP
const GZIP_STATE    =  57;    /* gzip header -> BUSY_STATE | EXTRA_STATE */
//#endif
const EXTRA_STATE   =  69;    /* gzip extra block -> NAME_STATE */
const NAME_STATE    =  73;    /* gzip file name -> COMMENT_STATE */
const COMMENT_STATE =  91;    /* gzip comment -> HCRC_STATE */
const HCRC_STATE    = 103;    /* gzip header CRC -> BUSY_STATE */
const BUSY_STATE    = 113;    /* deflate -> FINISH_STATE */
const FINISH_STATE  = 666;    /* stream complete */

const BS_NEED_MORE      = 1; /* block not completed, need more input or more output */
const BS_BLOCK_DONE     = 2; /* block flush performed */
const BS_FINISH_STARTED = 3; /* finish started, need only more output at next deflate */
const BS_FINISH_DONE    = 4; /* finish done, accept no more input or output */

const OS_CODE = 0x03; // Unix :) . Don't detect, use this default.

const err = (strm, errorCode) => {
  strm.msg = messages[errorCode];
  return errorCode;
};

const rank = (f) => {
  return ((f) * 2) - ((f) > 4 ? 9 : 0);
};

const zero = (buf) => {
  let len = buf.length; while (--len >= 0) { buf[len] = 0; }
};

/* ===========================================================================
 * Slide the hash table when sliding the window down (could be avoided with 32
 * bit values at the expense of memory usage). We slide even when level == 0 to
 * keep the hash table consistent if we switch back to level > 0 later.
 */
const slide_hash = (s) => {
  let n, m;
  let p;
  let wsize = s.w_size;

  n = s.hash_size;
  p = n;
  do {
    m = s.head[--p];
    s.head[p] = (m >= wsize ? m - wsize : 0);
  } while (--n);
  n = wsize;
//#ifndef FASTEST
  p = n;
  do {
    m = s.prev[--p];
    s.prev[p] = (m >= wsize ? m - wsize : 0);
    /* If n is not on any hash chain, prev[n] is garbage but
     * its value will never be used.
     */
  } while (--n);
//#endif
};

/* eslint-disable new-cap */
let HASH_ZLIB = (s, prev, data) => ((prev << s.hash_shift) ^ data) & s.hash_mask;
// This hash causes less collisions, https://github.com/nodeca/pako/issues/135
// But breaks binary compatibility
//let HASH_FAST = (s, prev, data) => ((prev << 8) + (prev >> 8) + (data << 4)) & s.hash_mask;
let HASH = HASH_ZLIB;


/* =========================================================================
 * Flush as much pending output as possible. All deflate() output, except for
 * some deflate_stored() output, goes through this function so some
 * applications may wish to modify it to avoid allocating a large
 * strm->next_out buffer and copying into it. (See also read_buf()).
 */
const flush_pending = (strm) => {
  const s = strm.state;

  //_tr_flush_bits(s);
  let len = s.pending;
  if (len > strm.avail_out) {
    len = strm.avail_out;
  }
  if (len === 0) { return; }

  strm.output.set(s.pending_buf.subarray(s.pending_out, s.pending_out + len), strm.next_out);
  strm.next_out  += len;
  s.pending_out  += len;
  strm.total_out += len;
  strm.avail_out -= len;
  s.pending      -= len;
  if (s.pending === 0) {
    s.pending_out = 0;
  }
};


const flush_block_only = (s, last) => {
  _tr_flush_block(s, (s.block_start >= 0 ? s.block_start : -1), s.strstart - s.block_start, last);
  s.block_start = s.strstart;
  flush_pending(s.strm);
};


const put_byte = (s, b) => {
  s.pending_buf[s.pending++] = b;
};


/* =========================================================================
 * Put a short in the pending buffer. The 16-bit value is put in MSB order.
 * IN assertion: the stream state is correct and there is enough room in
 * pending_buf.
 */
const putShortMSB = (s, b) => {

  //  put_byte(s, (Byte)(b >> 8));
//  put_byte(s, (Byte)(b & 0xff));
  s.pending_buf[s.pending++] = (b >>> 8) & 0xff;
  s.pending_buf[s.pending++] = b & 0xff;
};


/* ===========================================================================
 * Read a new buffer from the current input stream, update the adler32
 * and total number of bytes read.  All deflate() input goes through
 * this function so some applications may wish to modify it to avoid
 * allocating a large strm->input buffer and copying from it.
 * (See also flush_pending()).
 */
const read_buf = (strm, buf, start, size) => {

  let len = strm.avail_in;

  if (len > size) { len = size; }
  if (len === 0) { return 0; }

  strm.avail_in -= len;

  // zmemcpy(buf, strm->next_in, len);
  buf.set(strm.input.subarray(strm.next_in, strm.next_in + len), start);
  if (strm.state.wrap === 1) {
    strm.adler = adler32_1(strm.adler, buf, len, start);
  }

  else if (strm.state.wrap === 2) {
    strm.adler = crc32_1(strm.adler, buf, len, start);
  }

  strm.next_in += len;
  strm.total_in += len;

  return len;
};


/* ===========================================================================
 * Set match_start to the longest match starting at the given string and
 * return its length. Matches shorter or equal to prev_length are discarded,
 * in which case the result is equal to prev_length and match_start is
 * garbage.
 * IN assertions: cur_match is the head of the hash chain for the current
 *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1
 * OUT assertion: the match length is not greater than s->lookahead.
 */
const longest_match = (s, cur_match) => {

  let chain_length = s.max_chain_length;      /* max hash chain length */
  let scan = s.strstart; /* current string */
  let match;                       /* matched string */
  let len;                           /* length of current match */
  let best_len = s.prev_length;              /* best match length so far */
  let nice_match = s.nice_match;             /* stop if match long enough */
  const limit = (s.strstart > (s.w_size - MIN_LOOKAHEAD)) ?
      s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0/*NIL*/;

  const _win = s.window; // shortcut

  const wmask = s.w_mask;
  const prev  = s.prev;

  /* Stop when cur_match becomes <= limit. To simplify the code,
   * we prevent matches with the string of window index 0.
   */

  const strend = s.strstart + MAX_MATCH;
  let scan_end1  = _win[scan + best_len - 1];
  let scan_end   = _win[scan + best_len];

  /* The code is optimized for HASH_BITS >= 8 and MAX_MATCH-2 multiple of 16.
   * It is easy to get rid of this optimization if necessary.
   */
  // Assert(s->hash_bits >= 8 && MAX_MATCH == 258, "Code too clever");

  /* Do not waste too much time if we already have a good match: */
  if (s.prev_length >= s.good_match) {
    chain_length >>= 2;
  }
  /* Do not look for matches beyond the end of the input. This is necessary
   * to make deflate deterministic.
   */
  if (nice_match > s.lookahead) { nice_match = s.lookahead; }

  // Assert((ulg)s->strstart <= s->window_size-MIN_LOOKAHEAD, "need lookahead");

  do {
    // Assert(cur_match < s->strstart, "no future");
    match = cur_match;

    /* Skip to next match if the match length cannot increase
     * or if the match length is less than 2.  Note that the checks below
     * for insufficient lookahead only occur occasionally for performance
     * reasons.  Therefore uninitialized memory will be accessed, and
     * conditional jumps will be made that depend on those values.
     * However the length of the match is limited to the lookahead, so
     * the output of deflate is not affected by the uninitialized values.
     */

    if (_win[match + best_len]     !== scan_end  ||
        _win[match + best_len - 1] !== scan_end1 ||
        _win[match]                !== _win[scan] ||
        _win[++match]              !== _win[scan + 1]) {
      continue;
    }

    /* The check at best_len-1 can be removed because it will be made
     * again later. (This heuristic is not always a win.)
     * It is not necessary to compare scan[2] and match[2] since they
     * are always equal when the other bytes match, given that
     * the hash keys are equal and that HASH_BITS >= 8.
     */
    scan += 2;
    match++;
    // Assert(*scan == *match, "match[2]?");

    /* We check for insufficient lookahead only every 8th comparison;
     * the 256th check will be made at strstart+258.
     */
    do {
      /*jshint noempty:false*/
    } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             _win[++scan] === _win[++match] && _win[++scan] === _win[++match] &&
             scan < strend);

    // Assert(scan <= s->window+(unsigned)(s->window_size-1), "wild scan");

    len = MAX_MATCH - (strend - scan);
    scan = strend - MAX_MATCH;

    if (len > best_len) {
      s.match_start = cur_match;
      best_len = len;
      if (len >= nice_match) {
        break;
      }
      scan_end1  = _win[scan + best_len - 1];
      scan_end   = _win[scan + best_len];
    }
  } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);

  if (best_len <= s.lookahead) {
    return best_len;
  }
  return s.lookahead;
};


/* ===========================================================================
 * Fill the window when the lookahead becomes insufficient.
 * Updates strstart and lookahead.
 *
 * IN assertion: lookahead < MIN_LOOKAHEAD
 * OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
 *    At least one byte has been read, or avail_in == 0; reads are
 *    performed for at least two bytes (required for the zip translate_eol
 *    option -- not supported here).
 */
const fill_window = (s) => {

  const _w_size = s.w_size;
  let n, more, str;

  //Assert(s->lookahead < MIN_LOOKAHEAD, "already enough lookahead");

  do {
    more = s.window_size - s.lookahead - s.strstart;

    // JS ints have 32 bit, block below not needed
    /* Deal with !@#$% 64K limit: */
    //if (sizeof(int) <= 2) {
    //    if (more == 0 && s->strstart == 0 && s->lookahead == 0) {
    //        more = wsize;
    //
    //  } else if (more == (unsigned)(-1)) {
    //        /* Very unlikely, but possible on 16 bit machine if
    //         * strstart == 0 && lookahead == 1 (input done a byte at time)
    //         */
    //        more--;
    //    }
    //}


    /* If the window is almost full and there is insufficient lookahead,
     * move the upper half to the lower one to make room in the upper half.
     */
    if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {

      s.window.set(s.window.subarray(_w_size, _w_size + _w_size - more), 0);
      s.match_start -= _w_size;
      s.strstart -= _w_size;
      /* we now have strstart >= MAX_DIST */
      s.block_start -= _w_size;
      if (s.insert > s.strstart) {
        s.insert = s.strstart;
      }
      slide_hash(s);
      more += _w_size;
    }
    if (s.strm.avail_in === 0) {
      break;
    }

    /* If there was no sliding:
     *    strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
     *    more == window_size - lookahead - strstart
     * => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
     * => more >= window_size - 2*WSIZE + 2
     * In the BIG_MEM or MMAP case (not yet supported),
     *   window_size == input_size + MIN_LOOKAHEAD  &&
     *   strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
     * Otherwise, window_size == 2*WSIZE so more >= 2.
     * If there was sliding, more >= WSIZE. So in all cases, more >= 2.
     */
    //Assert(more >= 2, "more < 2");
    n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
    s.lookahead += n;

    /* Initialize the hash value now that we have some input: */
    if (s.lookahead + s.insert >= MIN_MATCH) {
      str = s.strstart - s.insert;
      s.ins_h = s.window[str];

      /* UPDATE_HASH(s, s->ins_h, s->window[str + 1]); */
      s.ins_h = HASH(s, s.ins_h, s.window[str + 1]);
//#if MIN_MATCH != 3
//        Call update_hash() MIN_MATCH-3 more times
//#endif
      while (s.insert) {
        /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
        s.ins_h = HASH(s, s.ins_h, s.window[str + MIN_MATCH - 1]);

        s.prev[str & s.w_mask] = s.head[s.ins_h];
        s.head[s.ins_h] = str;
        str++;
        s.insert--;
        if (s.lookahead + s.insert < MIN_MATCH) {
          break;
        }
      }
    }
    /* If the whole input has less than MIN_MATCH bytes, ins_h is garbage,
     * but this is not important since only literal bytes will be emitted.
     */

  } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);

  /* If the WIN_INIT bytes after the end of the current data have never been
   * written, then zero those bytes in order to avoid memory check reports of
   * the use of uninitialized (or uninitialised as Julian writes) bytes by
   * the longest match routines.  Update the high water mark for the next
   * time through here.  WIN_INIT is set to MAX_MATCH since the longest match
   * routines allow scanning to strstart + MAX_MATCH, ignoring lookahead.
   */
//  if (s.high_water < s.window_size) {
//    const curr = s.strstart + s.lookahead;
//    let init = 0;
//
//    if (s.high_water < curr) {
//      /* Previous high water mark below current data -- zero WIN_INIT
//       * bytes or up to end of window, whichever is less.
//       */
//      init = s.window_size - curr;
//      if (init > WIN_INIT)
//        init = WIN_INIT;
//      zmemzero(s->window + curr, (unsigned)init);
//      s->high_water = curr + init;
//    }
//    else if (s->high_water < (ulg)curr + WIN_INIT) {
//      /* High water mark at or above current data, but below current data
//       * plus WIN_INIT -- zero out to current data plus WIN_INIT, or up
//       * to end of window, whichever is less.
//       */
//      init = (ulg)curr + WIN_INIT - s->high_water;
//      if (init > s->window_size - s->high_water)
//        init = s->window_size - s->high_water;
//      zmemzero(s->window + s->high_water, (unsigned)init);
//      s->high_water += init;
//    }
//  }
//
//  Assert((ulg)s->strstart <= s->window_size - MIN_LOOKAHEAD,
//    "not enough room for search");
};

/* ===========================================================================
 * Copy without compression as much as possible from the input stream, return
 * the current block state.
 *
 * In case deflateParams() is used to later switch to a non-zero compression
 * level, s->matches (otherwise unused when storing) keeps track of the number
 * of hash table slides to perform. If s->matches is 1, then one hash table
 * slide will be done when switching. If s->matches is 2, the maximum value
 * allowed here, then the hash table will be cleared, since two or more slides
 * is the same as a clear.
 *
 * deflate_stored() is written to minimize the number of times an input byte is
 * copied. It is most efficient with large input and output buffers, which
 * maximizes the opportunites to have a single copy from next_in to next_out.
 */
const deflate_stored = (s, flush) => {

  /* Smallest worthy block size when not flushing or finishing. By default
   * this is 32K. This can be as small as 507 bytes for memLevel == 1. For
   * large input and output buffers, the stored block size will be larger.
   */
  let min_block = s.pending_buf_size - 5 > s.w_size ? s.w_size : s.pending_buf_size - 5;

  /* Copy as many min_block or larger stored blocks directly to next_out as
   * possible. If flushing, copy the remaining available input to next_out as
   * stored blocks, if there is enough space.
   */
  let len, left, have, last = 0;
  let used = s.strm.avail_in;
  do {
    /* Set len to the maximum size block that we can copy directly with the
     * available input data and output space. Set left to how much of that
     * would be copied from what's left in the window.
     */
    len = 65535/* MAX_STORED */;     /* maximum deflate stored block length */
    have = (s.bi_valid + 42) >> 3;     /* number of header bytes */
    if (s.strm.avail_out < have) {         /* need room for header */
      break;
    }
      /* maximum stored block length that will fit in avail_out: */
    have = s.strm.avail_out - have;
    left = s.strstart - s.block_start;  /* bytes left in window */
    if (len > left + s.strm.avail_in) {
      len = left + s.strm.avail_in;   /* limit len to the input */
    }
    if (len > have) {
      len = have;             /* limit len to the output */
    }

    /* If the stored block would be less than min_block in length, or if
     * unable to copy all of the available input when flushing, then try
     * copying to the window and the pending buffer instead. Also don't
     * write an empty block when flushing -- deflate() does that.
     */
    if (len < min_block && ((len === 0 && flush !== Z_FINISH$3) ||
                        flush === Z_NO_FLUSH$2 ||
                        len !== left + s.strm.avail_in)) {
      break;
    }

    /* Make a dummy stored block in pending to get the header bytes,
     * including any pending bits. This also updates the debugging counts.
     */
    last = flush === Z_FINISH$3 && len === left + s.strm.avail_in ? 1 : 0;
    _tr_stored_block(s, 0, 0, last);

    /* Replace the lengths in the dummy stored block with len. */
    s.pending_buf[s.pending - 4] = len;
    s.pending_buf[s.pending - 3] = len >> 8;
    s.pending_buf[s.pending - 2] = ~len;
    s.pending_buf[s.pending - 1] = ~len >> 8;

    /* Write the stored block header bytes. */
    flush_pending(s.strm);

//#ifdef ZLIB_DEBUG
//    /* Update debugging counts for the data about to be copied. */
//    s->compressed_len += len << 3;
//    s->bits_sent += len << 3;
//#endif

    /* Copy uncompressed bytes from the window to next_out. */
    if (left) {
      if (left > len) {
        left = len;
      }
      //zmemcpy(s->strm->next_out, s->window + s->block_start, left);
      s.strm.output.set(s.window.subarray(s.block_start, s.block_start + left), s.strm.next_out);
      s.strm.next_out += left;
      s.strm.avail_out -= left;
      s.strm.total_out += left;
      s.block_start += left;
      len -= left;
    }

    /* Copy uncompressed bytes directly from next_in to next_out, updating
     * the check value.
     */
    if (len) {
      read_buf(s.strm, s.strm.output, s.strm.next_out, len);
      s.strm.next_out += len;
      s.strm.avail_out -= len;
      s.strm.total_out += len;
    }
  } while (last === 0);

  /* Update the sliding window with the last s->w_size bytes of the copied
   * data, or append all of the copied data to the existing window if less
   * than s->w_size bytes were copied. Also update the number of bytes to
   * insert in the hash tables, in the event that deflateParams() switches to
   * a non-zero compression level.
   */
  used -= s.strm.avail_in;    /* number of input bytes directly copied */
  if (used) {
    /* If any input was used, then no unused input remains in the window,
     * therefore s->block_start == s->strstart.
     */
    if (used >= s.w_size) {  /* supplant the previous history */
      s.matches = 2;     /* clear hash */
      //zmemcpy(s->window, s->strm->next_in - s->w_size, s->w_size);
      s.window.set(s.strm.input.subarray(s.strm.next_in - s.w_size, s.strm.next_in), 0);
      s.strstart = s.w_size;
      s.insert = s.strstart;
    }
    else {
      if (s.window_size - s.strstart <= used) {
        /* Slide the window down. */
        s.strstart -= s.w_size;
        //zmemcpy(s->window, s->window + s->w_size, s->strstart);
        s.window.set(s.window.subarray(s.w_size, s.w_size + s.strstart), 0);
        if (s.matches < 2) {
          s.matches++;   /* add a pending slide_hash() */
        }
        if (s.insert > s.strstart) {
          s.insert = s.strstart;
        }
      }
      //zmemcpy(s->window + s->strstart, s->strm->next_in - used, used);
      s.window.set(s.strm.input.subarray(s.strm.next_in - used, s.strm.next_in), s.strstart);
      s.strstart += used;
      s.insert += used > s.w_size - s.insert ? s.w_size - s.insert : used;
    }
    s.block_start = s.strstart;
  }
  if (s.high_water < s.strstart) {
    s.high_water = s.strstart;
  }

  /* If the last block was written to next_out, then done. */
  if (last) {
    return BS_FINISH_DONE;
  }

  /* If flushing and all input has been consumed, then done. */
  if (flush !== Z_NO_FLUSH$2 && flush !== Z_FINISH$3 &&
    s.strm.avail_in === 0 && s.strstart === s.block_start) {
    return BS_BLOCK_DONE;
  }

  /* Fill the window with any remaining input. */
  have = s.window_size - s.strstart;
  if (s.strm.avail_in > have && s.block_start >= s.w_size) {
    /* Slide the window down. */
    s.block_start -= s.w_size;
    s.strstart -= s.w_size;
    //zmemcpy(s->window, s->window + s->w_size, s->strstart);
    s.window.set(s.window.subarray(s.w_size, s.w_size + s.strstart), 0);
    if (s.matches < 2) {
      s.matches++;       /* add a pending slide_hash() */
    }
    have += s.w_size;      /* more space now */
    if (s.insert > s.strstart) {
      s.insert = s.strstart;
    }
  }
  if (have > s.strm.avail_in) {
    have = s.strm.avail_in;
  }
  if (have) {
    read_buf(s.strm, s.window, s.strstart, have);
    s.strstart += have;
    s.insert += have > s.w_size - s.insert ? s.w_size - s.insert : have;
  }
  if (s.high_water < s.strstart) {
    s.high_water = s.strstart;
  }

  /* There was not enough avail_out to write a complete worthy or flushed
   * stored block to next_out. Write a stored block to pending instead, if we
   * have enough input for a worthy block, or if flushing and there is enough
   * room for the remaining input as a stored block in the pending buffer.
   */
  have = (s.bi_valid + 42) >> 3;     /* number of header bytes */
    /* maximum stored block length that will fit in pending: */
  have = s.pending_buf_size - have > 65535/* MAX_STORED */ ? 65535/* MAX_STORED */ : s.pending_buf_size - have;
  min_block = have > s.w_size ? s.w_size : have;
  left = s.strstart - s.block_start;
  if (left >= min_block ||
     ((left || flush === Z_FINISH$3) && flush !== Z_NO_FLUSH$2 &&
     s.strm.avail_in === 0 && left <= have)) {
    len = left > have ? have : left;
    last = flush === Z_FINISH$3 && s.strm.avail_in === 0 &&
         len === left ? 1 : 0;
    _tr_stored_block(s, s.block_start, len, last);
    s.block_start += len;
    flush_pending(s.strm);
  }

  /* We've done all we can with the available input and output. */
  return last ? BS_FINISH_STARTED : BS_NEED_MORE;
};


/* ===========================================================================
 * Compress as much as possible from the input stream, return the current
 * block state.
 * This function does not perform lazy evaluation of matches and inserts
 * new strings in the dictionary only for unmatched strings or for short
 * matches. It is used only for the fast compression options.
 */
const deflate_fast = (s, flush) => {

  let hash_head;        /* head of the hash chain */
  let bflush;           /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH$2) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) {
        break; /* flush the current block */
      }
    }

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    hash_head = 0/*NIL*/;
    if (s.lookahead >= MIN_MATCH) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }

    /* Find the longest match, discarding those <= prev_length.
     * At this point we have always match_length < MIN_MATCH
     */
    if (hash_head !== 0/*NIL*/ && ((s.strstart - hash_head) <= (s.w_size - MIN_LOOKAHEAD))) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */
    }
    if (s.match_length >= MIN_MATCH) {
      // check_match(s, s.strstart, s.match_start, s.match_length); // for debug only

      /*** _tr_tally_dist(s, s.strstart - s.match_start,
                     s.match_length - MIN_MATCH, bflush); ***/
      bflush = _tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);

      s.lookahead -= s.match_length;

      /* Insert new strings in the hash table only if the match length
       * is not too large. This saves time but degrades compression.
       */
      if (s.match_length <= s.max_lazy_match/*max_insert_length*/ && s.lookahead >= MIN_MATCH) {
        s.match_length--; /* string at strstart already in table */
        do {
          s.strstart++;
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
          /* strstart never exceeds WSIZE-MAX_MATCH, so there are
           * always MIN_MATCH bytes ahead.
           */
        } while (--s.match_length !== 0);
        s.strstart++;
      } else
      {
        s.strstart += s.match_length;
        s.match_length = 0;
        s.ins_h = s.window[s.strstart];
        /* UPDATE_HASH(s, s.ins_h, s.window[s.strstart+1]); */
        s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + 1]);

//#if MIN_MATCH != 3
//                Call UPDATE_HASH() MIN_MATCH-3 more times
//#endif
        /* If lookahead < MIN_MATCH, ins_h is garbage, but it does not
         * matter since it will be recomputed at next deflate call.
         */
      }
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s.window[s.strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = _tr_tally(s, 0, s.window[s.strstart]);

      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = ((s.strstart < (MIN_MATCH - 1)) ? s.strstart : MIN_MATCH - 1);
  if (flush === Z_FINISH$3) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.sym_next) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
};

/* ===========================================================================
 * Same as above, but achieves better compression. We use a lazy
 * evaluation for matches: a match is finally adopted only if there is
 * no better match at the next window position.
 */
const deflate_slow = (s, flush) => {

  let hash_head;          /* head of hash chain */
  let bflush;              /* set if current block must be flushed */

  let max_insert;

  /* Process the input block. */
  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the next match, plus MIN_MATCH bytes to insert the
     * string following the next match.
     */
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH$2) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) { break; } /* flush the current block */
    }

    /* Insert the string window[strstart .. strstart+2] in the
     * dictionary, and set hash_head to the head of the hash chain:
     */
    hash_head = 0/*NIL*/;
    if (s.lookahead >= MIN_MATCH) {
      /*** INSERT_STRING(s, s.strstart, hash_head); ***/
      s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
      /***/
    }

    /* Find the longest match, discarding those <= prev_length.
     */
    s.prev_length = s.match_length;
    s.prev_match = s.match_start;
    s.match_length = MIN_MATCH - 1;

    if (hash_head !== 0/*NIL*/ && s.prev_length < s.max_lazy_match &&
        s.strstart - hash_head <= (s.w_size - MIN_LOOKAHEAD)/*MAX_DIST(s)*/) {
      /* To simplify the code, we prevent matches with the string
       * of window index 0 (in particular we have to avoid a match
       * of the string with itself at the start of the input file).
       */
      s.match_length = longest_match(s, hash_head);
      /* longest_match() sets match_start */

      if (s.match_length <= 5 &&
         (s.strategy === Z_FILTERED || (s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096/*TOO_FAR*/))) {

        /* If prev_match is also MIN_MATCH, match_start is garbage
         * but we will ignore the current match anyway.
         */
        s.match_length = MIN_MATCH - 1;
      }
    }
    /* If there was a match at the previous step and the current
     * match is not better, output the previous match:
     */
    if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
      max_insert = s.strstart + s.lookahead - MIN_MATCH;
      /* Do not insert strings in hash table beyond this. */

      //check_match(s, s.strstart-1, s.prev_match, s.prev_length);

      /***_tr_tally_dist(s, s.strstart - 1 - s.prev_match,
                     s.prev_length - MIN_MATCH, bflush);***/
      bflush = _tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
      /* Insert in hash table all strings up to the end of the match.
       * strstart-1 and strstart are already inserted. If there is not
       * enough lookahead, the last two strings are not inserted in
       * the hash table.
       */
      s.lookahead -= s.prev_length - 1;
      s.prev_length -= 2;
      do {
        if (++s.strstart <= max_insert) {
          /*** INSERT_STRING(s, s.strstart, hash_head); ***/
          s.ins_h = HASH(s, s.ins_h, s.window[s.strstart + MIN_MATCH - 1]);
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
          /***/
        }
      } while (--s.prev_length !== 0);
      s.match_available = 0;
      s.match_length = MIN_MATCH - 1;
      s.strstart++;

      if (bflush) {
        /*** FLUSH_BLOCK(s, 0); ***/
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
        /***/
      }

    } else if (s.match_available) {
      /* If there was no match at the previous position, output a
       * single literal. If there was a match but the current match
       * is longer, truncate the previous match to a single literal.
       */
      //Tracevv((stderr,"%c", s->window[s->strstart-1]));
      /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
      bflush = _tr_tally(s, 0, s.window[s.strstart - 1]);

      if (bflush) {
        /*** FLUSH_BLOCK_ONLY(s, 0) ***/
        flush_block_only(s, false);
        /***/
      }
      s.strstart++;
      s.lookahead--;
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    } else {
      /* There is no previous match to compare with, wait for
       * the next step to decide.
       */
      s.match_available = 1;
      s.strstart++;
      s.lookahead--;
    }
  }
  //Assert (flush != Z_NO_FLUSH, "no flush?");
  if (s.match_available) {
    //Tracevv((stderr,"%c", s->window[s->strstart-1]));
    /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
    bflush = _tr_tally(s, 0, s.window[s.strstart - 1]);

    s.match_available = 0;
  }
  s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
  if (flush === Z_FINISH$3) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.sym_next) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }

  return BS_BLOCK_DONE;
};


/* ===========================================================================
 * For Z_RLE, simply look for runs of bytes, generate matches only of distance
 * one.  Do not maintain a hash table.  (It will be regenerated if this run of
 * deflate switches away from Z_RLE.)
 */
const deflate_rle = (s, flush) => {

  let bflush;            /* set if current block must be flushed */
  let prev;              /* byte at distance one to match */
  let scan, strend;      /* scan goes up to strend for length of run */

  const _win = s.window;

  for (;;) {
    /* Make sure that we always have enough lookahead, except
     * at the end of the input file. We need MAX_MATCH bytes
     * for the longest run, plus one for the unrolled loop.
     */
    if (s.lookahead <= MAX_MATCH) {
      fill_window(s);
      if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH$2) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) { break; } /* flush the current block */
    }

    /* See how many times the previous byte repeats */
    s.match_length = 0;
    if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
      scan = s.strstart - 1;
      prev = _win[scan];
      if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
        strend = s.strstart + MAX_MATCH;
        do {
          /*jshint noempty:false*/
        } while (prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 prev === _win[++scan] && prev === _win[++scan] &&
                 scan < strend);
        s.match_length = MAX_MATCH - (strend - scan);
        if (s.match_length > s.lookahead) {
          s.match_length = s.lookahead;
        }
      }
      //Assert(scan <= s->window+(uInt)(s->window_size-1), "wild scan");
    }

    /* Emit match if have run of MIN_MATCH or longer, else emit literal */
    if (s.match_length >= MIN_MATCH) {
      //check_match(s, s.strstart, s.strstart - 1, s.match_length);

      /*** _tr_tally_dist(s, 1, s.match_length - MIN_MATCH, bflush); ***/
      bflush = _tr_tally(s, 1, s.match_length - MIN_MATCH);

      s.lookahead -= s.match_length;
      s.strstart += s.match_length;
      s.match_length = 0;
    } else {
      /* No match, output a literal byte */
      //Tracevv((stderr,"%c", s->window[s->strstart]));
      /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
      bflush = _tr_tally(s, 0, s.window[s.strstart]);

      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH$3) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.sym_next) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
};

/* ===========================================================================
 * For Z_HUFFMAN_ONLY, do not look for matches.  Do not maintain a hash table.
 * (It will be regenerated if this run of deflate switches away from Huffman.)
 */
const deflate_huff = (s, flush) => {

  let bflush;             /* set if current block must be flushed */

  for (;;) {
    /* Make sure that we have a literal to write. */
    if (s.lookahead === 0) {
      fill_window(s);
      if (s.lookahead === 0) {
        if (flush === Z_NO_FLUSH$2) {
          return BS_NEED_MORE;
        }
        break;      /* flush the current block */
      }
    }

    /* Output a literal byte */
    s.match_length = 0;
    //Tracevv((stderr,"%c", s->window[s->strstart]));
    /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
    bflush = _tr_tally(s, 0, s.window[s.strstart]);
    s.lookahead--;
    s.strstart++;
    if (bflush) {
      /*** FLUSH_BLOCK(s, 0); ***/
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
      /***/
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH$3) {
    /*** FLUSH_BLOCK(s, 1); ***/
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    /***/
    return BS_FINISH_DONE;
  }
  if (s.sym_next) {
    /*** FLUSH_BLOCK(s, 0); ***/
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
    /***/
  }
  return BS_BLOCK_DONE;
};

/* Values for max_lazy_match, good_match and max_chain_length, depending on
 * the desired pack level (0..9). The values given below have been tuned to
 * exclude worst case performance for pathological files. Better values may be
 * found for specific files.
 */
function Config(good_length, max_lazy, nice_length, max_chain, func) {

  this.good_length = good_length;
  this.max_lazy = max_lazy;
  this.nice_length = nice_length;
  this.max_chain = max_chain;
  this.func = func;
}

const configuration_table = [
  /*      good lazy nice chain */
  new Config(0, 0, 0, 0, deflate_stored),          /* 0 store only */
  new Config(4, 4, 8, 4, deflate_fast),            /* 1 max speed, no lazy matches */
  new Config(4, 5, 16, 8, deflate_fast),           /* 2 */
  new Config(4, 6, 32, 32, deflate_fast),          /* 3 */

  new Config(4, 4, 16, 16, deflate_slow),          /* 4 lazy matches */
  new Config(8, 16, 32, 32, deflate_slow),         /* 5 */
  new Config(8, 16, 128, 128, deflate_slow),       /* 6 */
  new Config(8, 32, 128, 256, deflate_slow),       /* 7 */
  new Config(32, 128, 258, 1024, deflate_slow),    /* 8 */
  new Config(32, 258, 258, 4096, deflate_slow)     /* 9 max compression */
];


/* ===========================================================================
 * Initialize the "longest match" routines for a new zlib stream
 */
const lm_init = (s) => {

  s.window_size = 2 * s.w_size;

  /*** CLEAR_HASH(s); ***/
  zero(s.head); // Fill with NIL (= 0);

  /* Set the default configuration parameters:
   */
  s.max_lazy_match = configuration_table[s.level].max_lazy;
  s.good_match = configuration_table[s.level].good_length;
  s.nice_match = configuration_table[s.level].nice_length;
  s.max_chain_length = configuration_table[s.level].max_chain;

  s.strstart = 0;
  s.block_start = 0;
  s.lookahead = 0;
  s.insert = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  s.ins_h = 0;
};


function DeflateState() {
  this.strm = null;            /* pointer back to this zlib stream */
  this.status = 0;            /* as the name implies */
  this.pending_buf = null;      /* output still pending */
  this.pending_buf_size = 0;  /* size of pending_buf */
  this.pending_out = 0;       /* next pending byte to output to the stream */
  this.pending = 0;           /* nb of bytes in the pending buffer */
  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip */
  this.gzhead = null;         /* gzip header information to write */
  this.gzindex = 0;           /* where in extra, name, or comment */
  this.method = Z_DEFLATED$2; /* can only be DEFLATED */
  this.last_flush = -1;   /* value of flush param for previous deflate call */

  this.w_size = 0;  /* LZ77 window size (32K by default) */
  this.w_bits = 0;  /* log2(w_size)  (8..16) */
  this.w_mask = 0;  /* w_size - 1 */

  this.window = null;
  /* Sliding window. Input bytes are read into the second half of the window,
   * and move to the first half later to keep a dictionary of at least wSize
   * bytes. With this organization, matches are limited to a distance of
   * wSize-MAX_MATCH bytes, but this ensures that IO is always
   * performed with a length multiple of the block size.
   */

  this.window_size = 0;
  /* Actual size of window: 2*wSize, except when the user input buffer
   * is directly used as sliding window.
   */

  this.prev = null;
  /* Link to older string with same hash index. To limit the size of this
   * array to 64K, this link is maintained only for the last 32K strings.
   * An index in this array is thus a window index modulo 32K.
   */

  this.head = null;   /* Heads of the hash chains or NIL. */

  this.ins_h = 0;       /* hash index of string to be inserted */
  this.hash_size = 0;   /* number of elements in hash table */
  this.hash_bits = 0;   /* log2(hash_size) */
  this.hash_mask = 0;   /* hash_size-1 */

  this.hash_shift = 0;
  /* Number of bits by which ins_h must be shifted at each input
   * step. It must be such that after MIN_MATCH steps, the oldest
   * byte no longer takes part in the hash key, that is:
   *   hash_shift * MIN_MATCH >= hash_bits
   */

  this.block_start = 0;
  /* Window position at the beginning of the current output block. Gets
   * negative when the window is moved backwards.
   */

  this.match_length = 0;      /* length of best match */
  this.prev_match = 0;        /* previous match */
  this.match_available = 0;   /* set if previous match exists */
  this.strstart = 0;          /* start of string to insert */
  this.match_start = 0;       /* start of matching string */
  this.lookahead = 0;         /* number of valid bytes ahead in window */

  this.prev_length = 0;
  /* Length of the best match at previous step. Matches not greater than this
   * are discarded. This is used in the lazy match evaluation.
   */

  this.max_chain_length = 0;
  /* To speed up deflation, hash chains are never searched beyond this
   * length.  A higher limit improves compression ratio but degrades the
   * speed.
   */

  this.max_lazy_match = 0;
  /* Attempt to find a better match only when the current match is strictly
   * smaller than this value. This mechanism is used only for compression
   * levels >= 4.
   */
  // That's alias to max_lazy_match, don't use directly
  //this.max_insert_length = 0;
  /* Insert new strings in the hash table only if the match length is not
   * greater than this length. This saves time but degrades compression.
   * max_insert_length is used only for compression levels <= 3.
   */

  this.level = 0;     /* compression level (1..9) */
  this.strategy = 0;  /* favor or force Huffman coding*/

  this.good_match = 0;
  /* Use a faster search when the previous match is longer than this */

  this.nice_match = 0; /* Stop searching when current match exceeds this */

              /* used by trees.c: */

  /* Didn't use ct_data typedef below to suppress compiler warning */

  // struct ct_data_s dyn_ltree[HEAP_SIZE];   /* literal and length tree */
  // struct ct_data_s dyn_dtree[2*D_CODES+1]; /* distance tree */
  // struct ct_data_s bl_tree[2*BL_CODES+1];  /* Huffman tree for bit lengths */

  // Use flat array of DOUBLE size, with interleaved fata,
  // because JS does not support effective
  this.dyn_ltree  = new Uint16Array(HEAP_SIZE * 2);
  this.dyn_dtree  = new Uint16Array((2 * D_CODES + 1) * 2);
  this.bl_tree    = new Uint16Array((2 * BL_CODES + 1) * 2);
  zero(this.dyn_ltree);
  zero(this.dyn_dtree);
  zero(this.bl_tree);

  this.l_desc   = null;         /* desc. for literal tree */
  this.d_desc   = null;         /* desc. for distance tree */
  this.bl_desc  = null;         /* desc. for bit length tree */

  //ush bl_count[MAX_BITS+1];
  this.bl_count = new Uint16Array(MAX_BITS + 1);
  /* number of codes at each bit length for an optimal tree */

  //int heap[2*L_CODES+1];      /* heap used to build the Huffman trees */
  this.heap = new Uint16Array(2 * L_CODES + 1);  /* heap used to build the Huffman trees */
  zero(this.heap);

  this.heap_len = 0;               /* number of elements in the heap */
  this.heap_max = 0;               /* element of largest frequency */
  /* The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
   * The same heap array is used to build all trees.
   */

  this.depth = new Uint16Array(2 * L_CODES + 1); //uch depth[2*L_CODES+1];
  zero(this.depth);
  /* Depth of each subtree used as tie breaker for trees of equal frequency
   */

  this.sym_buf = 0;        /* buffer for distances and literals/lengths */

  this.lit_bufsize = 0;
  /* Size of match buffer for literals/lengths.  There are 4 reasons for
   * limiting lit_bufsize to 64K:
   *   - frequencies can be kept in 16 bit counters
   *   - if compression is not successful for the first block, all input
   *     data is still in the window so we can still emit a stored block even
   *     when input comes from standard input.  (This can also be done for
   *     all blocks if lit_bufsize is not greater than 32K.)
   *   - if compression is not successful for a file smaller than 64K, we can
   *     even emit a stored file instead of a stored block (saving 5 bytes).
   *     This is applicable only for zip (not gzip or zlib).
   *   - creating new Huffman trees less frequently may not provide fast
   *     adaptation to changes in the input data statistics. (Take for
   *     example a binary file with poorly compressible code followed by
   *     a highly compressible string table.) Smaller buffer sizes give
   *     fast adaptation but have of course the overhead of transmitting
   *     trees more frequently.
   *   - I can't count above 4
   */

  this.sym_next = 0;      /* running index in sym_buf */
  this.sym_end = 0;       /* symbol table full when sym_next reaches this */

  this.opt_len = 0;       /* bit length of current block with optimal trees */
  this.static_len = 0;    /* bit length of current block with static trees */
  this.matches = 0;       /* number of string matches in current block */
  this.insert = 0;        /* bytes at end of window left to insert */


  this.bi_buf = 0;
  /* Output buffer. bits are inserted starting at the bottom (least
   * significant bits).
   */
  this.bi_valid = 0;
  /* Number of valid bits in bi_buf.  All bits above the last valid bit
   * are always zero.
   */

  // Used for window memory init. We safely ignore it for JS. That makes
  // sense only for pointers and memory check tools.
  //this.high_water = 0;
  /* High water mark offset in window for initialized bytes -- bytes above
   * this are set to zero in order to avoid memory check warnings when
   * longest match routines access bytes past the input.  This is then
   * updated to the new high water mark.
   */
}


/* =========================================================================
 * Check for a valid deflate stream state. Return 0 if ok, 1 if not.
 */
const deflateStateCheck = (strm) => {

  if (!strm) {
    return 1;
  }
  const s = strm.state;
  if (!s || s.strm !== strm || (s.status !== INIT_STATE &&
//#ifdef GZIP
                                s.status !== GZIP_STATE &&
//#endif
                                s.status !== EXTRA_STATE &&
                                s.status !== NAME_STATE &&
                                s.status !== COMMENT_STATE &&
                                s.status !== HCRC_STATE &&
                                s.status !== BUSY_STATE &&
                                s.status !== FINISH_STATE)) {
    return 1;
  }
  return 0;
};


const deflateResetKeep = (strm) => {

  if (deflateStateCheck(strm)) {
    return err(strm, Z_STREAM_ERROR$2);
  }

  strm.total_in = strm.total_out = 0;
  strm.data_type = Z_UNKNOWN;

  const s = strm.state;
  s.pending = 0;
  s.pending_out = 0;

  if (s.wrap < 0) {
    s.wrap = -s.wrap;
    /* was made negative by deflate(..., Z_FINISH); */
  }
  s.status =
//#ifdef GZIP
    s.wrap === 2 ? GZIP_STATE :
//#endif
    s.wrap ? INIT_STATE : BUSY_STATE;
  strm.adler = (s.wrap === 2) ?
    0  // crc32(0, Z_NULL, 0)
  :
    1; // adler32(0, Z_NULL, 0)
  s.last_flush = -2;
  _tr_init(s);
  return Z_OK$3;
};


const deflateReset = (strm) => {

  const ret = deflateResetKeep(strm);
  if (ret === Z_OK$3) {
    lm_init(strm.state);
  }
  return ret;
};


const deflateSetHeader = (strm, head) => {

  if (deflateStateCheck(strm) || strm.state.wrap !== 2) {
    return Z_STREAM_ERROR$2;
  }
  strm.state.gzhead = head;
  return Z_OK$3;
};


const deflateInit2 = (strm, level, method, windowBits, memLevel, strategy) => {

  if (!strm) { // === Z_NULL
    return Z_STREAM_ERROR$2;
  }
  let wrap = 1;

  if (level === Z_DEFAULT_COMPRESSION$1) {
    level = 6;
  }

  if (windowBits < 0) { /* suppress zlib wrapper */
    wrap = 0;
    windowBits = -windowBits;
  }

  else if (windowBits > 15) {
    wrap = 2;           /* write gzip wrapper instead */
    windowBits -= 16;
  }


  if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED$2 ||
    windowBits < 8 || windowBits > 15 || level < 0 || level > 9 ||
    strategy < 0 || strategy > Z_FIXED || (windowBits === 8 && wrap !== 1)) {
    return err(strm, Z_STREAM_ERROR$2);
  }


  if (windowBits === 8) {
    windowBits = 9;
  }
  /* until 256-byte window bug fixed */

  const s = new DeflateState();

  strm.state = s;
  s.strm = strm;
  s.status = INIT_STATE;     /* to pass state test in deflateReset() */

  s.wrap = wrap;
  s.gzhead = null;
  s.w_bits = windowBits;
  s.w_size = 1 << s.w_bits;
  s.w_mask = s.w_size - 1;

  s.hash_bits = memLevel + 7;
  s.hash_size = 1 << s.hash_bits;
  s.hash_mask = s.hash_size - 1;
  s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);

  s.window = new Uint8Array(s.w_size * 2);
  s.head = new Uint16Array(s.hash_size);
  s.prev = new Uint16Array(s.w_size);

  // Don't need mem init magic for JS.
  //s.high_water = 0;  /* nothing written to s->window yet */

  s.lit_bufsize = 1 << (memLevel + 6); /* 16K elements by default */

  /* We overlay pending_buf and sym_buf. This works since the average size
   * for length/distance pairs over any compressed block is assured to be 31
   * bits or less.
   *
   * Analysis: The longest fixed codes are a length code of 8 bits plus 5
   * extra bits, for lengths 131 to 257. The longest fixed distance codes are
   * 5 bits plus 13 extra bits, for distances 16385 to 32768. The longest
   * possible fixed-codes length/distance pair is then 31 bits total.
   *
   * sym_buf starts one-fourth of the way into pending_buf. So there are
   * three bytes in sym_buf for every four bytes in pending_buf. Each symbol
   * in sym_buf is three bytes -- two for the distance and one for the
   * literal/length. As each symbol is consumed, the pointer to the next
   * sym_buf value to read moves forward three bytes. From that symbol, up to
   * 31 bits are written to pending_buf. The closest the written pending_buf
   * bits gets to the next sym_buf symbol to read is just before the last
   * code is written. At that time, 31*(n-2) bits have been written, just
   * after 24*(n-2) bits have been consumed from sym_buf. sym_buf starts at
   * 8*n bits into pending_buf. (Note that the symbol buffer fills when n-1
   * symbols are written.) The closest the writing gets to what is unread is
   * then n+14 bits. Here n is lit_bufsize, which is 16384 by default, and
   * can range from 128 to 32768.
   *
   * Therefore, at a minimum, there are 142 bits of space between what is
   * written and what is read in the overlain buffers, so the symbols cannot
   * be overwritten by the compressed data. That space is actually 139 bits,
   * due to the three-bit fixed-code block header.
   *
   * That covers the case where either Z_FIXED is specified, forcing fixed
   * codes, or when the use of fixed codes is chosen, because that choice
   * results in a smaller compressed block than dynamic codes. That latter
   * condition then assures that the above analysis also covers all dynamic
   * blocks. A dynamic-code block will only be chosen to be emitted if it has
   * fewer bits than a fixed-code block would for the same set of symbols.
   * Therefore its average symbol length is assured to be less than 31. So
   * the compressed data for a dynamic block also cannot overwrite the
   * symbols from which it is being constructed.
   */

  s.pending_buf_size = s.lit_bufsize * 4;
  s.pending_buf = new Uint8Array(s.pending_buf_size);

  // It is offset from `s.pending_buf` (size is `s.lit_bufsize * 2`)
  //s->sym_buf = s->pending_buf + s->lit_bufsize;
  s.sym_buf = s.lit_bufsize;

  //s->sym_end = (s->lit_bufsize - 1) * 3;
  s.sym_end = (s.lit_bufsize - 1) * 3;
  /* We avoid equality with lit_bufsize*3 because of wraparound at 64K
   * on 16 bit machines and because stored blocks are restricted to
   * 64K-1 bytes.
   */

  s.level = level;
  s.strategy = strategy;
  s.method = method;

  return deflateReset(strm);
};

const deflateInit = (strm, level) => {

  return deflateInit2(strm, level, Z_DEFLATED$2, MAX_WBITS$1, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY$1);
};


/* ========================================================================= */
const deflate$2 = (strm, flush) => {

  if (deflateStateCheck(strm) || flush > Z_BLOCK$1 || flush < 0) {
    return strm ? err(strm, Z_STREAM_ERROR$2) : Z_STREAM_ERROR$2;
  }

  const s = strm.state;

  if (!strm.output ||
      (strm.avail_in !== 0 && !strm.input) ||
      (s.status === FINISH_STATE && flush !== Z_FINISH$3)) {
    return err(strm, (strm.avail_out === 0) ? Z_BUF_ERROR$1 : Z_STREAM_ERROR$2);
  }

  const old_flush = s.last_flush;
  s.last_flush = flush;

  /* Flush as much pending output as possible */
  if (s.pending !== 0) {
    flush_pending(strm);
    if (strm.avail_out === 0) {
      /* Since avail_out is 0, deflate will be called again with
       * more output space, but possibly with both pending and
       * avail_in equal to zero. There won't be anything to do,
       * but this is not an error situation so make sure we
       * return OK instead of BUF_ERROR at next call of deflate:
       */
      s.last_flush = -1;
      return Z_OK$3;
    }

    /* Make sure there is something to do and avoid duplicate consecutive
     * flushes. For repeated and useless calls with Z_FINISH, we keep
     * returning Z_STREAM_END instead of Z_BUF_ERROR.
     */
  } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) &&
    flush !== Z_FINISH$3) {
    return err(strm, Z_BUF_ERROR$1);
  }

  /* User must not provide more input after the first FINISH: */
  if (s.status === FINISH_STATE && strm.avail_in !== 0) {
    return err(strm, Z_BUF_ERROR$1);
  }

  /* Write the header */
  if (s.status === INIT_STATE && s.wrap === 0) {
    s.status = BUSY_STATE;
  }
  if (s.status === INIT_STATE) {
    /* zlib header */
    let header = (Z_DEFLATED$2 + ((s.w_bits - 8) << 4)) << 8;
    let level_flags = -1;

    if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
      level_flags = 0;
    } else if (s.level < 6) {
      level_flags = 1;
    } else if (s.level === 6) {
      level_flags = 2;
    } else {
      level_flags = 3;
    }
    header |= (level_flags << 6);
    if (s.strstart !== 0) { header |= PRESET_DICT; }
    header += 31 - (header % 31);

    putShortMSB(s, header);

    /* Save the adler32 of the preset dictionary: */
    if (s.strstart !== 0) {
      putShortMSB(s, strm.adler >>> 16);
      putShortMSB(s, strm.adler & 0xffff);
    }
    strm.adler = 1; // adler32(0L, Z_NULL, 0);
    s.status = BUSY_STATE;

    /* Compression must start with an empty pending buffer */
    flush_pending(strm);
    if (s.pending !== 0) {
      s.last_flush = -1;
      return Z_OK$3;
    }
  }
//#ifdef GZIP
  if (s.status === GZIP_STATE) {
    /* gzip header */
    strm.adler = 0;  //crc32(0L, Z_NULL, 0);
    put_byte(s, 31);
    put_byte(s, 139);
    put_byte(s, 8);
    if (!s.gzhead) { // s->gzhead == Z_NULL
      put_byte(s, 0);
      put_byte(s, 0);
      put_byte(s, 0);
      put_byte(s, 0);
      put_byte(s, 0);
      put_byte(s, s.level === 9 ? 2 :
                  (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
                   4 : 0));
      put_byte(s, OS_CODE);
      s.status = BUSY_STATE;

      /* Compression must start with an empty pending buffer */
      flush_pending(strm);
      if (s.pending !== 0) {
        s.last_flush = -1;
        return Z_OK$3;
      }
    }
    else {
      put_byte(s, (s.gzhead.text ? 1 : 0) +
                  (s.gzhead.hcrc ? 2 : 0) +
                  (!s.gzhead.extra ? 0 : 4) +
                  (!s.gzhead.name ? 0 : 8) +
                  (!s.gzhead.comment ? 0 : 16)
      );
      put_byte(s, s.gzhead.time & 0xff);
      put_byte(s, (s.gzhead.time >> 8) & 0xff);
      put_byte(s, (s.gzhead.time >> 16) & 0xff);
      put_byte(s, (s.gzhead.time >> 24) & 0xff);
      put_byte(s, s.level === 9 ? 2 :
                  (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ?
                   4 : 0));
      put_byte(s, s.gzhead.os & 0xff);
      if (s.gzhead.extra && s.gzhead.extra.length) {
        put_byte(s, s.gzhead.extra.length & 0xff);
        put_byte(s, (s.gzhead.extra.length >> 8) & 0xff);
      }
      if (s.gzhead.hcrc) {
        strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending, 0);
      }
      s.gzindex = 0;
      s.status = EXTRA_STATE;
    }
  }
  if (s.status === EXTRA_STATE) {
    if (s.gzhead.extra/* != Z_NULL*/) {
      let beg = s.pending;   /* start of bytes to update crc */
      let left = (s.gzhead.extra.length & 0xffff) - s.gzindex;
      while (s.pending + left > s.pending_buf_size) {
        let copy = s.pending_buf_size - s.pending;
        // zmemcpy(s.pending_buf + s.pending,
        //    s.gzhead.extra + s.gzindex, copy);
        s.pending_buf.set(s.gzhead.extra.subarray(s.gzindex, s.gzindex + copy), s.pending);
        s.pending = s.pending_buf_size;
        //--- HCRC_UPDATE(beg) ---//
        if (s.gzhead.hcrc && s.pending > beg) {
          strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
        }
        //---//
        s.gzindex += copy;
        flush_pending(strm);
        if (s.pending !== 0) {
          s.last_flush = -1;
          return Z_OK$3;
        }
        beg = 0;
        left -= copy;
      }
      // JS specific: s.gzhead.extra may be TypedArray or Array for backward compatibility
      //              TypedArray.slice and TypedArray.from don't exist in IE10-IE11
      let gzhead_extra = new Uint8Array(s.gzhead.extra);
      // zmemcpy(s->pending_buf + s->pending,
      //     s->gzhead->extra + s->gzindex, left);
      s.pending_buf.set(gzhead_extra.subarray(s.gzindex, s.gzindex + left), s.pending);
      s.pending += left;
      //--- HCRC_UPDATE(beg) ---//
      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      //---//
      s.gzindex = 0;
    }
    s.status = NAME_STATE;
  }
  if (s.status === NAME_STATE) {
    if (s.gzhead.name/* != Z_NULL*/) {
      let beg = s.pending;   /* start of bytes to update crc */
      let val;
      do {
        if (s.pending === s.pending_buf_size) {
          //--- HCRC_UPDATE(beg) ---//
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          //---//
          flush_pending(strm);
          if (s.pending !== 0) {
            s.last_flush = -1;
            return Z_OK$3;
          }
          beg = 0;
        }
        // JS specific: little magic to add zero terminator to end of string
        if (s.gzindex < s.gzhead.name.length) {
          val = s.gzhead.name.charCodeAt(s.gzindex++) & 0xff;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);
      //--- HCRC_UPDATE(beg) ---//
      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      //---//
      s.gzindex = 0;
    }
    s.status = COMMENT_STATE;
  }
  if (s.status === COMMENT_STATE) {
    if (s.gzhead.comment/* != Z_NULL*/) {
      let beg = s.pending;   /* start of bytes to update crc */
      let val;
      do {
        if (s.pending === s.pending_buf_size) {
          //--- HCRC_UPDATE(beg) ---//
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          //---//
          flush_pending(strm);
          if (s.pending !== 0) {
            s.last_flush = -1;
            return Z_OK$3;
          }
          beg = 0;
        }
        // JS specific: little magic to add zero terminator to end of string
        if (s.gzindex < s.gzhead.comment.length) {
          val = s.gzhead.comment.charCodeAt(s.gzindex++) & 0xff;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);
      //--- HCRC_UPDATE(beg) ---//
      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32_1(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      //---//
    }
    s.status = HCRC_STATE;
  }
  if (s.status === HCRC_STATE) {
    if (s.gzhead.hcrc) {
      if (s.pending + 2 > s.pending_buf_size) {
        flush_pending(strm);
        if (s.pending !== 0) {
          s.last_flush = -1;
          return Z_OK$3;
        }
      }
      put_byte(s, strm.adler & 0xff);
      put_byte(s, (strm.adler >> 8) & 0xff);
      strm.adler = 0; //crc32(0L, Z_NULL, 0);
    }
    s.status = BUSY_STATE;

    /* Compression must start with an empty pending buffer */
    flush_pending(strm);
    if (s.pending !== 0) {
      s.last_flush = -1;
      return Z_OK$3;
    }
  }
//#endif

  /* Start a new block or continue the current one.
   */
  if (strm.avail_in !== 0 || s.lookahead !== 0 ||
    (flush !== Z_NO_FLUSH$2 && s.status !== FINISH_STATE)) {
    let bstate = s.level === 0 ? deflate_stored(s, flush) :
                 s.strategy === Z_HUFFMAN_ONLY ? deflate_huff(s, flush) :
                 s.strategy === Z_RLE ? deflate_rle(s, flush) :
                 configuration_table[s.level].func(s, flush);

    if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
      s.status = FINISH_STATE;
    }
    if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
      if (strm.avail_out === 0) {
        s.last_flush = -1;
        /* avoid BUF_ERROR next call, see above */
      }
      return Z_OK$3;
      /* If flush != Z_NO_FLUSH && avail_out == 0, the next call
       * of deflate should use the same flush parameter to make sure
       * that the flush is complete. So we don't have to output an
       * empty block here, this will be done at next call. This also
       * ensures that for a very small output buffer, we emit at most
       * one empty block.
       */
    }
    if (bstate === BS_BLOCK_DONE) {
      if (flush === Z_PARTIAL_FLUSH) {
        _tr_align(s);
      }
      else if (flush !== Z_BLOCK$1) { /* FULL_FLUSH or SYNC_FLUSH */

        _tr_stored_block(s, 0, 0, false);
        /* For a full flush, this empty block will be recognized
         * as a special marker by inflate_sync().
         */
        if (flush === Z_FULL_FLUSH$1) {
          /*** CLEAR_HASH(s); ***/             /* forget history */
          zero(s.head); // Fill with NIL (= 0);

          if (s.lookahead === 0) {
            s.strstart = 0;
            s.block_start = 0;
            s.insert = 0;
          }
        }
      }
      flush_pending(strm);
      if (strm.avail_out === 0) {
        s.last_flush = -1; /* avoid BUF_ERROR at next call, see above */
        return Z_OK$3;
      }
    }
  }

  if (flush !== Z_FINISH$3) { return Z_OK$3; }
  if (s.wrap <= 0) { return Z_STREAM_END$3; }

  /* Write the trailer */
  if (s.wrap === 2) {
    put_byte(s, strm.adler & 0xff);
    put_byte(s, (strm.adler >> 8) & 0xff);
    put_byte(s, (strm.adler >> 16) & 0xff);
    put_byte(s, (strm.adler >> 24) & 0xff);
    put_byte(s, strm.total_in & 0xff);
    put_byte(s, (strm.total_in >> 8) & 0xff);
    put_byte(s, (strm.total_in >> 16) & 0xff);
    put_byte(s, (strm.total_in >> 24) & 0xff);
  }
  else
  {
    putShortMSB(s, strm.adler >>> 16);
    putShortMSB(s, strm.adler & 0xffff);
  }

  flush_pending(strm);
  /* If avail_out is zero, the application will call deflate again
   * to flush the rest.
   */
  if (s.wrap > 0) { s.wrap = -s.wrap; }
  /* write the trailer only once! */
  return s.pending !== 0 ? Z_OK$3 : Z_STREAM_END$3;
};


const deflateEnd = (strm) => {

  if (deflateStateCheck(strm)) {
    return Z_STREAM_ERROR$2;
  }

  const status = strm.state.status;

  strm.state = null;

  return status === BUSY_STATE ? err(strm, Z_DATA_ERROR$2) : Z_OK$3;
};


/* =========================================================================
 * Initializes the compression dictionary from the given byte
 * sequence without producing any compressed output.
 */
const deflateSetDictionary = (strm, dictionary) => {

  let dictLength = dictionary.length;

  if (deflateStateCheck(strm)) {
    return Z_STREAM_ERROR$2;
  }

  const s = strm.state;
  const wrap = s.wrap;

  if (wrap === 2 || (wrap === 1 && s.status !== INIT_STATE) || s.lookahead) {
    return Z_STREAM_ERROR$2;
  }

  /* when using zlib wrappers, compute Adler-32 for provided dictionary */
  if (wrap === 1) {
    /* adler32(strm->adler, dictionary, dictLength); */
    strm.adler = adler32_1(strm.adler, dictionary, dictLength, 0);
  }

  s.wrap = 0;   /* avoid computing Adler-32 in read_buf */

  /* if dictionary would fill window, just replace the history */
  if (dictLength >= s.w_size) {
    if (wrap === 0) {            /* already empty otherwise */
      /*** CLEAR_HASH(s); ***/
      zero(s.head); // Fill with NIL (= 0);
      s.strstart = 0;
      s.block_start = 0;
      s.insert = 0;
    }
    /* use the tail */
    // dictionary = dictionary.slice(dictLength - s.w_size);
    let tmpDict = new Uint8Array(s.w_size);
    tmpDict.set(dictionary.subarray(dictLength - s.w_size, dictLength), 0);
    dictionary = tmpDict;
    dictLength = s.w_size;
  }
  /* insert dictionary into window and hash */
  const avail = strm.avail_in;
  const next = strm.next_in;
  const input = strm.input;
  strm.avail_in = dictLength;
  strm.next_in = 0;
  strm.input = dictionary;
  fill_window(s);
  while (s.lookahead >= MIN_MATCH) {
    let str = s.strstart;
    let n = s.lookahead - (MIN_MATCH - 1);
    do {
      /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
      s.ins_h = HASH(s, s.ins_h, s.window[str + MIN_MATCH - 1]);

      s.prev[str & s.w_mask] = s.head[s.ins_h];

      s.head[s.ins_h] = str;
      str++;
    } while (--n);
    s.strstart = str;
    s.lookahead = MIN_MATCH - 1;
    fill_window(s);
  }
  s.strstart += s.lookahead;
  s.block_start = s.strstart;
  s.insert = s.lookahead;
  s.lookahead = 0;
  s.match_length = s.prev_length = MIN_MATCH - 1;
  s.match_available = 0;
  strm.next_in = next;
  strm.input = input;
  strm.avail_in = avail;
  s.wrap = wrap;
  return Z_OK$3;
};


var deflateInit_1 = deflateInit;
var deflateInit2_1 = deflateInit2;
var deflateReset_1 = deflateReset;
var deflateResetKeep_1 = deflateResetKeep;
var deflateSetHeader_1 = deflateSetHeader;
var deflate_2$1 = deflate$2;
var deflateEnd_1 = deflateEnd;
var deflateSetDictionary_1 = deflateSetDictionary;
var deflateInfo = 'pako deflate (from Nodeca project)';

/* Not implemented
module.exports.deflateBound = deflateBound;
module.exports.deflateCopy = deflateCopy;
module.exports.deflateGetDictionary = deflateGetDictionary;
module.exports.deflateParams = deflateParams;
module.exports.deflatePending = deflatePending;
module.exports.deflatePrime = deflatePrime;
module.exports.deflateTune = deflateTune;
*/

var deflate_1$2 = {
	deflateInit: deflateInit_1,
	deflateInit2: deflateInit2_1,
	deflateReset: deflateReset_1,
	deflateResetKeep: deflateResetKeep_1,
	deflateSetHeader: deflateSetHeader_1,
	deflate: deflate_2$1,
	deflateEnd: deflateEnd_1,
	deflateSetDictionary: deflateSetDictionary_1,
	deflateInfo: deflateInfo
};

const _has = (obj, key) => {
  return Object.prototype.hasOwnProperty.call(obj, key);
};

var assign = function (obj /*from1, from2, from3, ...*/) {
  const sources = Array.prototype.slice.call(arguments, 1);
  while (sources.length) {
    const source = sources.shift();
    if (!source) { continue; }

    if (typeof source !== 'object') {
      throw new TypeError(source + 'must be non-object');
    }

    for (const p in source) {
      if (_has(source, p)) {
        obj[p] = source[p];
      }
    }
  }

  return obj;
};


// Join array of chunks to single array.
var flattenChunks = (chunks) => {
  // calculate data length
  let len = 0;

  for (let i = 0, l = chunks.length; i < l; i++) {
    len += chunks[i].length;
  }

  // join chunks
  const result = new Uint8Array(len);

  for (let i = 0, pos = 0, l = chunks.length; i < l; i++) {
    let chunk = chunks[i];
    result.set(chunk, pos);
    pos += chunk.length;
  }

  return result;
};

var common = {
	assign: assign,
	flattenChunks: flattenChunks
};

// String encode/decode helpers


// Quick check if we can use fast array to bin string conversion
//
// - apply(Array) can fail on Android 2.2
// - apply(Uint8Array) can fail on iOS 5.1 Safari
//
let STR_APPLY_UIA_OK = true;

try { String.fromCharCode.apply(null, new Uint8Array(1)); } catch (__) { STR_APPLY_UIA_OK = false; }


// Table with utf8 lengths (calculated by first byte of sequence)
// Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
// because max possible codepoint is 0x10ffff
const _utf8len = new Uint8Array(256);
for (let q = 0; q < 256; q++) {
  _utf8len[q] = (q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1);
}
_utf8len[254] = _utf8len[254] = 1; // Invalid sequence start


// convert string to array (typed, when possible)
var string2buf = (str) => {
  if (typeof TextEncoder === 'function' && TextEncoder.prototype.encode) {
    return new TextEncoder().encode(str);
  }

  let buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;

  // count binary size
  for (m_pos = 0; m_pos < str_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
        m_pos++;
      }
    }
    buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
  }

  // allocate buffer
  buf = new Uint8Array(buf_len);

  // convert
  for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 0xfc00) === 0xd800 && (m_pos + 1 < str_len)) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 & 0xfc00) === 0xdc00) {
        c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00);
        m_pos++;
      }
    }
    if (c < 0x80) {
      /* one byte */
      buf[i++] = c;
    } else if (c < 0x800) {
      /* two bytes */
      buf[i++] = 0xC0 | (c >>> 6);
      buf[i++] = 0x80 | (c & 0x3f);
    } else if (c < 0x10000) {
      /* three bytes */
      buf[i++] = 0xE0 | (c >>> 12);
      buf[i++] = 0x80 | (c >>> 6 & 0x3f);
      buf[i++] = 0x80 | (c & 0x3f);
    } else {
      /* four bytes */
      buf[i++] = 0xf0 | (c >>> 18);
      buf[i++] = 0x80 | (c >>> 12 & 0x3f);
      buf[i++] = 0x80 | (c >>> 6 & 0x3f);
      buf[i++] = 0x80 | (c & 0x3f);
    }
  }

  return buf;
};

// Helper
const buf2binstring = (buf, len) => {
  // On Chrome, the arguments in a function call that are allowed is `65534`.
  // If the length of the buffer is smaller than that, we can use this optimization,
  // otherwise we will take a slower path.
  if (len < 65534) {
    if (buf.subarray && STR_APPLY_UIA_OK) {
      return String.fromCharCode.apply(null, buf.length === len ? buf : buf.subarray(0, len));
    }
  }

  let result = '';
  for (let i = 0; i < len; i++) {
    result += String.fromCharCode(buf[i]);
  }
  return result;
};


// convert array to string
var buf2string = (buf, max) => {
  const len = max || buf.length;

  if (typeof TextDecoder === 'function' && TextDecoder.prototype.decode) {
    return new TextDecoder().decode(buf.subarray(0, max));
  }

  let i, out;

  // Reserve max possible length (2 words per char)
  // NB: by unknown reasons, Array is significantly faster for
  //     String.fromCharCode.apply than Uint16Array.
  const utf16buf = new Array(len * 2);

  for (out = 0, i = 0; i < len;) {
    let c = buf[i++];
    // quick process ascii
    if (c < 0x80) { utf16buf[out++] = c; continue; }

    let c_len = _utf8len[c];
    // skip 5 & 6 byte codes
    if (c_len > 4) { utf16buf[out++] = 0xfffd; i += c_len - 1; continue; }

    // apply mask on first byte
    c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07;
    // join the rest
    while (c_len > 1 && i < len) {
      c = (c << 6) | (buf[i++] & 0x3f);
      c_len--;
    }

    // terminated by end of string?
    if (c_len > 1) { utf16buf[out++] = 0xfffd; continue; }

    if (c < 0x10000) {
      utf16buf[out++] = c;
    } else {
      c -= 0x10000;
      utf16buf[out++] = 0xd800 | ((c >> 10) & 0x3ff);
      utf16buf[out++] = 0xdc00 | (c & 0x3ff);
    }
  }

  return buf2binstring(utf16buf, out);
};


// Calculate max possible position in utf8 buffer,
// that will not break sequence. If that's not possible
// - (very small limits) return max size as is.
//
// buf[] - utf8 bytes array
// max   - length limit (mandatory);
var utf8border = (buf, max) => {

  max = max || buf.length;
  if (max > buf.length) { max = buf.length; }

  // go back from last position, until start of sequence found
  let pos = max - 1;
  while (pos >= 0 && (buf[pos] & 0xC0) === 0x80) { pos--; }

  // Very small and broken sequence,
  // return max, because we should return something anyway.
  if (pos < 0) { return max; }

  // If we came to start of buffer - that means buffer is too small,
  // return max too.
  if (pos === 0) { return max; }

  return (pos + _utf8len[buf[pos]] > max) ? pos : max;
};

var strings = {
	string2buf: string2buf,
	buf2string: buf2string,
	utf8border: utf8border
};

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function ZStream() {
  /* next input byte */
  this.input = null; // JS specific, because we have no pointers
  this.next_in = 0;
  /* number of bytes available at input */
  this.avail_in = 0;
  /* total number of input bytes read so far */
  this.total_in = 0;
  /* next output byte should be put there */
  this.output = null; // JS specific, because we have no pointers
  this.next_out = 0;
  /* remaining free space at output */
  this.avail_out = 0;
  /* total number of bytes output so far */
  this.total_out = 0;
  /* last error message, NULL if no error */
  this.msg = ''/*Z_NULL*/;
  /* not visible by applications */
  this.state = null;
  /* best guess about the data type: binary or text */
  this.data_type = 2/*Z_UNKNOWN*/;
  /* adler32 value of the uncompressed data */
  this.adler = 0;
}

var zstream = ZStream;

const toString$1 = Object.prototype.toString;

/* Public constants ==========================================================*/
/* ===========================================================================*/

const {
  Z_NO_FLUSH: Z_NO_FLUSH$1, Z_SYNC_FLUSH, Z_FULL_FLUSH, Z_FINISH: Z_FINISH$2,
  Z_OK: Z_OK$2, Z_STREAM_END: Z_STREAM_END$2,
  Z_DEFAULT_COMPRESSION,
  Z_DEFAULT_STRATEGY,
  Z_DEFLATED: Z_DEFLATED$1
} = constants$2;

/* ===========================================================================*/


/**
 * class Deflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[deflate]],
 * [[deflateRaw]] and [[gzip]].
 **/

/* internal
 * Deflate.chunks -> Array
 *
 * Chunks of output data, if [[Deflate#onData]] not overridden.
 **/

/**
 * Deflate.result -> Uint8Array
 *
 * Compressed result, generated by default [[Deflate#onData]]
 * and [[Deflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Deflate#push]] with `Z_FINISH` / `true` param).
 **/

/**
 * Deflate.err -> Number
 *
 * Error code after deflate finished. 0 (Z_OK) on success.
 * You will not need it in real life, because deflate errors
 * are possible only on wrong options or bad `onData` / `onEnd`
 * custom handlers.
 **/

/**
 * Deflate.msg -> String
 *
 * Error message, if [[Deflate.err]] != 0
 **/


/**
 * new Deflate(options)
 * - options (Object): zlib deflate options.
 *
 * Creates new deflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `level`
 * - `windowBits`
 * - `memLevel`
 * - `strategy`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw deflate
 * - `gzip` (Boolean) - create gzip wrapper
 * - `header` (Object) - custom header for gzip
 *   - `text` (Boolean) - true if compressed data believed to be text
 *   - `time` (Number) - modification time, unix timestamp
 *   - `os` (Number) - operation system code
 *   - `extra` (Array) - array of bytes with extra data (max 65536)
 *   - `name` (String) - file name (binary string)
 *   - `comment` (String) - comment (binary string)
 *   - `hcrc` (Boolean) - true if header crc should be added
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako')
 *   , chunk1 = new Uint8Array([1,2,3,4,5,6,7,8,9])
 *   , chunk2 = new Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * const deflate = new pako.Deflate({ level: 3});
 *
 * deflate.push(chunk1, false);
 * deflate.push(chunk2, true);  // true -> last chunk
 *
 * if (deflate.err) { throw new Error(deflate.err); }
 *
 * console.log(deflate.result);
 * ```
 **/
function Deflate$1(options) {
  this.options = common.assign({
    level: Z_DEFAULT_COMPRESSION,
    method: Z_DEFLATED$1,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: Z_DEFAULT_STRATEGY
  }, options || {});

  let opt = this.options;

  if (opt.raw && (opt.windowBits > 0)) {
    opt.windowBits = -opt.windowBits;
  }

  else if (opt.gzip && (opt.windowBits > 0) && (opt.windowBits < 16)) {
    opt.windowBits += 16;
  }

  this.err    = 0;      // error code, if happens (0 = Z_OK)
  this.msg    = '';     // error message
  this.ended  = false;  // used to avoid multiple onEnd() calls
  this.chunks = [];     // chunks of compressed data

  this.strm = new zstream();
  this.strm.avail_out = 0;

  let status = deflate_1$2.deflateInit2(
    this.strm,
    opt.level,
    opt.method,
    opt.windowBits,
    opt.memLevel,
    opt.strategy
  );

  if (status !== Z_OK$2) {
    throw new Error(messages[status]);
  }

  if (opt.header) {
    deflate_1$2.deflateSetHeader(this.strm, opt.header);
  }

  if (opt.dictionary) {
    let dict;
    // Convert data if needed
    if (typeof opt.dictionary === 'string') {
      // If we need to compress text, change encoding to utf8.
      dict = strings.string2buf(opt.dictionary);
    } else if (toString$1.call(opt.dictionary) === '[object ArrayBuffer]') {
      dict = new Uint8Array(opt.dictionary);
    } else {
      dict = opt.dictionary;
    }

    status = deflate_1$2.deflateSetDictionary(this.strm, dict);

    if (status !== Z_OK$2) {
      throw new Error(messages[status]);
    }

    this._dict_set = true;
  }
}

/**
 * Deflate#push(data[, flush_mode]) -> Boolean
 * - data (Uint8Array|ArrayBuffer|String): input data. Strings will be
 *   converted to utf8 byte sequence.
 * - flush_mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
 *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.
 *
 * Sends input data to deflate pipe, generating [[Deflate#onData]] calls with
 * new compressed chunks. Returns `true` on success. The last data block must
 * have `flush_mode` Z_FINISH (or `true`). That will flush internal pending
 * buffers and call [[Deflate#onEnd]].
 *
 * On fail call [[Deflate#onEnd]] with error code and return false.
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/
Deflate$1.prototype.push = function (data, flush_mode) {
  const strm = this.strm;
  const chunkSize = this.options.chunkSize;
  let status, _flush_mode;

  if (this.ended) { return false; }

  if (flush_mode === ~~flush_mode) _flush_mode = flush_mode;
  else _flush_mode = flush_mode === true ? Z_FINISH$2 : Z_NO_FLUSH$1;

  // Convert data if needed
  if (typeof data === 'string') {
    // If we need to compress text, change encoding to utf8.
    strm.input = strings.string2buf(data);
  } else if (toString$1.call(data) === '[object ArrayBuffer]') {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }

  strm.next_in = 0;
  strm.avail_in = strm.input.length;

  for (;;) {
    if (strm.avail_out === 0) {
      strm.output = new Uint8Array(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }

    // Make sure avail_out > 6 to avoid repeating markers
    if ((_flush_mode === Z_SYNC_FLUSH || _flush_mode === Z_FULL_FLUSH) && strm.avail_out <= 6) {
      this.onData(strm.output.subarray(0, strm.next_out));
      strm.avail_out = 0;
      continue;
    }

    status = deflate_1$2.deflate(strm, _flush_mode);

    // Ended => flush and finish
    if (status === Z_STREAM_END$2) {
      if (strm.next_out > 0) {
        this.onData(strm.output.subarray(0, strm.next_out));
      }
      status = deflate_1$2.deflateEnd(this.strm);
      this.onEnd(status);
      this.ended = true;
      return status === Z_OK$2;
    }

    // Flush if out buffer full
    if (strm.avail_out === 0) {
      this.onData(strm.output);
      continue;
    }

    // Flush if requested and has data
    if (_flush_mode > 0 && strm.next_out > 0) {
      this.onData(strm.output.subarray(0, strm.next_out));
      strm.avail_out = 0;
      continue;
    }

    if (strm.avail_in === 0) break;
  }

  return true;
};


/**
 * Deflate#onData(chunk) -> Void
 * - chunk (Uint8Array): output data.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/
Deflate$1.prototype.onData = function (chunk) {
  this.chunks.push(chunk);
};


/**
 * Deflate#onEnd(status) -> Void
 * - status (Number): deflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called once after you tell deflate that the input stream is
 * complete (Z_FINISH). By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/
Deflate$1.prototype.onEnd = function (status) {
  // On success - join
  if (status === Z_OK$2) {
    this.result = common.flattenChunks(this.chunks);
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};


/**
 * deflate(data[, options]) -> Uint8Array
 * - data (Uint8Array|ArrayBuffer|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * Compress `data` with deflate algorithm and `options`.
 *
 * Supported options are:
 *
 * - level
 * - windowBits
 * - memLevel
 * - strategy
 * - dictionary
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako')
 * const data = new Uint8Array([1,2,3,4,5,6,7,8,9]);
 *
 * console.log(pako.deflate(data));
 * ```
 **/
function deflate$1(input, options) {
  const deflator = new Deflate$1(options);

  deflator.push(input, true);

  // That will never happens, if you don't cheat with options :)
  if (deflator.err) { throw deflator.msg || messages[deflator.err]; }

  return deflator.result;
}


/**
 * deflateRaw(data[, options]) -> Uint8Array
 * - data (Uint8Array|ArrayBuffer|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/
function deflateRaw$1(input, options) {
  options = options || {};
  options.raw = true;
  return deflate$1(input, options);
}


/**
 * gzip(data[, options]) -> Uint8Array
 * - data (Uint8Array|ArrayBuffer|String): input data to compress.
 * - options (Object): zlib deflate options.
 *
 * The same as [[deflate]], but create gzip wrapper instead of
 * deflate one.
 **/
function gzip$1(input, options) {
  options = options || {};
  options.gzip = true;
  return deflate$1(input, options);
}


var Deflate_1$1 = Deflate$1;
var deflate_2 = deflate$1;
var deflateRaw_1$1 = deflateRaw$1;
var gzip_1$1 = gzip$1;
var constants$1 = constants$2;

var deflate_1$1 = {
	Deflate: Deflate_1$1,
	deflate: deflate_2,
	deflateRaw: deflateRaw_1$1,
	gzip: gzip_1$1,
	constants: constants$1
};

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

// See state defs from inflate.js
const BAD$1 = 16209;       /* got a data error -- remain here until reset */
const TYPE$1 = 16191;      /* i: waiting for type bits, including last-flag bit */

/*
   Decode literal, length, and distance codes and write out the resulting
   literal and match bytes until either not enough input or output is
   available, an end-of-block is encountered, or a data error is encountered.
   When large enough input and output buffers are supplied to inflate(), for
   example, a 16K input buffer and a 64K output buffer, more than 95% of the
   inflate execution time is spent in this routine.

   Entry assumptions:

        state.mode === LEN
        strm.avail_in >= 6
        strm.avail_out >= 258
        start >= strm.avail_out
        state.bits < 8

   On return, state.mode is one of:

        LEN -- ran out of enough output space or enough available input
        TYPE -- reached end of block code, inflate() to interpret next block
        BAD -- error in block data

   Notes:

    - The maximum input bits used by a length/distance pair is 15 bits for the
      length code, 5 bits for the length extra, 15 bits for the distance code,
      and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
      Therefore if strm.avail_in >= 6, then there is enough input to avoid
      checking for available input while decoding.

    - The maximum bytes that a single length/distance pair can output is 258
      bytes, which is the maximum length that can be coded.  inflate_fast()
      requires strm.avail_out >= 258 for each loop to avoid checking for
      output space.
 */
var inffast = function inflate_fast(strm, start) {
  let _in;                    /* local strm.input */
  let last;                   /* have enough input while in < last */
  let _out;                   /* local strm.output */
  let beg;                    /* inflate()'s initial strm.output */
  let end;                    /* while out < end, enough space available */
//#ifdef INFLATE_STRICT
  let dmax;                   /* maximum distance from zlib header */
//#endif
  let wsize;                  /* window size or zero if not using window */
  let whave;                  /* valid bytes in the window */
  let wnext;                  /* window write index */
  // Use `s_window` instead `window`, avoid conflict with instrumentation tools
  let s_window;               /* allocated sliding window, if wsize != 0 */
  let hold;                   /* local strm.hold */
  let bits;                   /* local strm.bits */
  let lcode;                  /* local strm.lencode */
  let dcode;                  /* local strm.distcode */
  let lmask;                  /* mask for first level of length codes */
  let dmask;                  /* mask for first level of distance codes */
  let here;                   /* retrieved table entry */
  let op;                     /* code bits, operation, extra bits, or */
                              /*  window position, window bytes to copy */
  let len;                    /* match length, unused bytes */
  let dist;                   /* match distance */
  let from;                   /* where to copy match from */
  let from_source;


  let input, output; // JS specific, because we have no pointers

  /* copy state to local variables */
  const state = strm.state;
  //here = state.here;
  _in = strm.next_in;
  input = strm.input;
  last = _in + (strm.avail_in - 5);
  _out = strm.next_out;
  output = strm.output;
  beg = _out - (start - strm.avail_out);
  end = _out + (strm.avail_out - 257);
//#ifdef INFLATE_STRICT
  dmax = state.dmax;
//#endif
  wsize = state.wsize;
  whave = state.whave;
  wnext = state.wnext;
  s_window = state.window;
  hold = state.hold;
  bits = state.bits;
  lcode = state.lencode;
  dcode = state.distcode;
  lmask = (1 << state.lenbits) - 1;
  dmask = (1 << state.distbits) - 1;


  /* decode literals and length/distances until end-of-block or not enough
     input data or output space */

  top:
  do {
    if (bits < 15) {
      hold += input[_in++] << bits;
      bits += 8;
      hold += input[_in++] << bits;
      bits += 8;
    }

    here = lcode[hold & lmask];

    dolen:
    for (;;) { // Goto emulation
      op = here >>> 24/*here.bits*/;
      hold >>>= op;
      bits -= op;
      op = (here >>> 16) & 0xff/*here.op*/;
      if (op === 0) {                          /* literal */
        //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
        //        "inflate:         literal '%c'\n" :
        //        "inflate:         literal 0x%02x\n", here.val));
        output[_out++] = here & 0xffff/*here.val*/;
      }
      else if (op & 16) {                     /* length base */
        len = here & 0xffff/*here.val*/;
        op &= 15;                           /* number of extra bits */
        if (op) {
          if (bits < op) {
            hold += input[_in++] << bits;
            bits += 8;
          }
          len += hold & ((1 << op) - 1);
          hold >>>= op;
          bits -= op;
        }
        //Tracevv((stderr, "inflate:         length %u\n", len));
        if (bits < 15) {
          hold += input[_in++] << bits;
          bits += 8;
          hold += input[_in++] << bits;
          bits += 8;
        }
        here = dcode[hold & dmask];

        dodist:
        for (;;) { // goto emulation
          op = here >>> 24/*here.bits*/;
          hold >>>= op;
          bits -= op;
          op = (here >>> 16) & 0xff/*here.op*/;

          if (op & 16) {                      /* distance base */
            dist = here & 0xffff/*here.val*/;
            op &= 15;                       /* number of extra bits */
            if (bits < op) {
              hold += input[_in++] << bits;
              bits += 8;
              if (bits < op) {
                hold += input[_in++] << bits;
                bits += 8;
              }
            }
            dist += hold & ((1 << op) - 1);
//#ifdef INFLATE_STRICT
            if (dist > dmax) {
              strm.msg = 'invalid distance too far back';
              state.mode = BAD$1;
              break top;
            }
//#endif
            hold >>>= op;
            bits -= op;
            //Tracevv((stderr, "inflate:         distance %u\n", dist));
            op = _out - beg;                /* max distance in output */
            if (dist > op) {                /* see if copy from window */
              op = dist - op;               /* distance back in window */
              if (op > whave) {
                if (state.sane) {
                  strm.msg = 'invalid distance too far back';
                  state.mode = BAD$1;
                  break top;
                }

// (!) This block is disabled in zlib defaults,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//                if (len <= op - whave) {
//                  do {
//                    output[_out++] = 0;
//                  } while (--len);
//                  continue top;
//                }
//                len -= op - whave;
//                do {
//                  output[_out++] = 0;
//                } while (--op > whave);
//                if (op === 0) {
//                  from = _out - dist;
//                  do {
//                    output[_out++] = output[from++];
//                  } while (--len);
//                  continue top;
//                }
//#endif
              }
              from = 0; // window index
              from_source = s_window;
              if (wnext === 0) {           /* very common case */
                from += wsize - op;
                if (op < len) {         /* some from window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = _out - dist;  /* rest from output */
                  from_source = output;
                }
              }
              else if (wnext < op) {      /* wrap around window */
                from += wsize + wnext - op;
                op -= wnext;
                if (op < len) {         /* some from end of window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = 0;
                  if (wnext < len) {  /* some from start of window */
                    op = wnext;
                    len -= op;
                    do {
                      output[_out++] = s_window[from++];
                    } while (--op);
                    from = _out - dist;      /* rest from output */
                    from_source = output;
                  }
                }
              }
              else {                      /* contiguous in window */
                from += wnext - op;
                if (op < len) {         /* some from window */
                  len -= op;
                  do {
                    output[_out++] = s_window[from++];
                  } while (--op);
                  from = _out - dist;  /* rest from output */
                  from_source = output;
                }
              }
              while (len > 2) {
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                output[_out++] = from_source[from++];
                len -= 3;
              }
              if (len) {
                output[_out++] = from_source[from++];
                if (len > 1) {
                  output[_out++] = from_source[from++];
                }
              }
            }
            else {
              from = _out - dist;          /* copy direct from output */
              do {                        /* minimum length is three */
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                output[_out++] = output[from++];
                len -= 3;
              } while (len > 2);
              if (len) {
                output[_out++] = output[from++];
                if (len > 1) {
                  output[_out++] = output[from++];
                }
              }
            }
          }
          else if ((op & 64) === 0) {          /* 2nd level distance code */
            here = dcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
            continue dodist;
          }
          else {
            strm.msg = 'invalid distance code';
            state.mode = BAD$1;
            break top;
          }

          break; // need to emulate goto via "continue"
        }
      }
      else if ((op & 64) === 0) {              /* 2nd level length code */
        here = lcode[(here & 0xffff)/*here.val*/ + (hold & ((1 << op) - 1))];
        continue dolen;
      }
      else if (op & 32) {                     /* end-of-block */
        //Tracevv((stderr, "inflate:         end of block\n"));
        state.mode = TYPE$1;
        break top;
      }
      else {
        strm.msg = 'invalid literal/length code';
        state.mode = BAD$1;
        break top;
      }

      break; // need to emulate goto via "continue"
    }
  } while (_in < last && _out < end);

  /* return unused bytes (on entry, bits < 8, so in won't go too far back) */
  len = bits >> 3;
  _in -= len;
  bits -= len << 3;
  hold &= (1 << bits) - 1;

  /* update state and return */
  strm.next_in = _in;
  strm.next_out = _out;
  strm.avail_in = (_in < last ? 5 + (last - _in) : 5 - (_in - last));
  strm.avail_out = (_out < end ? 257 + (end - _out) : 257 - (_out - end));
  state.hold = hold;
  state.bits = bits;
  return;
};

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

const MAXBITS = 15;
const ENOUGH_LENS$1 = 852;
const ENOUGH_DISTS$1 = 592;
//const ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);

const CODES$1 = 0;
const LENS$1 = 1;
const DISTS$1 = 2;

const lbase = new Uint16Array([ /* Length codes 257..285 base */
  3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31,
  35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0
]);

const lext = new Uint8Array([ /* Length codes 257..285 extra */
  16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18,
  19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78
]);

const dbase = new Uint16Array([ /* Distance codes 0..29 base */
  1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193,
  257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145,
  8193, 12289, 16385, 24577, 0, 0
]);

const dext = new Uint8Array([ /* Distance codes 0..29 extra */
  16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22,
  23, 23, 24, 24, 25, 25, 26, 26, 27, 27,
  28, 28, 29, 29, 64, 64
]);

const inflate_table = (type, lens, lens_index, codes, table, table_index, work, opts) =>
{
  const bits = opts.bits;
      //here = opts.here; /* table entry for duplication */

  let len = 0;               /* a code's length in bits */
  let sym = 0;               /* index of code symbols */
  let min = 0, max = 0;          /* minimum and maximum code lengths */
  let root = 0;              /* number of index bits for root table */
  let curr = 0;              /* number of index bits for current table */
  let drop = 0;              /* code bits to drop for sub-table */
  let left = 0;                   /* number of prefix codes available */
  let used = 0;              /* code entries in table used */
  let huff = 0;              /* Huffman code */
  let incr;              /* for incrementing code, index */
  let fill;              /* index for replicating entries */
  let low;               /* low bits for current root entry */
  let mask;              /* mask for low root bits */
  let next;             /* next available space in table */
  let base = null;     /* base value table to use */
//  let shoextra;    /* extra bits table to use */
  let match;                  /* use base and extra for symbol >= match */
  const count = new Uint16Array(MAXBITS + 1); //[MAXBITS+1];    /* number of codes of each length */
  const offs = new Uint16Array(MAXBITS + 1); //[MAXBITS+1];     /* offsets in table for each length */
  let extra = null;

  let here_bits, here_op, here_val;

  /*
   Process a set of code lengths to create a canonical Huffman code.  The
   code lengths are lens[0..codes-1].  Each length corresponds to the
   symbols 0..codes-1.  The Huffman code is generated by first sorting the
   symbols by length from short to long, and retaining the symbol order
   for codes with equal lengths.  Then the code starts with all zero bits
   for the first code of the shortest length, and the codes are integer
   increments for the same length, and zeros are appended as the length
   increases.  For the deflate format, these bits are stored backwards
   from their more natural integer increment ordering, and so when the
   decoding tables are built in the large loop below, the integer codes
   are incremented backwards.

   This routine assumes, but does not check, that all of the entries in
   lens[] are in the range 0..MAXBITS.  The caller must assure this.
   1..MAXBITS is interpreted as that code length.  zero means that that
   symbol does not occur in this code.

   The codes are sorted by computing a count of codes for each length,
   creating from that a table of starting indices for each length in the
   sorted table, and then entering the symbols in order in the sorted
   table.  The sorted table is work[], with that space being provided by
   the caller.

   The length counts are used for other purposes as well, i.e. finding
   the minimum and maximum length codes, determining if there are any
   codes at all, checking for a valid set of lengths, and looking ahead
   at length counts to determine sub-table sizes when building the
   decoding tables.
   */

  /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */
  for (len = 0; len <= MAXBITS; len++) {
    count[len] = 0;
  }
  for (sym = 0; sym < codes; sym++) {
    count[lens[lens_index + sym]]++;
  }

  /* bound code lengths, force root to be within code lengths */
  root = bits;
  for (max = MAXBITS; max >= 1; max--) {
    if (count[max] !== 0) { break; }
  }
  if (root > max) {
    root = max;
  }
  if (max === 0) {                     /* no symbols to code at all */
    //table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
    //table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
    //table.val[opts.table_index++] = 0;   //here.val = (var short)0;
    table[table_index++] = (1 << 24) | (64 << 16) | 0;


    //table.op[opts.table_index] = 64;
    //table.bits[opts.table_index] = 1;
    //table.val[opts.table_index++] = 0;
    table[table_index++] = (1 << 24) | (64 << 16) | 0;

    opts.bits = 1;
    return 0;     /* no symbols, but wait for decoding to report error */
  }
  for (min = 1; min < max; min++) {
    if (count[min] !== 0) { break; }
  }
  if (root < min) {
    root = min;
  }

  /* check for an over-subscribed or incomplete set of lengths */
  left = 1;
  for (len = 1; len <= MAXBITS; len++) {
    left <<= 1;
    left -= count[len];
    if (left < 0) {
      return -1;
    }        /* over-subscribed */
  }
  if (left > 0 && (type === CODES$1 || max !== 1)) {
    return -1;                      /* incomplete set */
  }

  /* generate offsets into symbol table for each length for sorting */
  offs[1] = 0;
  for (len = 1; len < MAXBITS; len++) {
    offs[len + 1] = offs[len] + count[len];
  }

  /* sort symbols by length, by symbol order within each length */
  for (sym = 0; sym < codes; sym++) {
    if (lens[lens_index + sym] !== 0) {
      work[offs[lens[lens_index + sym]]++] = sym;
    }
  }

  /*
   Create and fill in decoding tables.  In this loop, the table being
   filled is at next and has curr index bits.  The code being used is huff
   with length len.  That code is converted to an index by dropping drop
   bits off of the bottom.  For codes where len is less than drop + curr,
   those top drop + curr - len bits are incremented through all values to
   fill the table with replicated entries.

   root is the number of index bits for the root table.  When len exceeds
   root, sub-tables are created pointed to by the root entry with an index
   of the low root bits of huff.  This is saved in low to check for when a
   new sub-table should be started.  drop is zero when the root table is
   being filled, and drop is root when sub-tables are being filled.

   When a new sub-table is needed, it is necessary to look ahead in the
   code lengths to determine what size sub-table is needed.  The length
   counts are used for this, and so count[] is decremented as codes are
   entered in the tables.

   used keeps track of how many table entries have been allocated from the
   provided *table space.  It is checked for LENS and DIST tables against
   the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
   the initial root table size constants.  See the comments in inftrees.h
   for more information.

   sym increments through all symbols, and the loop terminates when
   all codes of length max, i.e. all codes, have been processed.  This
   routine permits incomplete codes, so another loop after this one fills
   in the rest of the decoding tables with invalid code markers.
   */

  /* set up for code type */
  // poor man optimization - use if-else instead of switch,
  // to avoid deopts in old v8
  if (type === CODES$1) {
    base = extra = work;    /* dummy value--not used */
    match = 20;

  } else if (type === LENS$1) {
    base = lbase;
    extra = lext;
    match = 257;

  } else {                    /* DISTS */
    base = dbase;
    extra = dext;
    match = 0;
  }

  /* initialize opts for loop */
  huff = 0;                   /* starting code */
  sym = 0;                    /* starting code symbol */
  len = min;                  /* starting code length */
  next = table_index;              /* current table to fill in */
  curr = root;                /* current table index bits */
  drop = 0;                   /* current bits to drop from code for index */
  low = -1;                   /* trigger new sub-table when len > root */
  used = 1 << root;          /* use root table entries */
  mask = used - 1;            /* mask for comparing low */

  /* check available table space */
  if ((type === LENS$1 && used > ENOUGH_LENS$1) ||
    (type === DISTS$1 && used > ENOUGH_DISTS$1)) {
    return 1;
  }

  /* process all codes and make table entries */
  for (;;) {
    /* create table entry */
    here_bits = len - drop;
    if (work[sym] + 1 < match) {
      here_op = 0;
      here_val = work[sym];
    }
    else if (work[sym] >= match) {
      here_op = extra[work[sym] - match];
      here_val = base[work[sym] - match];
    }
    else {
      here_op = 32 + 64;         /* end of block */
      here_val = 0;
    }

    /* replicate for those indices with low len bits equal to huff */
    incr = 1 << (len - drop);
    fill = 1 << curr;
    min = fill;                 /* save offset to next table */
    do {
      fill -= incr;
      table[next + (huff >> drop) + fill] = (here_bits << 24) | (here_op << 16) | here_val |0;
    } while (fill !== 0);

    /* backwards increment the len-bit code huff */
    incr = 1 << (len - 1);
    while (huff & incr) {
      incr >>= 1;
    }
    if (incr !== 0) {
      huff &= incr - 1;
      huff += incr;
    } else {
      huff = 0;
    }

    /* go to next symbol, update count, len */
    sym++;
    if (--count[len] === 0) {
      if (len === max) { break; }
      len = lens[lens_index + work[sym]];
    }

    /* create new sub-table if needed */
    if (len > root && (huff & mask) !== low) {
      /* if first time, transition to sub-tables */
      if (drop === 0) {
        drop = root;
      }

      /* increment past last table */
      next += min;            /* here min is 1 << curr */

      /* determine length of next table */
      curr = len - drop;
      left = 1 << curr;
      while (curr + drop < max) {
        left -= count[curr + drop];
        if (left <= 0) { break; }
        curr++;
        left <<= 1;
      }

      /* check for enough space */
      used += 1 << curr;
      if ((type === LENS$1 && used > ENOUGH_LENS$1) ||
        (type === DISTS$1 && used > ENOUGH_DISTS$1)) {
        return 1;
      }

      /* point entry in root table to sub-table */
      low = huff & mask;
      /*table.op[low] = curr;
      table.bits[low] = root;
      table.val[low] = next - opts.table_index;*/
      table[low] = (root << 24) | (curr << 16) | (next - table_index) |0;
    }
  }

  /* fill in remaining table entry if code is incomplete (guaranteed to have
   at most one remaining entry, since if the code is incomplete, the
   maximum code length that was allowed to get this far is one bit) */
  if (huff !== 0) {
    //table.op[next + huff] = 64;            /* invalid code marker */
    //table.bits[next + huff] = len - drop;
    //table.val[next + huff] = 0;
    table[next + huff] = ((len - drop) << 24) | (64 << 16) |0;
  }

  /* set return parameters */
  //opts.table_index += used;
  opts.bits = root;
  return 0;
};


var inftrees = inflate_table;

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.






const CODES = 0;
const LENS = 1;
const DISTS = 2;

/* Public constants ==========================================================*/
/* ===========================================================================*/

const {
  Z_FINISH: Z_FINISH$1, Z_BLOCK, Z_TREES,
  Z_OK: Z_OK$1, Z_STREAM_END: Z_STREAM_END$1, Z_NEED_DICT: Z_NEED_DICT$1, Z_STREAM_ERROR: Z_STREAM_ERROR$1, Z_DATA_ERROR: Z_DATA_ERROR$1, Z_MEM_ERROR: Z_MEM_ERROR$1, Z_BUF_ERROR,
  Z_DEFLATED
} = constants$2;


/* STATES ====================================================================*/
/* ===========================================================================*/


const    HEAD = 16180;       /* i: waiting for magic header */
const    FLAGS = 16181;      /* i: waiting for method and flags (gzip) */
const    TIME = 16182;       /* i: waiting for modification time (gzip) */
const    OS = 16183;         /* i: waiting for extra flags and operating system (gzip) */
const    EXLEN = 16184;      /* i: waiting for extra length (gzip) */
const    EXTRA = 16185;      /* i: waiting for extra bytes (gzip) */
const    NAME = 16186;       /* i: waiting for end of file name (gzip) */
const    COMMENT = 16187;    /* i: waiting for end of comment (gzip) */
const    HCRC = 16188;       /* i: waiting for header crc (gzip) */
const    DICTID = 16189;    /* i: waiting for dictionary check value */
const    DICT = 16190;      /* waiting for inflateSetDictionary() call */
const        TYPE = 16191;      /* i: waiting for type bits, including last-flag bit */
const        TYPEDO = 16192;    /* i: same, but skip check to exit inflate on new block */
const        STORED = 16193;    /* i: waiting for stored size (length and complement) */
const        COPY_ = 16194;     /* i/o: same as COPY below, but only first time in */
const        COPY = 16195;      /* i/o: waiting for input or output to copy stored block */
const        TABLE = 16196;     /* i: waiting for dynamic block table lengths */
const        LENLENS = 16197;   /* i: waiting for code length code lengths */
const        CODELENS = 16198;  /* i: waiting for length/lit and distance code lengths */
const            LEN_ = 16199;      /* i: same as LEN below, but only first time in */
const            LEN = 16200;       /* i: waiting for length/lit/eob code */
const            LENEXT = 16201;    /* i: waiting for length extra bits */
const            DIST = 16202;      /* i: waiting for distance code */
const            DISTEXT = 16203;   /* i: waiting for distance extra bits */
const            MATCH = 16204;     /* o: waiting for output space to copy string */
const            LIT = 16205;       /* o: waiting for output space to write literal */
const    CHECK = 16206;     /* i: waiting for 32-bit check value */
const    LENGTH = 16207;    /* i: waiting for 32-bit length (gzip) */
const    DONE = 16208;      /* finished check, done -- remain here until reset */
const    BAD = 16209;       /* got a data error -- remain here until reset */
const    MEM = 16210;       /* got an inflate() memory error -- remain here until reset */
const    SYNC = 16211;      /* looking for synchronization bytes to restart inflate() */

/* ===========================================================================*/



const ENOUGH_LENS = 852;
const ENOUGH_DISTS = 592;
//const ENOUGH =  (ENOUGH_LENS+ENOUGH_DISTS);

const MAX_WBITS = 15;
/* 32K LZ77 window */
const DEF_WBITS = MAX_WBITS;


const zswap32 = (q) => {

  return  (((q >>> 24) & 0xff) +
          ((q >>> 8) & 0xff00) +
          ((q & 0xff00) << 8) +
          ((q & 0xff) << 24));
};


function InflateState() {
  this.strm = null;           /* pointer back to this zlib stream */
  this.mode = 0;              /* current inflate mode */
  this.last = false;          /* true if processing last block */
  this.wrap = 0;              /* bit 0 true for zlib, bit 1 true for gzip,
                                 bit 2 true to validate check value */
  this.havedict = false;      /* true if dictionary provided */
  this.flags = 0;             /* gzip header method and flags (0 if zlib), or
                                 -1 if raw or no header yet */
  this.dmax = 0;              /* zlib header max distance (INFLATE_STRICT) */
  this.check = 0;             /* protected copy of check value */
  this.total = 0;             /* protected copy of output count */
  // TODO: may be {}
  this.head = null;           /* where to save gzip header information */

  /* sliding window */
  this.wbits = 0;             /* log base 2 of requested window size */
  this.wsize = 0;             /* window size or zero if not using window */
  this.whave = 0;             /* valid bytes in the window */
  this.wnext = 0;             /* window write index */
  this.window = null;         /* allocated sliding window, if needed */

  /* bit accumulator */
  this.hold = 0;              /* input bit accumulator */
  this.bits = 0;              /* number of bits in "in" */

  /* for string and stored block copying */
  this.length = 0;            /* literal or length of data to copy */
  this.offset = 0;            /* distance back to copy string from */

  /* for table and code decoding */
  this.extra = 0;             /* extra bits needed */

  /* fixed and dynamic code tables */
  this.lencode = null;          /* starting table for length/literal codes */
  this.distcode = null;         /* starting table for distance codes */
  this.lenbits = 0;           /* index bits for lencode */
  this.distbits = 0;          /* index bits for distcode */

  /* dynamic table building */
  this.ncode = 0;             /* number of code length code lengths */
  this.nlen = 0;              /* number of length code lengths */
  this.ndist = 0;             /* number of distance code lengths */
  this.have = 0;              /* number of code lengths in lens[] */
  this.next = null;              /* next available space in codes[] */

  this.lens = new Uint16Array(320); /* temporary storage for code lengths */
  this.work = new Uint16Array(288); /* work area for code table building */

  /*
   because we don't have pointers in js, we use lencode and distcode directly
   as buffers so we don't need codes
  */
  //this.codes = new Int32Array(ENOUGH);       /* space for code tables */
  this.lendyn = null;              /* dynamic table for length/literal codes (JS specific) */
  this.distdyn = null;             /* dynamic table for distance codes (JS specific) */
  this.sane = 0;                   /* if false, allow invalid distance too far */
  this.back = 0;                   /* bits back of last unprocessed length/lit */
  this.was = 0;                    /* initial length of match */
}


const inflateStateCheck = (strm) => {

  if (!strm) {
    return 1;
  }
  const state = strm.state;
  if (!state || state.strm !== strm ||
    state.mode < HEAD || state.mode > SYNC) {
    return 1;
  }
  return 0;
};


const inflateResetKeep = (strm) => {

  if (inflateStateCheck(strm)) { return Z_STREAM_ERROR$1; }
  const state = strm.state;
  strm.total_in = strm.total_out = state.total = 0;
  strm.msg = ''; /*Z_NULL*/
  if (state.wrap) {       /* to support ill-conceived Java test suite */
    strm.adler = state.wrap & 1;
  }
  state.mode = HEAD;
  state.last = 0;
  state.havedict = 0;
  state.flags = -1;
  state.dmax = 32768;
  state.head = null/*Z_NULL*/;
  state.hold = 0;
  state.bits = 0;
  //state.lencode = state.distcode = state.next = state.codes;
  state.lencode = state.lendyn = new Int32Array(ENOUGH_LENS);
  state.distcode = state.distdyn = new Int32Array(ENOUGH_DISTS);

  state.sane = 1;
  state.back = -1;
  //Tracev((stderr, "inflate: reset\n"));
  return Z_OK$1;
};


const inflateReset = (strm) => {

  if (inflateStateCheck(strm)) { return Z_STREAM_ERROR$1; }
  const state = strm.state;
  state.wsize = 0;
  state.whave = 0;
  state.wnext = 0;
  return inflateResetKeep(strm);

};


const inflateReset2 = (strm, windowBits) => {
  let wrap;

  /* get the state */
  if (inflateStateCheck(strm)) { return Z_STREAM_ERROR$1; }
  const state = strm.state;

  /* extract wrap request from windowBits parameter */
  if (windowBits < 0) {
    wrap = 0;
    windowBits = -windowBits;
  }
  else {
    wrap = (windowBits >> 4) + 5;
    if (windowBits < 48) {
      windowBits &= 15;
    }
  }

  /* set number of window bits, free window if different */
  if (windowBits && (windowBits < 8 || windowBits > 15)) {
    return Z_STREAM_ERROR$1;
  }
  if (state.window !== null && state.wbits !== windowBits) {
    state.window = null;
  }

  /* update state and reset the rest of it */
  state.wrap = wrap;
  state.wbits = windowBits;
  return inflateReset(strm);
};


const inflateInit2 = (strm, windowBits) => {

  if (!strm) { return Z_STREAM_ERROR$1; }
  //strm.msg = Z_NULL;                 /* in case we return an error */

  const state = new InflateState();

  //if (state === Z_NULL) return Z_MEM_ERROR;
  //Tracev((stderr, "inflate: allocated\n"));
  strm.state = state;
  state.strm = strm;
  state.window = null/*Z_NULL*/;
  state.mode = HEAD;     /* to pass state test in inflateReset2() */
  const ret = inflateReset2(strm, windowBits);
  if (ret !== Z_OK$1) {
    strm.state = null/*Z_NULL*/;
  }
  return ret;
};


const inflateInit = (strm) => {

  return inflateInit2(strm, DEF_WBITS);
};


/*
 Return state with length and distance decoding tables and index sizes set to
 fixed code decoding.  Normally this returns fixed tables from inffixed.h.
 If BUILDFIXED is defined, then instead this routine builds the tables the
 first time it's called, and returns those tables the first time and
 thereafter.  This reduces the size of the code by about 2K bytes, in
 exchange for a little execution time.  However, BUILDFIXED should not be
 used for threaded applications, since the rewriting of the tables and virgin
 may not be thread-safe.
 */
let virgin = true;

let lenfix, distfix; // We have no pointers in JS, so keep tables separate


const fixedtables = (state) => {

  /* build fixed huffman tables if first call (may not be thread safe) */
  if (virgin) {
    lenfix = new Int32Array(512);
    distfix = new Int32Array(32);

    /* literal/length table */
    let sym = 0;
    while (sym < 144) { state.lens[sym++] = 8; }
    while (sym < 256) { state.lens[sym++] = 9; }
    while (sym < 280) { state.lens[sym++] = 7; }
    while (sym < 288) { state.lens[sym++] = 8; }

    inftrees(LENS,  state.lens, 0, 288, lenfix,   0, state.work, { bits: 9 });

    /* distance table */
    sym = 0;
    while (sym < 32) { state.lens[sym++] = 5; }

    inftrees(DISTS, state.lens, 0, 32,   distfix, 0, state.work, { bits: 5 });

    /* do this just once */
    virgin = false;
  }

  state.lencode = lenfix;
  state.lenbits = 9;
  state.distcode = distfix;
  state.distbits = 5;
};


/*
 Update the window with the last wsize (normally 32K) bytes written before
 returning.  If window does not exist yet, create it.  This is only called
 when a window is already in use, or when output has been written during this
 inflate call, but the end of the deflate stream has not been reached yet.
 It is also called to create a window for dictionary data when a dictionary
 is loaded.

 Providing output buffers larger than 32K to inflate() should provide a speed
 advantage, since only the last 32K of output is copied to the sliding window
 upon return from inflate(), and since all distances after the first 32K of
 output will fall in the output data, making match copies simpler and faster.
 The advantage may be dependent on the size of the processor's data caches.
 */
const updatewindow = (strm, src, end, copy) => {

  let dist;
  const state = strm.state;

  /* if it hasn't been done already, allocate space for the window */
  if (state.window === null) {
    state.wsize = 1 << state.wbits;
    state.wnext = 0;
    state.whave = 0;

    state.window = new Uint8Array(state.wsize);
  }

  /* copy state->wsize or less output bytes into the circular window */
  if (copy >= state.wsize) {
    state.window.set(src.subarray(end - state.wsize, end), 0);
    state.wnext = 0;
    state.whave = state.wsize;
  }
  else {
    dist = state.wsize - state.wnext;
    if (dist > copy) {
      dist = copy;
    }
    //zmemcpy(state->window + state->wnext, end - copy, dist);
    state.window.set(src.subarray(end - copy, end - copy + dist), state.wnext);
    copy -= dist;
    if (copy) {
      //zmemcpy(state->window, end - copy, copy);
      state.window.set(src.subarray(end - copy, end), 0);
      state.wnext = copy;
      state.whave = state.wsize;
    }
    else {
      state.wnext += dist;
      if (state.wnext === state.wsize) { state.wnext = 0; }
      if (state.whave < state.wsize) { state.whave += dist; }
    }
  }
  return 0;
};


const inflate$2 = (strm, flush) => {

  let state;
  let input, output;          // input/output buffers
  let next;                   /* next input INDEX */
  let put;                    /* next output INDEX */
  let have, left;             /* available input and output */
  let hold;                   /* bit buffer */
  let bits;                   /* bits in bit buffer */
  let _in, _out;              /* save starting available input and output */
  let copy;                   /* number of stored or match bytes to copy */
  let from;                   /* where to copy match bytes from */
  let from_source;
  let here = 0;               /* current decoding table entry */
  let here_bits, here_op, here_val; // paked "here" denormalized (JS specific)
  //let last;                   /* parent table entry */
  let last_bits, last_op, last_val; // paked "last" denormalized (JS specific)
  let len;                    /* length to copy for repeats, bits to drop */
  let ret;                    /* return code */
  const hbuf = new Uint8Array(4);    /* buffer for gzip header crc calculation */
  let opts;

  let n; // temporary variable for NEED_BITS

  const order = /* permutation of code lengths */
    new Uint8Array([ 16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15 ]);


  if (inflateStateCheck(strm) || !strm.output ||
      (!strm.input && strm.avail_in !== 0)) {
    return Z_STREAM_ERROR$1;
  }

  state = strm.state;
  if (state.mode === TYPE) { state.mode = TYPEDO; }    /* skip check */


  //--- LOAD() ---
  put = strm.next_out;
  output = strm.output;
  left = strm.avail_out;
  next = strm.next_in;
  input = strm.input;
  have = strm.avail_in;
  hold = state.hold;
  bits = state.bits;
  //---

  _in = have;
  _out = left;
  ret = Z_OK$1;

  inf_leave: // goto emulation
  for (;;) {
    switch (state.mode) {
      case HEAD:
        if (state.wrap === 0) {
          state.mode = TYPEDO;
          break;
        }
        //=== NEEDBITS(16);
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if ((state.wrap & 2) && hold === 0x8b1f) {  /* gzip header */
          if (state.wbits === 0) {
            state.wbits = 15;
          }
          state.check = 0/*crc32(0L, Z_NULL, 0)*/;
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32_1(state.check, hbuf, 2, 0);
          //===//

          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          state.mode = FLAGS;
          break;
        }
        if (state.head) {
          state.head.done = false;
        }
        if (!(state.wrap & 1) ||   /* check if zlib header allowed */
          (((hold & 0xff)/*BITS(8)*/ << 8) + (hold >> 8)) % 31) {
          strm.msg = 'incorrect header check';
          state.mode = BAD;
          break;
        }
        if ((hold & 0x0f)/*BITS(4)*/ !== Z_DEFLATED) {
          strm.msg = 'unknown compression method';
          state.mode = BAD;
          break;
        }
        //--- DROPBITS(4) ---//
        hold >>>= 4;
        bits -= 4;
        //---//
        len = (hold & 0x0f)/*BITS(4)*/ + 8;
        if (state.wbits === 0) {
          state.wbits = len;
        }
        if (len > 15 || len > state.wbits) {
          strm.msg = 'invalid window size';
          state.mode = BAD;
          break;
        }

        // !!! pako patch. Force use `options.windowBits` if passed.
        // Required to always use max window size by default.
        state.dmax = 1 << state.wbits;
        //state.dmax = 1 << len;

        state.flags = 0;               /* indicate zlib header */
        //Tracev((stderr, "inflate:   zlib header ok\n"));
        strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
        state.mode = hold & 0x200 ? DICTID : TYPE;
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        break;
      case FLAGS:
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.flags = hold;
        if ((state.flags & 0xff) !== Z_DEFLATED) {
          strm.msg = 'unknown compression method';
          state.mode = BAD;
          break;
        }
        if (state.flags & 0xe000) {
          strm.msg = 'unknown header flags set';
          state.mode = BAD;
          break;
        }
        if (state.head) {
          state.head.text = ((hold >> 8) & 1);
        }
        if ((state.flags & 0x0200) && (state.wrap & 4)) {
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32_1(state.check, hbuf, 2, 0);
          //===//
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = TIME;
        /* falls through */
      case TIME:
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (state.head) {
          state.head.time = hold;
        }
        if ((state.flags & 0x0200) && (state.wrap & 4)) {
          //=== CRC4(state.check, hold)
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          hbuf[2] = (hold >>> 16) & 0xff;
          hbuf[3] = (hold >>> 24) & 0xff;
          state.check = crc32_1(state.check, hbuf, 4, 0);
          //===
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = OS;
        /* falls through */
      case OS:
        //=== NEEDBITS(16); */
        while (bits < 16) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if (state.head) {
          state.head.xflags = (hold & 0xff);
          state.head.os = (hold >> 8);
        }
        if ((state.flags & 0x0200) && (state.wrap & 4)) {
          //=== CRC2(state.check, hold);
          hbuf[0] = hold & 0xff;
          hbuf[1] = (hold >>> 8) & 0xff;
          state.check = crc32_1(state.check, hbuf, 2, 0);
          //===//
        }
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = EXLEN;
        /* falls through */
      case EXLEN:
        if (state.flags & 0x0400) {
          //=== NEEDBITS(16); */
          while (bits < 16) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.length = hold;
          if (state.head) {
            state.head.extra_len = hold;
          }
          if ((state.flags & 0x0200) && (state.wrap & 4)) {
            //=== CRC2(state.check, hold);
            hbuf[0] = hold & 0xff;
            hbuf[1] = (hold >>> 8) & 0xff;
            state.check = crc32_1(state.check, hbuf, 2, 0);
            //===//
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
        }
        else if (state.head) {
          state.head.extra = null/*Z_NULL*/;
        }
        state.mode = EXTRA;
        /* falls through */
      case EXTRA:
        if (state.flags & 0x0400) {
          copy = state.length;
          if (copy > have) { copy = have; }
          if (copy) {
            if (state.head) {
              len = state.head.extra_len - state.length;
              if (!state.head.extra) {
                // Use untyped array for more convenient processing later
                state.head.extra = new Uint8Array(state.head.extra_len);
              }
              state.head.extra.set(
                input.subarray(
                  next,
                  // extra field is limited to 65536 bytes
                  // - no need for additional size check
                  next + copy
                ),
                /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
                len
              );
              //zmemcpy(state.head.extra + len, next,
              //        len + copy > state.head.extra_max ?
              //        state.head.extra_max - len : copy);
            }
            if ((state.flags & 0x0200) && (state.wrap & 4)) {
              state.check = crc32_1(state.check, input, copy, next);
            }
            have -= copy;
            next += copy;
            state.length -= copy;
          }
          if (state.length) { break inf_leave; }
        }
        state.length = 0;
        state.mode = NAME;
        /* falls through */
      case NAME:
        if (state.flags & 0x0800) {
          if (have === 0) { break inf_leave; }
          copy = 0;
          do {
            // TODO: 2 or 1 bytes?
            len = input[next + copy++];
            /* use constant limit because in js we should not preallocate memory */
            if (state.head && len &&
                (state.length < 65536 /*state.head.name_max*/)) {
              state.head.name += String.fromCharCode(len);
            }
          } while (len && copy < have);

          if ((state.flags & 0x0200) && (state.wrap & 4)) {
            state.check = crc32_1(state.check, input, copy, next);
          }
          have -= copy;
          next += copy;
          if (len) { break inf_leave; }
        }
        else if (state.head) {
          state.head.name = null;
        }
        state.length = 0;
        state.mode = COMMENT;
        /* falls through */
      case COMMENT:
        if (state.flags & 0x1000) {
          if (have === 0) { break inf_leave; }
          copy = 0;
          do {
            len = input[next + copy++];
            /* use constant limit because in js we should not preallocate memory */
            if (state.head && len &&
                (state.length < 65536 /*state.head.comm_max*/)) {
              state.head.comment += String.fromCharCode(len);
            }
          } while (len && copy < have);
          if ((state.flags & 0x0200) && (state.wrap & 4)) {
            state.check = crc32_1(state.check, input, copy, next);
          }
          have -= copy;
          next += copy;
          if (len) { break inf_leave; }
        }
        else if (state.head) {
          state.head.comment = null;
        }
        state.mode = HCRC;
        /* falls through */
      case HCRC:
        if (state.flags & 0x0200) {
          //=== NEEDBITS(16); */
          while (bits < 16) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          if ((state.wrap & 4) && hold !== (state.check & 0xffff)) {
            strm.msg = 'header crc mismatch';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
        }
        if (state.head) {
          state.head.hcrc = ((state.flags >> 9) & 1);
          state.head.done = true;
        }
        strm.adler = state.check = 0;
        state.mode = TYPE;
        break;
      case DICTID:
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        strm.adler = state.check = zswap32(hold);
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = DICT;
        /* falls through */
      case DICT:
        if (state.havedict === 0) {
          //--- RESTORE() ---
          strm.next_out = put;
          strm.avail_out = left;
          strm.next_in = next;
          strm.avail_in = have;
          state.hold = hold;
          state.bits = bits;
          //---
          return Z_NEED_DICT$1;
        }
        strm.adler = state.check = 1/*adler32(0L, Z_NULL, 0)*/;
        state.mode = TYPE;
        /* falls through */
      case TYPE:
        if (flush === Z_BLOCK || flush === Z_TREES) { break inf_leave; }
        /* falls through */
      case TYPEDO:
        if (state.last) {
          //--- BYTEBITS() ---//
          hold >>>= bits & 7;
          bits -= bits & 7;
          //---//
          state.mode = CHECK;
          break;
        }
        //=== NEEDBITS(3); */
        while (bits < 3) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.last = (hold & 0x01)/*BITS(1)*/;
        //--- DROPBITS(1) ---//
        hold >>>= 1;
        bits -= 1;
        //---//

        switch ((hold & 0x03)/*BITS(2)*/) {
          case 0:                             /* stored block */
            //Tracev((stderr, "inflate:     stored block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = STORED;
            break;
          case 1:                             /* fixed block */
            fixedtables(state);
            //Tracev((stderr, "inflate:     fixed codes block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = LEN_;             /* decode codes */
            if (flush === Z_TREES) {
              //--- DROPBITS(2) ---//
              hold >>>= 2;
              bits -= 2;
              //---//
              break inf_leave;
            }
            break;
          case 2:                             /* dynamic block */
            //Tracev((stderr, "inflate:     dynamic codes block%s\n",
            //        state.last ? " (last)" : ""));
            state.mode = TABLE;
            break;
          case 3:
            strm.msg = 'invalid block type';
            state.mode = BAD;
        }
        //--- DROPBITS(2) ---//
        hold >>>= 2;
        bits -= 2;
        //---//
        break;
      case STORED:
        //--- BYTEBITS() ---// /* go to byte boundary */
        hold >>>= bits & 7;
        bits -= bits & 7;
        //---//
        //=== NEEDBITS(32); */
        while (bits < 32) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        if ((hold & 0xffff) !== ((hold >>> 16) ^ 0xffff)) {
          strm.msg = 'invalid stored block lengths';
          state.mode = BAD;
          break;
        }
        state.length = hold & 0xffff;
        //Tracev((stderr, "inflate:       stored length %u\n",
        //        state.length));
        //=== INITBITS();
        hold = 0;
        bits = 0;
        //===//
        state.mode = COPY_;
        if (flush === Z_TREES) { break inf_leave; }
        /* falls through */
      case COPY_:
        state.mode = COPY;
        /* falls through */
      case COPY:
        copy = state.length;
        if (copy) {
          if (copy > have) { copy = have; }
          if (copy > left) { copy = left; }
          if (copy === 0) { break inf_leave; }
          //--- zmemcpy(put, next, copy); ---
          output.set(input.subarray(next, next + copy), put);
          //---//
          have -= copy;
          next += copy;
          left -= copy;
          put += copy;
          state.length -= copy;
          break;
        }
        //Tracev((stderr, "inflate:       stored end\n"));
        state.mode = TYPE;
        break;
      case TABLE:
        //=== NEEDBITS(14); */
        while (bits < 14) {
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
        }
        //===//
        state.nlen = (hold & 0x1f)/*BITS(5)*/ + 257;
        //--- DROPBITS(5) ---//
        hold >>>= 5;
        bits -= 5;
        //---//
        state.ndist = (hold & 0x1f)/*BITS(5)*/ + 1;
        //--- DROPBITS(5) ---//
        hold >>>= 5;
        bits -= 5;
        //---//
        state.ncode = (hold & 0x0f)/*BITS(4)*/ + 4;
        //--- DROPBITS(4) ---//
        hold >>>= 4;
        bits -= 4;
        //---//
//#ifndef PKZIP_BUG_WORKAROUND
        if (state.nlen > 286 || state.ndist > 30) {
          strm.msg = 'too many length or distance symbols';
          state.mode = BAD;
          break;
        }
//#endif
        //Tracev((stderr, "inflate:       table sizes ok\n"));
        state.have = 0;
        state.mode = LENLENS;
        /* falls through */
      case LENLENS:
        while (state.have < state.ncode) {
          //=== NEEDBITS(3);
          while (bits < 3) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.lens[order[state.have++]] = (hold & 0x07);//BITS(3);
          //--- DROPBITS(3) ---//
          hold >>>= 3;
          bits -= 3;
          //---//
        }
        while (state.have < 19) {
          state.lens[order[state.have++]] = 0;
        }
        // We have separate tables & no pointers. 2 commented lines below not needed.
        //state.next = state.codes;
        //state.lencode = state.next;
        // Switch to use dynamic table
        state.lencode = state.lendyn;
        state.lenbits = 7;

        opts = { bits: state.lenbits };
        ret = inftrees(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
        state.lenbits = opts.bits;

        if (ret) {
          strm.msg = 'invalid code lengths set';
          state.mode = BAD;
          break;
        }
        //Tracev((stderr, "inflate:       code lengths ok\n"));
        state.have = 0;
        state.mode = CODELENS;
        /* falls through */
      case CODELENS:
        while (state.have < state.nlen + state.ndist) {
          for (;;) {
            here = state.lencode[hold & ((1 << state.lenbits) - 1)];/*BITS(state.lenbits)*/
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((here_bits) <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          if (here_val < 16) {
            //--- DROPBITS(here.bits) ---//
            hold >>>= here_bits;
            bits -= here_bits;
            //---//
            state.lens[state.have++] = here_val;
          }
          else {
            if (here_val === 16) {
              //=== NEEDBITS(here.bits + 2);
              n = here_bits + 2;
              while (bits < n) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              if (state.have === 0) {
                strm.msg = 'invalid bit length repeat';
                state.mode = BAD;
                break;
              }
              len = state.lens[state.have - 1];
              copy = 3 + (hold & 0x03);//BITS(2);
              //--- DROPBITS(2) ---//
              hold >>>= 2;
              bits -= 2;
              //---//
            }
            else if (here_val === 17) {
              //=== NEEDBITS(here.bits + 3);
              n = here_bits + 3;
              while (bits < n) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              len = 0;
              copy = 3 + (hold & 0x07);//BITS(3);
              //--- DROPBITS(3) ---//
              hold >>>= 3;
              bits -= 3;
              //---//
            }
            else {
              //=== NEEDBITS(here.bits + 7);
              n = here_bits + 7;
              while (bits < n) {
                if (have === 0) { break inf_leave; }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              //===//
              //--- DROPBITS(here.bits) ---//
              hold >>>= here_bits;
              bits -= here_bits;
              //---//
              len = 0;
              copy = 11 + (hold & 0x7f);//BITS(7);
              //--- DROPBITS(7) ---//
              hold >>>= 7;
              bits -= 7;
              //---//
            }
            if (state.have + copy > state.nlen + state.ndist) {
              strm.msg = 'invalid bit length repeat';
              state.mode = BAD;
              break;
            }
            while (copy--) {
              state.lens[state.have++] = len;
            }
          }
        }

        /* handle error breaks in while */
        if (state.mode === BAD) { break; }

        /* check for end-of-block code (better have one) */
        if (state.lens[256] === 0) {
          strm.msg = 'invalid code -- missing end-of-block';
          state.mode = BAD;
          break;
        }

        /* build code tables -- note: do not change the lenbits or distbits
           values here (9 and 6) without reading the comments in inftrees.h
           concerning the ENOUGH constants, which depend on those values */
        state.lenbits = 9;

        opts = { bits: state.lenbits };
        ret = inftrees(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
        // We have separate tables & no pointers. 2 commented lines below not needed.
        // state.next_index = opts.table_index;
        state.lenbits = opts.bits;
        // state.lencode = state.next;

        if (ret) {
          strm.msg = 'invalid literal/lengths set';
          state.mode = BAD;
          break;
        }

        state.distbits = 6;
        //state.distcode.copy(state.codes);
        // Switch to use dynamic table
        state.distcode = state.distdyn;
        opts = { bits: state.distbits };
        ret = inftrees(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
        // We have separate tables & no pointers. 2 commented lines below not needed.
        // state.next_index = opts.table_index;
        state.distbits = opts.bits;
        // state.distcode = state.next;

        if (ret) {
          strm.msg = 'invalid distances set';
          state.mode = BAD;
          break;
        }
        //Tracev((stderr, 'inflate:       codes ok\n'));
        state.mode = LEN_;
        if (flush === Z_TREES) { break inf_leave; }
        /* falls through */
      case LEN_:
        state.mode = LEN;
        /* falls through */
      case LEN:
        if (have >= 6 && left >= 258) {
          //--- RESTORE() ---
          strm.next_out = put;
          strm.avail_out = left;
          strm.next_in = next;
          strm.avail_in = have;
          state.hold = hold;
          state.bits = bits;
          //---
          inffast(strm, _out);
          //--- LOAD() ---
          put = strm.next_out;
          output = strm.output;
          left = strm.avail_out;
          next = strm.next_in;
          input = strm.input;
          have = strm.avail_in;
          hold = state.hold;
          bits = state.bits;
          //---

          if (state.mode === TYPE) {
            state.back = -1;
          }
          break;
        }
        state.back = 0;
        for (;;) {
          here = state.lencode[hold & ((1 << state.lenbits) - 1)];  /*BITS(state.lenbits)*/
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if (here_bits <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        if (here_op && (here_op & 0xf0) === 0) {
          last_bits = here_bits;
          last_op = here_op;
          last_val = here_val;
          for (;;) {
            here = state.lencode[last_val +
                    ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((last_bits + here_bits) <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          //--- DROPBITS(last.bits) ---//
          hold >>>= last_bits;
          bits -= last_bits;
          //---//
          state.back += last_bits;
        }
        //--- DROPBITS(here.bits) ---//
        hold >>>= here_bits;
        bits -= here_bits;
        //---//
        state.back += here_bits;
        state.length = here_val;
        if (here_op === 0) {
          //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
          //        "inflate:         literal '%c'\n" :
          //        "inflate:         literal 0x%02x\n", here.val));
          state.mode = LIT;
          break;
        }
        if (here_op & 32) {
          //Tracevv((stderr, "inflate:         end of block\n"));
          state.back = -1;
          state.mode = TYPE;
          break;
        }
        if (here_op & 64) {
          strm.msg = 'invalid literal/length code';
          state.mode = BAD;
          break;
        }
        state.extra = here_op & 15;
        state.mode = LENEXT;
        /* falls through */
      case LENEXT:
        if (state.extra) {
          //=== NEEDBITS(state.extra);
          n = state.extra;
          while (bits < n) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.length += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
          //--- DROPBITS(state.extra) ---//
          hold >>>= state.extra;
          bits -= state.extra;
          //---//
          state.back += state.extra;
        }
        //Tracevv((stderr, "inflate:         length %u\n", state.length));
        state.was = state.length;
        state.mode = DIST;
        /* falls through */
      case DIST:
        for (;;) {
          here = state.distcode[hold & ((1 << state.distbits) - 1)];/*BITS(state.distbits)*/
          here_bits = here >>> 24;
          here_op = (here >>> 16) & 0xff;
          here_val = here & 0xffff;

          if ((here_bits) <= bits) { break; }
          //--- PULLBYTE() ---//
          if (have === 0) { break inf_leave; }
          have--;
          hold += input[next++] << bits;
          bits += 8;
          //---//
        }
        if ((here_op & 0xf0) === 0) {
          last_bits = here_bits;
          last_op = here_op;
          last_val = here_val;
          for (;;) {
            here = state.distcode[last_val +
                    ((hold & ((1 << (last_bits + last_op)) - 1))/*BITS(last.bits + last.op)*/ >> last_bits)];
            here_bits = here >>> 24;
            here_op = (here >>> 16) & 0xff;
            here_val = here & 0xffff;

            if ((last_bits + here_bits) <= bits) { break; }
            //--- PULLBYTE() ---//
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
            //---//
          }
          //--- DROPBITS(last.bits) ---//
          hold >>>= last_bits;
          bits -= last_bits;
          //---//
          state.back += last_bits;
        }
        //--- DROPBITS(here.bits) ---//
        hold >>>= here_bits;
        bits -= here_bits;
        //---//
        state.back += here_bits;
        if (here_op & 64) {
          strm.msg = 'invalid distance code';
          state.mode = BAD;
          break;
        }
        state.offset = here_val;
        state.extra = (here_op) & 15;
        state.mode = DISTEXT;
        /* falls through */
      case DISTEXT:
        if (state.extra) {
          //=== NEEDBITS(state.extra);
          n = state.extra;
          while (bits < n) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          state.offset += hold & ((1 << state.extra) - 1)/*BITS(state.extra)*/;
          //--- DROPBITS(state.extra) ---//
          hold >>>= state.extra;
          bits -= state.extra;
          //---//
          state.back += state.extra;
        }
//#ifdef INFLATE_STRICT
        if (state.offset > state.dmax) {
          strm.msg = 'invalid distance too far back';
          state.mode = BAD;
          break;
        }
//#endif
        //Tracevv((stderr, "inflate:         distance %u\n", state.offset));
        state.mode = MATCH;
        /* falls through */
      case MATCH:
        if (left === 0) { break inf_leave; }
        copy = _out - left;
        if (state.offset > copy) {         /* copy from window */
          copy = state.offset - copy;
          if (copy > state.whave) {
            if (state.sane) {
              strm.msg = 'invalid distance too far back';
              state.mode = BAD;
              break;
            }
// (!) This block is disabled in zlib defaults,
// don't enable it for binary compatibility
//#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
//          Trace((stderr, "inflate.c too far\n"));
//          copy -= state.whave;
//          if (copy > state.length) { copy = state.length; }
//          if (copy > left) { copy = left; }
//          left -= copy;
//          state.length -= copy;
//          do {
//            output[put++] = 0;
//          } while (--copy);
//          if (state.length === 0) { state.mode = LEN; }
//          break;
//#endif
          }
          if (copy > state.wnext) {
            copy -= state.wnext;
            from = state.wsize - copy;
          }
          else {
            from = state.wnext - copy;
          }
          if (copy > state.length) { copy = state.length; }
          from_source = state.window;
        }
        else {                              /* copy from output */
          from_source = output;
          from = put - state.offset;
          copy = state.length;
        }
        if (copy > left) { copy = left; }
        left -= copy;
        state.length -= copy;
        do {
          output[put++] = from_source[from++];
        } while (--copy);
        if (state.length === 0) { state.mode = LEN; }
        break;
      case LIT:
        if (left === 0) { break inf_leave; }
        output[put++] = state.length;
        left--;
        state.mode = LEN;
        break;
      case CHECK:
        if (state.wrap) {
          //=== NEEDBITS(32);
          while (bits < 32) {
            if (have === 0) { break inf_leave; }
            have--;
            // Use '|' instead of '+' to make sure that result is signed
            hold |= input[next++] << bits;
            bits += 8;
          }
          //===//
          _out -= left;
          strm.total_out += _out;
          state.total += _out;
          if ((state.wrap & 4) && _out) {
            strm.adler = state.check =
                /*UPDATE_CHECK(state.check, put - _out, _out);*/
                (state.flags ? crc32_1(state.check, output, _out, put - _out) : adler32_1(state.check, output, _out, put - _out));

          }
          _out = left;
          // NB: crc32 stored as signed 32-bit int, zswap32 returns signed too
          if ((state.wrap & 4) && (state.flags ? hold : zswap32(hold)) !== state.check) {
            strm.msg = 'incorrect data check';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          //Tracev((stderr, "inflate:   check matches trailer\n"));
        }
        state.mode = LENGTH;
        /* falls through */
      case LENGTH:
        if (state.wrap && state.flags) {
          //=== NEEDBITS(32);
          while (bits < 32) {
            if (have === 0) { break inf_leave; }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          //===//
          if ((state.wrap & 4) && hold !== (state.total & 0xffffffff)) {
            strm.msg = 'incorrect length check';
            state.mode = BAD;
            break;
          }
          //=== INITBITS();
          hold = 0;
          bits = 0;
          //===//
          //Tracev((stderr, "inflate:   length matches trailer\n"));
        }
        state.mode = DONE;
        /* falls through */
      case DONE:
        ret = Z_STREAM_END$1;
        break inf_leave;
      case BAD:
        ret = Z_DATA_ERROR$1;
        break inf_leave;
      case MEM:
        return Z_MEM_ERROR$1;
      case SYNC:
        /* falls through */
      default:
        return Z_STREAM_ERROR$1;
    }
  }

  // inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"

  /*
     Return from inflate(), updating the total counts and the check value.
     If there was no progress during the inflate() call, return a buffer
     error.  Call updatewindow() to create and/or update the window state.
     Note: a memory error from inflate() is non-recoverable.
   */

  //--- RESTORE() ---
  strm.next_out = put;
  strm.avail_out = left;
  strm.next_in = next;
  strm.avail_in = have;
  state.hold = hold;
  state.bits = bits;
  //---

  if (state.wsize || (_out !== strm.avail_out && state.mode < BAD &&
                      (state.mode < CHECK || flush !== Z_FINISH$1))) {
    if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) ;
  }
  _in -= strm.avail_in;
  _out -= strm.avail_out;
  strm.total_in += _in;
  strm.total_out += _out;
  state.total += _out;
  if ((state.wrap & 4) && _out) {
    strm.adler = state.check = /*UPDATE_CHECK(state.check, strm.next_out - _out, _out);*/
      (state.flags ? crc32_1(state.check, output, _out, strm.next_out - _out) : adler32_1(state.check, output, _out, strm.next_out - _out));
  }
  strm.data_type = state.bits + (state.last ? 64 : 0) +
                    (state.mode === TYPE ? 128 : 0) +
                    (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
  if (((_in === 0 && _out === 0) || flush === Z_FINISH$1) && ret === Z_OK$1) {
    ret = Z_BUF_ERROR;
  }
  return ret;
};


const inflateEnd = (strm) => {

  if (inflateStateCheck(strm)) {
    return Z_STREAM_ERROR$1;
  }

  let state = strm.state;
  if (state.window) {
    state.window = null;
  }
  strm.state = null;
  return Z_OK$1;
};


const inflateGetHeader = (strm, head) => {

  /* check state */
  if (inflateStateCheck(strm)) { return Z_STREAM_ERROR$1; }
  const state = strm.state;
  if ((state.wrap & 2) === 0) { return Z_STREAM_ERROR$1; }

  /* save header structure */
  state.head = head;
  head.done = false;
  return Z_OK$1;
};


const inflateSetDictionary = (strm, dictionary) => {
  const dictLength = dictionary.length;

  let state;
  let dictid;
  let ret;

  /* check state */
  if (inflateStateCheck(strm)) { return Z_STREAM_ERROR$1; }
  state = strm.state;

  if (state.wrap !== 0 && state.mode !== DICT) {
    return Z_STREAM_ERROR$1;
  }

  /* check for correct dictionary identifier */
  if (state.mode === DICT) {
    dictid = 1; /* adler32(0, null, 0)*/
    /* dictid = adler32(dictid, dictionary, dictLength); */
    dictid = adler32_1(dictid, dictionary, dictLength, 0);
    if (dictid !== state.check) {
      return Z_DATA_ERROR$1;
    }
  }
  /* copy dictionary to window using updatewindow(), which will amend the
   existing dictionary if appropriate */
  ret = updatewindow(strm, dictionary, dictLength, dictLength);
  if (ret) {
    state.mode = MEM;
    return Z_MEM_ERROR$1;
  }
  state.havedict = 1;
  // Tracev((stderr, "inflate:   dictionary set\n"));
  return Z_OK$1;
};


var inflateReset_1 = inflateReset;
var inflateReset2_1 = inflateReset2;
var inflateResetKeep_1 = inflateResetKeep;
var inflateInit_1 = inflateInit;
var inflateInit2_1 = inflateInit2;
var inflate_2$1 = inflate$2;
var inflateEnd_1 = inflateEnd;
var inflateGetHeader_1 = inflateGetHeader;
var inflateSetDictionary_1 = inflateSetDictionary;
var inflateInfo = 'pako inflate (from Nodeca project)';

/* Not implemented
module.exports.inflateCodesUsed = inflateCodesUsed;
module.exports.inflateCopy = inflateCopy;
module.exports.inflateGetDictionary = inflateGetDictionary;
module.exports.inflateMark = inflateMark;
module.exports.inflatePrime = inflatePrime;
module.exports.inflateSync = inflateSync;
module.exports.inflateSyncPoint = inflateSyncPoint;
module.exports.inflateUndermine = inflateUndermine;
module.exports.inflateValidate = inflateValidate;
*/

var inflate_1$2 = {
	inflateReset: inflateReset_1,
	inflateReset2: inflateReset2_1,
	inflateResetKeep: inflateResetKeep_1,
	inflateInit: inflateInit_1,
	inflateInit2: inflateInit2_1,
	inflate: inflate_2$1,
	inflateEnd: inflateEnd_1,
	inflateGetHeader: inflateGetHeader_1,
	inflateSetDictionary: inflateSetDictionary_1,
	inflateInfo: inflateInfo
};

// (C) 1995-2013 Jean-loup Gailly and Mark Adler
// (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
//
// This software is provided 'as-is', without any express or implied
// warranty. In no event will the authors be held liable for any damages
// arising from the use of this software.
//
// Permission is granted to anyone to use this software for any purpose,
// including commercial applications, and to alter it and redistribute it
// freely, subject to the following restrictions:
//
// 1. The origin of this software must not be misrepresented; you must not
//   claim that you wrote the original software. If you use this software
//   in a product, an acknowledgment in the product documentation would be
//   appreciated but is not required.
// 2. Altered source versions must be plainly marked as such, and must not be
//   misrepresented as being the original software.
// 3. This notice may not be removed or altered from any source distribution.

function GZheader() {
  /* true if compressed data believed to be text */
  this.text       = 0;
  /* modification time */
  this.time       = 0;
  /* extra flags (not used when writing a gzip file) */
  this.xflags     = 0;
  /* operating system */
  this.os         = 0;
  /* pointer to extra field or Z_NULL if none */
  this.extra      = null;
  /* extra field length (valid if extra != Z_NULL) */
  this.extra_len  = 0; // Actually, we don't need it in JS,
                       // but leave for few code modifications

  //
  // Setup limits is not necessary because in js we should not preallocate memory
  // for inflate use constant limit in 65536 bytes
  //

  /* space at extra (only when reading header) */
  // this.extra_max  = 0;
  /* pointer to zero-terminated file name or Z_NULL */
  this.name       = '';
  /* space at name (only when reading header) */
  // this.name_max   = 0;
  /* pointer to zero-terminated comment or Z_NULL */
  this.comment    = '';
  /* space at comment (only when reading header) */
  // this.comm_max   = 0;
  /* true if there was or will be a header crc */
  this.hcrc       = 0;
  /* true when done reading gzip header (not used when writing a gzip file) */
  this.done       = false;
}

var gzheader = GZheader;

const toString = Object.prototype.toString;

/* Public constants ==========================================================*/
/* ===========================================================================*/

const {
  Z_NO_FLUSH, Z_FINISH,
  Z_OK, Z_STREAM_END, Z_NEED_DICT, Z_STREAM_ERROR, Z_DATA_ERROR, Z_MEM_ERROR
} = constants$2;

/* ===========================================================================*/


/**
 * class Inflate
 *
 * Generic JS-style wrapper for zlib calls. If you don't need
 * streaming behaviour - use more simple functions: [[inflate]]
 * and [[inflateRaw]].
 **/

/* internal
 * inflate.chunks -> Array
 *
 * Chunks of output data, if [[Inflate#onData]] not overridden.
 **/

/**
 * Inflate.result -> Uint8Array|String
 *
 * Uncompressed result, generated by default [[Inflate#onData]]
 * and [[Inflate#onEnd]] handlers. Filled after you push last chunk
 * (call [[Inflate#push]] with `Z_FINISH` / `true` param).
 **/

/**
 * Inflate.err -> Number
 *
 * Error code after inflate finished. 0 (Z_OK) on success.
 * Should be checked if broken data possible.
 **/

/**
 * Inflate.msg -> String
 *
 * Error message, if [[Inflate.err]] != 0
 **/


/**
 * new Inflate(options)
 * - options (Object): zlib inflate options.
 *
 * Creates new inflator instance with specified params. Throws exception
 * on bad params. Supported options:
 *
 * - `windowBits`
 * - `dictionary`
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information on these.
 *
 * Additional options, for internal needs:
 *
 * - `chunkSize` - size of generated data chunks (16K by default)
 * - `raw` (Boolean) - do raw inflate
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 * By default, when no options set, autodetect deflate/gzip data format via
 * wrapper header.
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako')
 * const chunk1 = new Uint8Array([1,2,3,4,5,6,7,8,9])
 * const chunk2 = new Uint8Array([10,11,12,13,14,15,16,17,18,19]);
 *
 * const inflate = new pako.Inflate({ level: 3});
 *
 * inflate.push(chunk1, false);
 * inflate.push(chunk2, true);  // true -> last chunk
 *
 * if (inflate.err) { throw new Error(inflate.err); }
 *
 * console.log(inflate.result);
 * ```
 **/
function Inflate$1(options) {
  this.options = common.assign({
    chunkSize: 1024 * 64,
    windowBits: 15,
    to: ''
  }, options || {});

  const opt = this.options;

  // Force window size for `raw` data, if not set directly,
  // because we have no header for autodetect.
  if (opt.raw && (opt.windowBits >= 0) && (opt.windowBits < 16)) {
    opt.windowBits = -opt.windowBits;
    if (opt.windowBits === 0) { opt.windowBits = -15; }
  }

  // If `windowBits` not defined (and mode not raw) - set autodetect flag for gzip/deflate
  if ((opt.windowBits >= 0) && (opt.windowBits < 16) &&
      !(options && options.windowBits)) {
    opt.windowBits += 32;
  }

  // Gzip header has no info about windows size, we can do autodetect only
  // for deflate. So, if window size not set, force it to max when gzip possible
  if ((opt.windowBits > 15) && (opt.windowBits < 48)) {
    // bit 3 (16) -> gzipped data
    // bit 4 (32) -> autodetect gzip/deflate
    if ((opt.windowBits & 15) === 0) {
      opt.windowBits |= 15;
    }
  }

  this.err    = 0;      // error code, if happens (0 = Z_OK)
  this.msg    = '';     // error message
  this.ended  = false;  // used to avoid multiple onEnd() calls
  this.chunks = [];     // chunks of compressed data

  this.strm   = new zstream();
  this.strm.avail_out = 0;

  let status  = inflate_1$2.inflateInit2(
    this.strm,
    opt.windowBits
  );

  if (status !== Z_OK) {
    throw new Error(messages[status]);
  }

  this.header = new gzheader();

  inflate_1$2.inflateGetHeader(this.strm, this.header);

  // Setup dictionary
  if (opt.dictionary) {
    // Convert data if needed
    if (typeof opt.dictionary === 'string') {
      opt.dictionary = strings.string2buf(opt.dictionary);
    } else if (toString.call(opt.dictionary) === '[object ArrayBuffer]') {
      opt.dictionary = new Uint8Array(opt.dictionary);
    }
    if (opt.raw) { //In raw mode we need to set the dictionary early
      status = inflate_1$2.inflateSetDictionary(this.strm, opt.dictionary);
      if (status !== Z_OK) {
        throw new Error(messages[status]);
      }
    }
  }
}

/**
 * Inflate#push(data[, flush_mode]) -> Boolean
 * - data (Uint8Array|ArrayBuffer): input data
 * - flush_mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE
 *   flush modes. See constants. Skipped or `false` means Z_NO_FLUSH,
 *   `true` means Z_FINISH.
 *
 * Sends input data to inflate pipe, generating [[Inflate#onData]] calls with
 * new output chunks. Returns `true` on success. If end of stream detected,
 * [[Inflate#onEnd]] will be called.
 *
 * `flush_mode` is not needed for normal operation, because end of stream
 * detected automatically. You may try to use it for advanced things, but
 * this functionality was not tested.
 *
 * On fail call [[Inflate#onEnd]] with error code and return false.
 *
 * ##### Example
 *
 * ```javascript
 * push(chunk, false); // push one of data chunks
 * ...
 * push(chunk, true);  // push last chunk
 * ```
 **/
Inflate$1.prototype.push = function (data, flush_mode) {
  const strm = this.strm;
  const chunkSize = this.options.chunkSize;
  const dictionary = this.options.dictionary;
  let status, _flush_mode, last_avail_out;

  if (this.ended) return false;

  if (flush_mode === ~~flush_mode) _flush_mode = flush_mode;
  else _flush_mode = flush_mode === true ? Z_FINISH : Z_NO_FLUSH;

  // Convert data if needed
  if (toString.call(data) === '[object ArrayBuffer]') {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }

  strm.next_in = 0;
  strm.avail_in = strm.input.length;

  for (;;) {
    if (strm.avail_out === 0) {
      strm.output = new Uint8Array(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }

    status = inflate_1$2.inflate(strm, _flush_mode);

    if (status === Z_NEED_DICT && dictionary) {
      status = inflate_1$2.inflateSetDictionary(strm, dictionary);

      if (status === Z_OK) {
        status = inflate_1$2.inflate(strm, _flush_mode);
      } else if (status === Z_DATA_ERROR) {
        // Replace code with more verbose
        status = Z_NEED_DICT;
      }
    }

    // Skip snyc markers if more data follows and not raw mode
    while (strm.avail_in > 0 &&
           status === Z_STREAM_END &&
           strm.state.wrap > 0 &&
           data[strm.next_in] !== 0)
    {
      inflate_1$2.inflateReset(strm);
      status = inflate_1$2.inflate(strm, _flush_mode);
    }

    switch (status) {
      case Z_STREAM_ERROR:
      case Z_DATA_ERROR:
      case Z_NEED_DICT:
      case Z_MEM_ERROR:
        this.onEnd(status);
        this.ended = true;
        return false;
    }

    // Remember real `avail_out` value, because we may patch out buffer content
    // to align utf8 strings boundaries.
    last_avail_out = strm.avail_out;

    if (strm.next_out) {
      if (strm.avail_out === 0 || status === Z_STREAM_END) {

        if (this.options.to === 'string') {

          let next_out_utf8 = strings.utf8border(strm.output, strm.next_out);

          let tail = strm.next_out - next_out_utf8;
          let utf8str = strings.buf2string(strm.output, next_out_utf8);

          // move tail & realign counters
          strm.next_out = tail;
          strm.avail_out = chunkSize - tail;
          if (tail) strm.output.set(strm.output.subarray(next_out_utf8, next_out_utf8 + tail), 0);

          this.onData(utf8str);

        } else {
          this.onData(strm.output.length === strm.next_out ? strm.output : strm.output.subarray(0, strm.next_out));
        }
      }
    }

    // Must repeat iteration if out buffer is full
    if (status === Z_OK && last_avail_out === 0) continue;

    // Finalize if end of stream reached.
    if (status === Z_STREAM_END) {
      status = inflate_1$2.inflateEnd(this.strm);
      this.onEnd(status);
      this.ended = true;
      return true;
    }

    if (strm.avail_in === 0) break;
  }

  return true;
};


/**
 * Inflate#onData(chunk) -> Void
 * - chunk (Uint8Array|String): output data. When string output requested,
 *   each chunk will be string.
 *
 * By default, stores data blocks in `chunks[]` property and glue
 * those in `onEnd`. Override this handler, if you need another behaviour.
 **/
Inflate$1.prototype.onData = function (chunk) {
  this.chunks.push(chunk);
};


/**
 * Inflate#onEnd(status) -> Void
 * - status (Number): inflate status. 0 (Z_OK) on success,
 *   other if not.
 *
 * Called either after you tell inflate that the input stream is
 * complete (Z_FINISH). By default - join collected chunks,
 * free memory and fill `results` / `err` properties.
 **/
Inflate$1.prototype.onEnd = function (status) {
  // On success - join
  if (status === Z_OK) {
    if (this.options.to === 'string') {
      this.result = this.chunks.join('');
    } else {
      this.result = common.flattenChunks(this.chunks);
    }
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};


/**
 * inflate(data[, options]) -> Uint8Array|String
 * - data (Uint8Array|ArrayBuffer): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Decompress `data` with inflate/ungzip and `options`. Autodetect
 * format via wrapper header by default. That's why we don't provide
 * separate `ungzip` method.
 *
 * Supported options are:
 *
 * - windowBits
 *
 * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
 * for more information.
 *
 * Sugar (options):
 *
 * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
 *   negative windowBits implicitly.
 * - `to` (String) - if equal to 'string', then result will be converted
 *   from utf8 to utf16 (javascript) string. When string output requested,
 *   chunk length can differ from `chunkSize`, depending on content.
 *
 *
 * ##### Example:
 *
 * ```javascript
 * const pako = require('pako');
 * const input = pako.deflate(new Uint8Array([1,2,3,4,5,6,7,8,9]));
 * let output;
 *
 * try {
 *   output = pako.inflate(input);
 * } catch (err) {
 *   console.log(err);
 * }
 * ```
 **/
function inflate$1(input, options) {
  const inflator = new Inflate$1(options);

  inflator.push(input);

  // That will never happens, if you don't cheat with options :)
  if (inflator.err) throw inflator.msg || messages[inflator.err];

  return inflator.result;
}


/**
 * inflateRaw(data[, options]) -> Uint8Array|String
 * - data (Uint8Array|ArrayBuffer): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * The same as [[inflate]], but creates raw data, without wrapper
 * (header and adler32 crc).
 **/
function inflateRaw$1(input, options) {
  options = options || {};
  options.raw = true;
  return inflate$1(input, options);
}


/**
 * ungzip(data[, options]) -> Uint8Array|String
 * - data (Uint8Array|ArrayBuffer): input data to decompress.
 * - options (Object): zlib inflate options.
 *
 * Just shortcut to [[inflate]], because it autodetects format
 * by header.content. Done for convenience.
 **/


var Inflate_1$1 = Inflate$1;
var inflate_2 = inflate$1;
var inflateRaw_1$1 = inflateRaw$1;
var ungzip$1 = inflate$1;
var constants = constants$2;

var inflate_1$1 = {
	Inflate: Inflate_1$1,
	inflate: inflate_2,
	inflateRaw: inflateRaw_1$1,
	ungzip: ungzip$1,
	constants: constants
};

const { Deflate, deflate, deflateRaw, gzip } = deflate_1$1;

const { Inflate, inflate, inflateRaw, ungzip } = inflate_1$1;



var Deflate_1 = Deflate;
var deflate_1 = deflate;
var deflateRaw_1 = deflateRaw;
var gzip_1 = gzip;
var Inflate_1 = Inflate;
var inflate_1 = inflate;
var inflateRaw_1 = inflateRaw;
var ungzip_1 = ungzip;
var constants_1 = constants$2;

var pako = {
	Deflate: Deflate_1,
	deflate: deflate_1,
	deflateRaw: deflateRaw_1,
	gzip: gzip_1,
	Inflate: Inflate_1,
	inflate: inflate_1,
	inflateRaw: inflateRaw_1,
	ungzip: ungzip_1,
	constants: constants_1
};

/**
 *  base64.ts
 *
 *  Licensed under the BSD 3-Clause License.
 *    http://opensource.org/licenses/BSD-3-Clause
 *
 *  References:
 *    http://en.wikipedia.org/wiki/Base64
 *
 * @author Dan Kogai (https://github.com/dankogai)
 */
const version = '3.7.5';
/**
 * @deprecated use lowercase `version`.
 */
const VERSION = version;
const _hasatob = typeof atob === 'function';
const _hasbtoa = typeof btoa === 'function';
const _hasBuffer = typeof Buffer === 'function';
const _TD = typeof TextDecoder === 'function' ? new TextDecoder() : undefined;
const _TE = typeof TextEncoder === 'function' ? new TextEncoder() : undefined;
const b64ch = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
const b64chs = Array.prototype.slice.call(b64ch);
const b64tab = ((a) => {
    let tab = {};
    a.forEach((c, i) => tab[c] = i);
    return tab;
})(b64chs);
const b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
const _fromCC = String.fromCharCode.bind(String);
const _U8Afrom = typeof Uint8Array.from === 'function'
    ? Uint8Array.from.bind(Uint8Array)
    : (it) => new Uint8Array(Array.prototype.slice.call(it, 0));
const _mkUriSafe = (src) => src
    .replace(/=/g, '').replace(/[+\/]/g, (m0) => m0 == '+' ? '-' : '_');
const _tidyB64 = (s) => s.replace(/[^A-Za-z0-9\+\/]/g, '');
/**
 * polyfill version of `btoa`
 */
const btoaPolyfill = (bin) => {
    // console.log('polyfilled');
    let u32, c0, c1, c2, asc = '';
    const pad = bin.length % 3;
    for (let i = 0; i < bin.length;) {
        if ((c0 = bin.charCodeAt(i++)) > 255 ||
            (c1 = bin.charCodeAt(i++)) > 255 ||
            (c2 = bin.charCodeAt(i++)) > 255)
            throw new TypeError('invalid character found');
        u32 = (c0 << 16) | (c1 << 8) | c2;
        asc += b64chs[u32 >> 18 & 63]
            + b64chs[u32 >> 12 & 63]
            + b64chs[u32 >> 6 & 63]
            + b64chs[u32 & 63];
    }
    return pad ? asc.slice(0, pad - 3) + "===".substring(pad) : asc;
};
/**
 * does what `window.btoa` of web browsers do.
 * @param {String} bin binary string
 * @returns {string} Base64-encoded string
 */
const _btoa = _hasbtoa ? (bin) => btoa(bin)
    : _hasBuffer ? (bin) => Buffer.from(bin, 'binary').toString('base64')
        : btoaPolyfill;
const _fromUint8Array = _hasBuffer
    ? (u8a) => Buffer.from(u8a).toString('base64')
    : (u8a) => {
        // cf. https://stackoverflow.com/questions/12710001/how-to-convert-uint8-array-to-base64-encoded-string/12713326#12713326
        const maxargs = 0x1000;
        let strs = [];
        for (let i = 0, l = u8a.length; i < l; i += maxargs) {
            strs.push(_fromCC.apply(null, u8a.subarray(i, i + maxargs)));
        }
        return _btoa(strs.join(''));
    };
/**
 * converts a Uint8Array to a Base64 string.
 * @param {boolean} [urlsafe] URL-and-filename-safe a la RFC4648 §5
 * @returns {string} Base64 string
 */
const fromUint8Array = (u8a, urlsafe = false) => urlsafe ? _mkUriSafe(_fromUint8Array(u8a)) : _fromUint8Array(u8a);
// This trick is found broken https://github.com/dankogai/js-base64/issues/130
// const utob = (src: string) => unescape(encodeURIComponent(src));
// reverting good old fationed regexp
const cb_utob = (c) => {
    if (c.length < 2) {
        var cc = c.charCodeAt(0);
        return cc < 0x80 ? c
            : cc < 0x800 ? (_fromCC(0xc0 | (cc >>> 6))
                + _fromCC(0x80 | (cc & 0x3f)))
                : (_fromCC(0xe0 | ((cc >>> 12) & 0x0f))
                    + _fromCC(0x80 | ((cc >>> 6) & 0x3f))
                    + _fromCC(0x80 | (cc & 0x3f)));
    }
    else {
        var cc = 0x10000
            + (c.charCodeAt(0) - 0xD800) * 0x400
            + (c.charCodeAt(1) - 0xDC00);
        return (_fromCC(0xf0 | ((cc >>> 18) & 0x07))
            + _fromCC(0x80 | ((cc >>> 12) & 0x3f))
            + _fromCC(0x80 | ((cc >>> 6) & 0x3f))
            + _fromCC(0x80 | (cc & 0x3f)));
    }
};
const re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
/**
 * @deprecated should have been internal use only.
 * @param {string} src UTF-8 string
 * @returns {string} UTF-16 string
 */
const utob = (u) => u.replace(re_utob, cb_utob);
//
const _encode = _hasBuffer
    ? (s) => Buffer.from(s, 'utf8').toString('base64')
    : _TE
        ? (s) => _fromUint8Array(_TE.encode(s))
        : (s) => _btoa(utob(s));
/**
 * converts a UTF-8-encoded string to a Base64 string.
 * @param {boolean} [urlsafe] if `true` make the result URL-safe
 * @returns {string} Base64 string
 */
const encode$1 = (src, urlsafe = false) => urlsafe
    ? _mkUriSafe(_encode(src))
    : _encode(src);
/**
 * converts a UTF-8-encoded string to URL-safe Base64 RFC4648 §5.
 * @returns {string} Base64 string
 */
const encodeURI = (src) => encode$1(src, true);
// This trick is found broken https://github.com/dankogai/js-base64/issues/130
// const btou = (src: string) => decodeURIComponent(escape(src));
// reverting good old fationed regexp
const re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
const cb_btou = (cccc) => {
    switch (cccc.length) {
        case 4:
            var cp = ((0x07 & cccc.charCodeAt(0)) << 18)
                | ((0x3f & cccc.charCodeAt(1)) << 12)
                | ((0x3f & cccc.charCodeAt(2)) << 6)
                | (0x3f & cccc.charCodeAt(3)), offset = cp - 0x10000;
            return (_fromCC((offset >>> 10) + 0xD800)
                + _fromCC((offset & 0x3FF) + 0xDC00));
        case 3:
            return _fromCC(((0x0f & cccc.charCodeAt(0)) << 12)
                | ((0x3f & cccc.charCodeAt(1)) << 6)
                | (0x3f & cccc.charCodeAt(2)));
        default:
            return _fromCC(((0x1f & cccc.charCodeAt(0)) << 6)
                | (0x3f & cccc.charCodeAt(1)));
    }
};
/**
 * @deprecated should have been internal use only.
 * @param {string} src UTF-16 string
 * @returns {string} UTF-8 string
 */
const btou = (b) => b.replace(re_btou, cb_btou);
/**
 * polyfill version of `atob`
 */
const atobPolyfill = (asc) => {
    // console.log('polyfilled');
    asc = asc.replace(/\s+/g, '');
    if (!b64re.test(asc))
        throw new TypeError('malformed base64.');
    asc += '=='.slice(2 - (asc.length & 3));
    let u24, bin = '', r1, r2;
    for (let i = 0; i < asc.length;) {
        u24 = b64tab[asc.charAt(i++)] << 18
            | b64tab[asc.charAt(i++)] << 12
            | (r1 = b64tab[asc.charAt(i++)]) << 6
            | (r2 = b64tab[asc.charAt(i++)]);
        bin += r1 === 64 ? _fromCC(u24 >> 16 & 255)
            : r2 === 64 ? _fromCC(u24 >> 16 & 255, u24 >> 8 & 255)
                : _fromCC(u24 >> 16 & 255, u24 >> 8 & 255, u24 & 255);
    }
    return bin;
};
/**
 * does what `window.atob` of web browsers do.
 * @param {String} asc Base64-encoded string
 * @returns {string} binary string
 */
const _atob = _hasatob ? (asc) => atob(_tidyB64(asc))
    : _hasBuffer ? (asc) => Buffer.from(asc, 'base64').toString('binary')
        : atobPolyfill;
//
const _toUint8Array = _hasBuffer
    ? (a) => _U8Afrom(Buffer.from(a, 'base64'))
    : (a) => _U8Afrom(_atob(a).split('').map(c => c.charCodeAt(0)));
/**
 * converts a Base64 string to a Uint8Array.
 */
const toUint8Array = (a) => _toUint8Array(_unURI(a));
//
const _decode = _hasBuffer
    ? (a) => Buffer.from(a, 'base64').toString('utf8')
    : _TD
        ? (a) => _TD.decode(_toUint8Array(a))
        : (a) => btou(_atob(a));
const _unURI = (a) => _tidyB64(a.replace(/[-_]/g, (m0) => m0 == '-' ? '+' : '/'));
/**
 * converts a Base64 string to a UTF-8 string.
 * @param {String} src Base64 string.  Both normal and URL-safe are supported
 * @returns {string} UTF-8 string
 */
const decode = (src) => _decode(_unURI(src));
/**
 * check if a value is a valid Base64 string
 * @param {String} src a value to check
  */
const isValid = (src) => {
    if (typeof src !== 'string')
        return false;
    const s = src.replace(/\s+/g, '').replace(/={0,2}$/, '');
    return !/[^\s0-9a-zA-Z\+/]/.test(s) || !/[^\s0-9a-zA-Z\-_]/.test(s);
};
//
const _noEnum = (v) => {
    return {
        value: v, enumerable: false, writable: true, configurable: true
    };
};
/**
 * extend String.prototype with relevant methods
 */
const extendString = function () {
    const _add = (name, body) => Object.defineProperty(String.prototype, name, _noEnum(body));
    _add('fromBase64', function () { return decode(this); });
    _add('toBase64', function (urlsafe) { return encode$1(this, urlsafe); });
    _add('toBase64URI', function () { return encode$1(this, true); });
    _add('toBase64URL', function () { return encode$1(this, true); });
    _add('toUint8Array', function () { return toUint8Array(this); });
};
/**
 * extend Uint8Array.prototype with relevant methods
 */
const extendUint8Array = function () {
    const _add = (name, body) => Object.defineProperty(Uint8Array.prototype, name, _noEnum(body));
    _add('toBase64', function (urlsafe) { return fromUint8Array(this, urlsafe); });
    _add('toBase64URI', function () { return fromUint8Array(this, true); });
    _add('toBase64URL', function () { return fromUint8Array(this, true); });
};
/**
 * extend Builtin prototypes with relevant methods
 */
const extendBuiltins = () => {
    extendString();
    extendUint8Array();
};
const gBase64 = {
    version: version,
    VERSION: VERSION,
    atob: _atob,
    atobPolyfill: atobPolyfill,
    btoa: _btoa,
    btoaPolyfill: btoaPolyfill,
    fromBase64: decode,
    toBase64: encode$1,
    encode: encode$1,
    encodeURI: encodeURI,
    encodeURL: encodeURI,
    utob: utob,
    btou: btou,
    decode: decode,
    isValid: isValid,
    fromUint8Array: fromUint8Array,
    toUint8Array: toUint8Array,
    extendString: extendString,
    extendUint8Array: extendUint8Array,
    extendBuiltins: extendBuiltins,
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var uaParserExports = {};
var uaParser = {
  get exports(){ return uaParserExports; },
  set exports(v){ uaParserExports = v; },
};

(function (module, exports) {
	/////////////////////////////////////////////////////////////////////////////////
	/* UAParser.js v1.0.32
	   Copyright © 2012-2021 Faisal Salman <f@faisalman.com>
	   MIT License *//*
	   Detect Browser, Engine, OS, CPU, and Device type/model from User-Agent data.
	   Supports browser & node.js environment. 
	   Demo   : https://faisalman.github.io/ua-parser-js
	   Source : https://github.com/faisalman/ua-parser-js */
	/////////////////////////////////////////////////////////////////////////////////

	(function (window, undefined$1) {

	    //////////////
	    // Constants
	    /////////////


	    var LIBVERSION  = '1.0.32',
	        EMPTY       = '',
	        UNKNOWN     = '?',
	        FUNC_TYPE   = 'function',
	        UNDEF_TYPE  = 'undefined',
	        OBJ_TYPE    = 'object',
	        STR_TYPE    = 'string',
	        MAJOR       = 'major',
	        MODEL       = 'model',
	        NAME        = 'name',
	        TYPE        = 'type',
	        VENDOR      = 'vendor',
	        VERSION     = 'version',
	        ARCHITECTURE= 'architecture',
	        CONSOLE     = 'console',
	        MOBILE      = 'mobile',
	        TABLET      = 'tablet',
	        SMARTTV     = 'smarttv',
	        WEARABLE    = 'wearable',
	        EMBEDDED    = 'embedded',
	        UA_MAX_LENGTH = 350;

	    var AMAZON  = 'Amazon',
	        APPLE   = 'Apple',
	        ASUS    = 'ASUS',
	        BLACKBERRY = 'BlackBerry',
	        BROWSER = 'Browser',
	        CHROME  = 'Chrome',
	        EDGE    = 'Edge',
	        FIREFOX = 'Firefox',
	        GOOGLE  = 'Google',
	        HUAWEI  = 'Huawei',
	        LG      = 'LG',
	        MICROSOFT = 'Microsoft',
	        MOTOROLA  = 'Motorola',
	        OPERA   = 'Opera',
	        SAMSUNG = 'Samsung',
	        SHARP   = 'Sharp',
	        SONY    = 'Sony',
	        XIAOMI  = 'Xiaomi',
	        ZEBRA   = 'Zebra',
	        FACEBOOK   = 'Facebook';

	    ///////////
	    // Helper
	    //////////

	    var extend = function (regexes, extensions) {
	            var mergedRegexes = {};
	            for (var i in regexes) {
	                if (extensions[i] && extensions[i].length % 2 === 0) {
	                    mergedRegexes[i] = extensions[i].concat(regexes[i]);
	                } else {
	                    mergedRegexes[i] = regexes[i];
	                }
	            }
	            return mergedRegexes;
	        },
	        enumerize = function (arr) {
	            var enums = {};
	            for (var i=0; i<arr.length; i++) {
	                enums[arr[i].toUpperCase()] = arr[i];
	            }
	            return enums;
	        },
	        has = function (str1, str2) {
	            return typeof str1 === STR_TYPE ? lowerize(str2).indexOf(lowerize(str1)) !== -1 : false;
	        },
	        lowerize = function (str) {
	            return str.toLowerCase();
	        },
	        majorize = function (version) {
	            return typeof(version) === STR_TYPE ? version.replace(/[^\d\.]/g, EMPTY).split('.')[0] : undefined$1;
	        },
	        trim = function (str, len) {
	            if (typeof(str) === STR_TYPE) {
	                str = str.replace(/^\s\s*/, EMPTY).replace(/\s\s*$/, EMPTY);
	                return typeof(len) === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH);
	            }
	    };

	    ///////////////
	    // Map helper
	    //////////////

	    var rgxMapper = function (ua, arrays) {

	            var i = 0, j, k, p, q, matches, match;

	            // loop through all regexes maps
	            while (i < arrays.length && !matches) {

	                var regex = arrays[i],       // even sequence (0,2,4,..)
	                    props = arrays[i + 1];   // odd sequence (1,3,5,..)
	                j = k = 0;

	                // try matching uastring with regexes
	                while (j < regex.length && !matches) {

	                    matches = regex[j++].exec(ua);

	                    if (!!matches) {
	                        for (p = 0; p < props.length; p++) {
	                            match = matches[++k];
	                            q = props[p];
	                            // check if given property is actually array
	                            if (typeof q === OBJ_TYPE && q.length > 0) {
	                                if (q.length === 2) {
	                                    if (typeof q[1] == FUNC_TYPE) {
	                                        // assign modified match
	                                        this[q[0]] = q[1].call(this, match);
	                                    } else {
	                                        // assign given value, ignore regex match
	                                        this[q[0]] = q[1];
	                                    }
	                                } else if (q.length === 3) {
	                                    // check whether function or regex
	                                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
	                                        // call function (usually string mapper)
	                                        this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined$1;
	                                    } else {
	                                        // sanitize match using given regex
	                                        this[q[0]] = match ? match.replace(q[1], q[2]) : undefined$1;
	                                    }
	                                } else if (q.length === 4) {
	                                        this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined$1;
	                                }
	                            } else {
	                                this[q] = match ? match : undefined$1;
	                            }
	                        }
	                    }
	                }
	                i += 2;
	            }
	        },

	        strMapper = function (str, map) {

	            for (var i in map) {
	                // check if current value is array
	                if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
	                    for (var j = 0; j < map[i].length; j++) {
	                        if (has(map[i][j], str)) {
	                            return (i === UNKNOWN) ? undefined$1 : i;
	                        }
	                    }
	                } else if (has(map[i], str)) {
	                    return (i === UNKNOWN) ? undefined$1 : i;
	                }
	            }
	            return str;
	    };

	    ///////////////
	    // String map
	    //////////////

	    // Safari < 3.0
	    var oldSafariMap = {
	            '1.0'   : '/8',
	            '1.2'   : '/1',
	            '1.3'   : '/3',
	            '2.0'   : '/412',
	            '2.0.2' : '/416',
	            '2.0.3' : '/417',
	            '2.0.4' : '/419',
	            '?'     : '/'
	        },
	        windowsVersionMap = {
	            'ME'        : '4.90',
	            'NT 3.11'   : 'NT3.51',
	            'NT 4.0'    : 'NT4.0',
	            '2000'      : 'NT 5.0',
	            'XP'        : ['NT 5.1', 'NT 5.2'],
	            'Vista'     : 'NT 6.0',
	            '7'         : 'NT 6.1',
	            '8'         : 'NT 6.2',
	            '8.1'       : 'NT 6.3',
	            '10'        : ['NT 6.4', 'NT 10.0'],
	            'RT'        : 'ARM'
	    };

	    //////////////
	    // Regex map
	    /////////////

	    var regexes = {

	        browser : [[

	            /\b(?:crmo|crios)\/([\w\.]+)/i                                      // Chrome for Android/iOS
	            ], [VERSION, [NAME, 'Chrome']], [
	            /edg(?:e|ios|a)?\/([\w\.]+)/i                                       // Microsoft Edge
	            ], [VERSION, [NAME, 'Edge']], [

	            // Presto based
	            /(opera mini)\/([-\w\.]+)/i,                                        // Opera Mini
	            /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,                 // Opera Mobi/Tablet
	            /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i                           // Opera
	            ], [NAME, VERSION], [
	            /opios[\/ ]+([\w\.]+)/i                                             // Opera mini on iphone >= 8.0
	            ], [VERSION, [NAME, OPERA+' Mini']], [
	            /\bopr\/([\w\.]+)/i                                                 // Opera Webkit
	            ], [VERSION, [NAME, OPERA]], [

	            // Mixed
	            /(kindle)\/([\w\.]+)/i,                                             // Kindle
	            /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,      // Lunascape/Maxthon/Netfront/Jasmine/Blazer
	            // Trident based
	            /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,               // Avant/IEMobile/SlimBrowser
	            /(ba?idubrowser)[\/ ]?([\w\.]+)/i,                                  // Baidu Browser
	            /(?:ms|\()(ie) ([\w\.]+)/i,                                         // Internet Explorer

	            // Webkit/KHTML based                                               // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
	            /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
	                                                                                // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ, aka ShouQ
	            /(weibo)__([\d\.]+)/i                                               // Weibo
	            ], [NAME, VERSION], [
	            /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i                 // UCBrowser
	            ], [VERSION, [NAME, 'UC'+BROWSER]], [
	            /microm.+\bqbcore\/([\w\.]+)/i,                                     // WeChat Desktop for Windows Built-in Browser
	            /\bqbcore\/([\w\.]+).+microm/i
	            ], [VERSION, [NAME, 'WeChat(Win) Desktop']], [
	            /micromessenger\/([\w\.]+)/i                                        // WeChat
	            ], [VERSION, [NAME, 'WeChat']], [
	            /konqueror\/([\w\.]+)/i                                             // Konqueror
	            ], [VERSION, [NAME, 'Konqueror']], [
	            /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i                       // IE11
	            ], [VERSION, [NAME, 'IE']], [
	            /yabrowser\/([\w\.]+)/i                                             // Yandex
	            ], [VERSION, [NAME, 'Yandex']], [
	            /(avast|avg)\/([\w\.]+)/i                                           // Avast/AVG Secure Browser
	            ], [[NAME, /(.+)/, '$1 Secure '+BROWSER], VERSION], [
	            /\bfocus\/([\w\.]+)/i                                               // Firefox Focus
	            ], [VERSION, [NAME, FIREFOX+' Focus']], [
	            /\bopt\/([\w\.]+)/i                                                 // Opera Touch
	            ], [VERSION, [NAME, OPERA+' Touch']], [
	            /coc_coc\w+\/([\w\.]+)/i                                            // Coc Coc Browser
	            ], [VERSION, [NAME, 'Coc Coc']], [
	            /dolfin\/([\w\.]+)/i                                                // Dolphin
	            ], [VERSION, [NAME, 'Dolphin']], [
	            /coast\/([\w\.]+)/i                                                 // Opera Coast
	            ], [VERSION, [NAME, OPERA+' Coast']], [
	            /miuibrowser\/([\w\.]+)/i                                           // MIUI Browser
	            ], [VERSION, [NAME, 'MIUI '+BROWSER]], [
	            /fxios\/([-\w\.]+)/i                                                // Firefox for iOS
	            ], [VERSION, [NAME, FIREFOX]], [
	            /\bqihu|(qi?ho?o?|360)browser/i                                     // 360
	            ], [[NAME, '360 '+BROWSER]], [
	            /(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i
	            ], [[NAME, /(.+)/, '$1 '+BROWSER], VERSION], [                      // Oculus/Samsung/Sailfish/Huawei Browser
	            /(comodo_dragon)\/([\w\.]+)/i                                       // Comodo Dragon
	            ], [[NAME, /_/g, ' '], VERSION], [
	            /(electron)\/([\w\.]+) safari/i,                                    // Electron-based App
	            /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,                   // Tesla
	            /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i            // QQBrowser/Baidu App/2345 Browser
	            ], [NAME, VERSION], [
	            /(metasr)[\/ ]?([\w\.]+)/i,                                         // SouGouBrowser
	            /(lbbrowser)/i,                                                     // LieBao Browser
	            /\[(linkedin)app\]/i                                                // LinkedIn App for iOS & Android
	            ], [NAME], [

	            // WebView
	            /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i       // Facebook App for iOS & Android
	            ], [[NAME, FACEBOOK], VERSION], [
	            /safari (line)\/([\w\.]+)/i,                                        // Line App for iOS
	            /\b(line)\/([\w\.]+)\/iab/i,                                        // Line App for Android
	            /(chromium|instagram)[\/ ]([-\w\.]+)/i                              // Chromium/Instagram
	            ], [NAME, VERSION], [
	            /\bgsa\/([\w\.]+) .*safari\//i                                      // Google Search Appliance on iOS
	            ], [VERSION, [NAME, 'GSA']], [

	            /headlesschrome(?:\/([\w\.]+)| )/i                                  // Chrome Headless
	            ], [VERSION, [NAME, CHROME+' Headless']], [

	            / wv\).+(chrome)\/([\w\.]+)/i                                       // Chrome WebView
	            ], [[NAME, CHROME+' WebView'], VERSION], [

	            /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i           // Android Browser
	            ], [VERSION, [NAME, 'Android '+BROWSER]], [

	            /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i       // Chrome/OmniWeb/Arora/Tizen/Nokia
	            ], [NAME, VERSION], [

	            /version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i                      // Mobile Safari
	            ], [VERSION, [NAME, 'Mobile Safari']], [
	            /version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i                // Safari & Safari Mobile
	            ], [VERSION, NAME], [
	            /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i                      // Safari < 3.0
	            ], [NAME, [VERSION, strMapper, oldSafariMap]], [

	            /(webkit|khtml)\/([\w\.]+)/i
	            ], [NAME, VERSION], [

	            // Gecko based
	            /(navigator|netscape\d?)\/([-\w\.]+)/i                              // Netscape
	            ], [[NAME, 'Netscape'], VERSION], [
	            /mobile vr; rv:([\w\.]+)\).+firefox/i                               // Firefox Reality
	            ], [VERSION, [NAME, FIREFOX+' Reality']], [
	            /ekiohf.+(flow)\/([\w\.]+)/i,                                       // Flow
	            /(swiftfox)/i,                                                      // Swiftfox
	            /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
	                                                                                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror/Klar
	            /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
	                                                                                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
	            /(firefox)\/([\w\.]+)/i,                                            // Other Firefox-based
	            /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,                         // Mozilla

	            // Other
	            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
	                                                                                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir/Obigo/Mosaic/Go/ICE/UP.Browser
	            /(links) \(([\w\.]+)/i                                              // Links
	            ], [NAME, VERSION]
	        ],

	        cpu : [[

	            /(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i                     // AMD64 (x64)
	            ], [[ARCHITECTURE, 'amd64']], [

	            /(ia32(?=;))/i                                                      // IA32 (quicktime)
	            ], [[ARCHITECTURE, lowerize]], [

	            /((?:i[346]|x)86)[;\)]/i                                            // IA32 (x86)
	            ], [[ARCHITECTURE, 'ia32']], [

	            /\b(aarch64|arm(v?8e?l?|_?64))\b/i                                 // ARM64
	            ], [[ARCHITECTURE, 'arm64']], [

	            /\b(arm(?:v[67])?ht?n?[fl]p?)\b/i                                   // ARMHF
	            ], [[ARCHITECTURE, 'armhf']], [

	            // PocketPC mistakenly identified as PowerPC
	            /windows (ce|mobile); ppc;/i
	            ], [[ARCHITECTURE, 'arm']], [

	            /((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i                            // PowerPC
	            ], [[ARCHITECTURE, /ower/, EMPTY, lowerize]], [

	            /(sun4\w)[;\)]/i                                                    // SPARC
	            ], [[ARCHITECTURE, 'sparc']], [

	            /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
	                                                                                // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
	            ], [[ARCHITECTURE, lowerize]]
	        ],

	        device : [[

	            //////////////////////////
	            // MOBILES & TABLETS
	            // Ordered by popularity
	            /////////////////////////

	            // Samsung
	            /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
	            ], [MODEL, [VENDOR, SAMSUNG], [TYPE, TABLET]], [
	            /\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,
	            /samsung[- ]([-\w]+)/i,
	            /sec-(sgh\w+)/i
	            ], [MODEL, [VENDOR, SAMSUNG], [TYPE, MOBILE]], [

	            // Apple
	            /\((ip(?:hone|od)[\w ]*);/i                                         // iPod/iPhone
	            ], [MODEL, [VENDOR, APPLE], [TYPE, MOBILE]], [
	            /\((ipad);[-\w\),; ]+apple/i,                                       // iPad
	            /applecoremedia\/[\w\.]+ \((ipad)/i,
	            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
	            ], [MODEL, [VENDOR, APPLE], [TYPE, TABLET]], [

	            // Huawei
	            /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i
	            ], [MODEL, [VENDOR, HUAWEI], [TYPE, TABLET]], [
	            /(?:huawei|honor)([-\w ]+)[;\)]/i,
	            /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
	            ], [MODEL, [VENDOR, HUAWEI], [TYPE, MOBILE]], [

	            // Xiaomi
	            /\b(poco[\w ]+)(?: bui|\))/i,                                       // Xiaomi POCO
	            /\b; (\w+) build\/hm\1/i,                                           // Xiaomi Hongmi 'numeric' models
	            /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,                             // Xiaomi Hongmi
	            /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,                   // Xiaomi Redmi
	            /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i // Xiaomi Mi
	            ], [[MODEL, /_/g, ' '], [VENDOR, XIAOMI], [TYPE, MOBILE]], [
	            /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i                        // Mi Pad tablets
	            ],[[MODEL, /_/g, ' '], [VENDOR, XIAOMI], [TYPE, TABLET]], [

	            // OPPO
	            /; (\w+) bui.+ oppo/i,
	            /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
	            ], [MODEL, [VENDOR, 'OPPO'], [TYPE, MOBILE]], [

	            // Vivo
	            /vivo (\w+)(?: bui|\))/i,
	            /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
	            ], [MODEL, [VENDOR, 'Vivo'], [TYPE, MOBILE]], [

	            // Realme
	            /\b(rmx[12]\d{3})(?: bui|;|\))/i
	            ], [MODEL, [VENDOR, 'Realme'], [TYPE, MOBILE]], [

	            // Motorola
	            /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
	            /\bmot(?:orola)?[- ](\w*)/i,
	            /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
	            ], [MODEL, [VENDOR, MOTOROLA], [TYPE, MOBILE]], [
	            /\b(mz60\d|xoom[2 ]{0,2}) build\//i
	            ], [MODEL, [VENDOR, MOTOROLA], [TYPE, TABLET]], [

	            // LG
	            /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
	            ], [MODEL, [VENDOR, LG], [TYPE, TABLET]], [
	            /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
	            /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
	            /\blg-?([\d\w]+) bui/i
	            ], [MODEL, [VENDOR, LG], [TYPE, MOBILE]], [

	            // Lenovo
	            /(ideatab[-\w ]+)/i,
	            /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
	            ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [

	            // Nokia
	            /(?:maemo|nokia).*(n900|lumia \d+)/i,
	            /nokia[-_ ]?([-\w\.]*)/i
	            ], [[MODEL, /_/g, ' '], [VENDOR, 'Nokia'], [TYPE, MOBILE]], [

	            // Google
	            /(pixel c)\b/i                                                      // Google Pixel C
	            ], [MODEL, [VENDOR, GOOGLE], [TYPE, TABLET]], [
	            /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i                         // Google Pixel
	            ], [MODEL, [VENDOR, GOOGLE], [TYPE, MOBILE]], [

	            // Sony
	            /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
	            ], [MODEL, [VENDOR, SONY], [TYPE, MOBILE]], [
	            /sony tablet [ps]/i,
	            /\b(?:sony)?sgp\w+(?: bui|\))/i
	            ], [[MODEL, 'Xperia Tablet'], [VENDOR, SONY], [TYPE, TABLET]], [

	            // OnePlus
	            / (kb2005|in20[12]5|be20[12][59])\b/i,
	            /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
	            ], [MODEL, [VENDOR, 'OnePlus'], [TYPE, MOBILE]], [

	            // Amazon
	            /(alexa)webm/i,
	            /(kf[a-z]{2}wi)( bui|\))/i,                                         // Kindle Fire without Silk
	            /(kf[a-z]+)( bui|\)).+silk\//i                                      // Kindle Fire HD
	            ], [MODEL, [VENDOR, AMAZON], [TYPE, TABLET]], [
	            /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i                     // Fire Phone
	            ], [[MODEL, /(.+)/g, 'Fire Phone $1'], [VENDOR, AMAZON], [TYPE, MOBILE]], [

	            // BlackBerry
	            /(playbook);[-\w\),; ]+(rim)/i                                      // BlackBerry PlayBook
	            ], [MODEL, VENDOR, [TYPE, TABLET]], [
	            /\b((?:bb[a-f]|st[hv])100-\d)/i,
	            /\(bb10; (\w+)/i                                                    // BlackBerry 10
	            ], [MODEL, [VENDOR, BLACKBERRY], [TYPE, MOBILE]], [

	            // Asus
	            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
	            ], [MODEL, [VENDOR, ASUS], [TYPE, TABLET]], [
	            / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
	            ], [MODEL, [VENDOR, ASUS], [TYPE, MOBILE]], [

	            // HTC
	            /(nexus 9)/i                                                        // HTC Nexus 9
	            ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [
	            /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,                         // HTC

	            // ZTE
	            /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
	            /(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i         // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
	            ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [

	            // Acer
	            /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
	            ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [

	            // Meizu
	            /droid.+; (m[1-5] note) bui/i,
	            /\bmz-([-\w]{2,})/i
	            ], [MODEL, [VENDOR, 'Meizu'], [TYPE, MOBILE]], [

	            // Sharp
	            /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
	            ], [MODEL, [VENDOR, SHARP], [TYPE, MOBILE]], [

	            // MIXED
	            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
	                                                                                // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
	            /(hp) ([\w ]+\w)/i,                                                 // HP iPAQ
	            /(asus)-?(\w+)/i,                                                   // Asus
	            /(microsoft); (lumia[\w ]+)/i,                                      // Microsoft Lumia
	            /(lenovo)[-_ ]?([-\w]+)/i,                                          // Lenovo
	            /(jolla)/i,                                                         // Jolla
	            /(oppo) ?([\w ]+) bui/i                                             // OPPO
	            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

	            /(archos) (gamepad2?)/i,                                            // Archos
	            /(hp).+(touchpad(?!.+tablet)|tablet)/i,                             // HP TouchPad
	            /(kindle)\/([\w\.]+)/i,                                             // Kindle
	            /(nook)[\w ]+build\/(\w+)/i,                                        // Nook
	            /(dell) (strea[kpr\d ]*[\dko])/i,                                   // Dell Streak
	            /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,                                  // Le Pan Tablets
	            /(trinity)[- ]*(t\d{3}) bui/i,                                      // Trinity Tablets
	            /(gigaset)[- ]+(q\w{1,9}) bui/i,                                    // Gigaset Tablets
	            /(vodafone) ([\w ]+)(?:\)| bui)/i                                   // Vodafone
	            ], [VENDOR, MODEL, [TYPE, TABLET]], [

	            /(surface duo)/i                                                    // Surface Duo
	            ], [MODEL, [VENDOR, MICROSOFT], [TYPE, TABLET]], [
	            /droid [\d\.]+; (fp\du?)(?: b|\))/i                                 // Fairphone
	            ], [MODEL, [VENDOR, 'Fairphone'], [TYPE, MOBILE]], [
	            /(u304aa)/i                                                         // AT&T
	            ], [MODEL, [VENDOR, 'AT&T'], [TYPE, MOBILE]], [
	            /\bsie-(\w*)/i                                                      // Siemens
	            ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [
	            /\b(rct\w+) b/i                                                     // RCA Tablets
	            ], [MODEL, [VENDOR, 'RCA'], [TYPE, TABLET]], [
	            /\b(venue[\d ]{2,7}) b/i                                            // Dell Venue Tablets
	            ], [MODEL, [VENDOR, 'Dell'], [TYPE, TABLET]], [
	            /\b(q(?:mv|ta)\w+) b/i                                              // Verizon Tablet
	            ], [MODEL, [VENDOR, 'Verizon'], [TYPE, TABLET]], [
	            /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i                       // Barnes & Noble Tablet
	            ], [MODEL, [VENDOR, 'Barnes & Noble'], [TYPE, TABLET]], [
	            /\b(tm\d{3}\w+) b/i
	            ], [MODEL, [VENDOR, 'NuVision'], [TYPE, TABLET]], [
	            /\b(k88) b/i                                                        // ZTE K Series Tablet
	            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, TABLET]], [
	            /\b(nx\d{3}j) b/i                                                   // ZTE Nubia
	            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, MOBILE]], [
	            /\b(gen\d{3}) b.+49h/i                                              // Swiss GEN Mobile
	            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, MOBILE]], [
	            /\b(zur\d{3}) b/i                                                   // Swiss ZUR Tablet
	            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, TABLET]], [
	            /\b((zeki)?tb.*\b) b/i                                              // Zeki Tablets
	            ], [MODEL, [VENDOR, 'Zeki'], [TYPE, TABLET]], [
	            /\b([yr]\d{2}) b/i,
	            /\b(dragon[- ]+touch |dt)(\w{5}) b/i                                // Dragon Touch Tablet
	            ], [[VENDOR, 'Dragon Touch'], MODEL, [TYPE, TABLET]], [
	            /\b(ns-?\w{0,9}) b/i                                                // Insignia Tablets
	            ], [MODEL, [VENDOR, 'Insignia'], [TYPE, TABLET]], [
	            /\b((nxa|next)-?\w{0,9}) b/i                                        // NextBook Tablets
	            ], [MODEL, [VENDOR, 'NextBook'], [TYPE, TABLET]], [
	            /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i                  // Voice Xtreme Phones
	            ], [[VENDOR, 'Voice'], MODEL, [TYPE, MOBILE]], [
	            /\b(lvtel\-)?(v1[12]) b/i                                           // LvTel Phones
	            ], [[VENDOR, 'LvTel'], MODEL, [TYPE, MOBILE]], [
	            /\b(ph-1) /i                                                        // Essential PH-1
	            ], [MODEL, [VENDOR, 'Essential'], [TYPE, MOBILE]], [
	            /\b(v(100md|700na|7011|917g).*\b) b/i                               // Envizen Tablets
	            ], [MODEL, [VENDOR, 'Envizen'], [TYPE, TABLET]], [
	            /\b(trio[-\w\. ]+) b/i                                              // MachSpeed Tablets
	            ], [MODEL, [VENDOR, 'MachSpeed'], [TYPE, TABLET]], [
	            /\btu_(1491) b/i                                                    // Rotor Tablets
	            ], [MODEL, [VENDOR, 'Rotor'], [TYPE, TABLET]], [
	            /(shield[\w ]+) b/i                                                 // Nvidia Shield Tablets
	            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, TABLET]], [
	            /(sprint) (\w+)/i                                                   // Sprint Phones
	            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
	            /(kin\.[onetw]{3})/i                                                // Microsoft Kin
	            ], [[MODEL, /\./g, ' '], [VENDOR, MICROSOFT], [TYPE, MOBILE]], [
	            /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i             // Zebra
	            ], [MODEL, [VENDOR, ZEBRA], [TYPE, TABLET]], [
	            /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
	            ], [MODEL, [VENDOR, ZEBRA], [TYPE, MOBILE]], [

	            ///////////////////
	            // CONSOLES
	            ///////////////////

	            /(ouya)/i,                                                          // Ouya
	            /(nintendo) ([wids3utch]+)/i                                        // Nintendo
	            ], [VENDOR, MODEL, [TYPE, CONSOLE]], [
	            /droid.+; (shield) bui/i                                            // Nvidia
	            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [
	            /(playstation [345portablevi]+)/i                                   // Playstation
	            ], [MODEL, [VENDOR, SONY], [TYPE, CONSOLE]], [
	            /\b(xbox(?: one)?(?!; xbox))[\); ]/i                                // Microsoft Xbox
	            ], [MODEL, [VENDOR, MICROSOFT], [TYPE, CONSOLE]], [

	            ///////////////////
	            // SMARTTVS
	            ///////////////////

	            /smart-tv.+(samsung)/i                                              // Samsung
	            ], [VENDOR, [TYPE, SMARTTV]], [
	            /hbbtv.+maple;(\d+)/i
	            ], [[MODEL, /^/, 'SmartTV'], [VENDOR, SAMSUNG], [TYPE, SMARTTV]], [
	            /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i        // LG SmartTV
	            ], [[VENDOR, LG], [TYPE, SMARTTV]], [
	            /(apple) ?tv/i                                                      // Apple TV
	            ], [VENDOR, [MODEL, APPLE+' TV'], [TYPE, SMARTTV]], [
	            /crkey/i                                                            // Google Chromecast
	            ], [[MODEL, CHROME+'cast'], [VENDOR, GOOGLE], [TYPE, SMARTTV]], [
	            /droid.+aft(\w)( bui|\))/i                                          // Fire TV
	            ], [MODEL, [VENDOR, AMAZON], [TYPE, SMARTTV]], [
	            /\(dtv[\);].+(aquos)/i,
	            /(aquos-tv[\w ]+)\)/i                                               // Sharp
	            ], [MODEL, [VENDOR, SHARP], [TYPE, SMARTTV]],[
	            /(bravia[\w ]+)( bui|\))/i                                              // Sony
	            ], [MODEL, [VENDOR, SONY], [TYPE, SMARTTV]], [
	            /(mitv-\w{5}) bui/i                                                 // Xiaomi
	            ], [MODEL, [VENDOR, XIAOMI], [TYPE, SMARTTV]], [
	            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,                          // Roku
	            /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i               // HbbTV devices
	            ], [[VENDOR, trim], [MODEL, trim], [TYPE, SMARTTV]], [
	            /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i                   // SmartTV from Unidentified Vendors
	            ], [[TYPE, SMARTTV]], [

	            ///////////////////
	            // WEARABLES
	            ///////////////////

	            /((pebble))app/i                                                    // Pebble
	            ], [VENDOR, MODEL, [TYPE, WEARABLE]], [
	            /droid.+; (glass) \d/i                                              // Google Glass
	            ], [MODEL, [VENDOR, GOOGLE], [TYPE, WEARABLE]], [
	            /droid.+; (wt63?0{2,3})\)/i
	            ], [MODEL, [VENDOR, ZEBRA], [TYPE, WEARABLE]], [
	            /(quest( 2)?)/i                                                     // Oculus Quest
	            ], [MODEL, [VENDOR, FACEBOOK], [TYPE, WEARABLE]], [

	            ///////////////////
	            // EMBEDDED
	            ///////////////////

	            /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i                              // Tesla
	            ], [VENDOR, [TYPE, EMBEDDED]], [

	            ////////////////////
	            // MIXED (GENERIC)
	            ///////////////////

	            /droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i           // Android Phones from Unidentified Vendors
	            ], [MODEL, [TYPE, MOBILE]], [
	            /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i       // Android Tablets from Unidentified Vendors
	            ], [MODEL, [TYPE, TABLET]], [
	            /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i                      // Unidentifiable Tablet
	            ], [[TYPE, TABLET]], [
	            /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i    // Unidentifiable Mobile
	            ], [[TYPE, MOBILE]], [
	            /(android[-\w\. ]{0,9});.+buil/i                                    // Generic Android Device
	            ], [MODEL, [VENDOR, 'Generic']]
	        ],

	        engine : [[

	            /windows.+ edge\/([\w\.]+)/i                                       // EdgeHTML
	            ], [VERSION, [NAME, EDGE+'HTML']], [

	            /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i                         // Blink
	            ], [VERSION, [NAME, 'Blink']], [

	            /(presto)\/([\w\.]+)/i,                                             // Presto
	            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna
	            /ekioh(flow)\/([\w\.]+)/i,                                          // Flow
	            /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,                           // KHTML/Tasman/Links
	            /(icab)[\/ ]([23]\.[\d\.]+)/i                                       // iCab
	            ], [NAME, VERSION], [

	            /rv\:([\w\.]{1,9})\b.+(gecko)/i                                     // Gecko
	            ], [VERSION, NAME]
	        ],

	        os : [[

	            // Windows
	            /microsoft (windows) (vista|xp)/i                                   // Windows (iTunes)
	            ], [NAME, VERSION], [
	            /(windows) nt 6\.2; (arm)/i,                                        // Windows RT
	            /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,            // Windows Phone
	            /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i
	            ], [NAME, [VERSION, strMapper, windowsVersionMap]], [
	            /(win(?=3|9|n)|win 9x )([nt\d\.]+)/i
	            ], [[NAME, 'Windows'], [VERSION, strMapper, windowsVersionMap]], [

	            // iOS/macOS
	            /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,              // iOS
	            /cfnetwork\/.+darwin/i
	            ], [[VERSION, /_/g, '.'], [NAME, 'iOS']], [
	            /(mac os x) ?([\w\. ]*)/i,
	            /(macintosh|mac_powerpc\b)(?!.+haiku)/i                             // Mac OS
	            ], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [

	            // Mobile OSes
	            /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i                    // Android-x86/HarmonyOS
	            ], [VERSION, NAME], [                                               // Android/WebOS/QNX/Bada/RIM/Maemo/MeeGo/Sailfish OS
	            /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
	            /(blackberry)\w*\/([\w\.]*)/i,                                      // Blackberry
	            /(tizen|kaios)[\/ ]([\w\.]+)/i,                                     // Tizen/KaiOS
	            /\((series40);/i                                                    // Series 40
	            ], [NAME, VERSION], [
	            /\(bb(10);/i                                                        // BlackBerry 10
	            ], [VERSION, [NAME, BLACKBERRY]], [
	            /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i         // Symbian
	            ], [VERSION, [NAME, 'Symbian']], [
	            /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i // Firefox OS
	            ], [VERSION, [NAME, FIREFOX+' OS']], [
	            /web0s;.+rt(tv)/i,
	            /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i                              // WebOS
	            ], [VERSION, [NAME, 'webOS']], [

	            // Google Chromecast
	            /crkey\/([\d\.]+)/i                                                 // Google Chromecast
	            ], [VERSION, [NAME, CHROME+'cast']], [
	            /(cros) [\w]+ ([\w\.]+\w)/i                                         // Chromium OS
	            ], [[NAME, 'Chromium OS'], VERSION],[

	            // Console
	            /(nintendo|playstation) ([wids345portablevuch]+)/i,                 // Nintendo/Playstation
	            /(xbox); +xbox ([^\);]+)/i,                                         // Microsoft Xbox (360, One, X, S, Series X, Series S)

	            // Other
	            /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,                            // Joli/Palm
	            /(mint)[\/\(\) ]?(\w*)/i,                                           // Mint
	            /(mageia|vectorlinux)[; ]/i,                                        // Mageia/VectorLinux
	            /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
	                                                                                // Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
	            /(hurd|linux) ?([\w\.]*)/i,                                         // Hurd/Linux
	            /(gnu) ?([\w\.]*)/i,                                                // GNU
	            /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, // FreeBSD/NetBSD/OpenBSD/PC-BSD/GhostBSD/DragonFly
	            /(haiku) (\w+)/i                                                    // Haiku
	            ], [NAME, VERSION], [
	            /(sunos) ?([\w\.\d]*)/i                                             // Solaris
	            ], [[NAME, 'Solaris'], VERSION], [
	            /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,                              // Solaris
	            /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,                                  // AIX
	            /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,            // BeOS/OS2/AmigaOS/MorphOS/OpenVMS/Fuchsia/HP-UX
	            /(unix) ?([\w\.]*)/i                                                // UNIX
	            ], [NAME, VERSION]
	        ]
	    };

	    /////////////////
	    // Constructor
	    ////////////////

	    var UAParser = function (ua, extensions) {

	        if (typeof ua === OBJ_TYPE) {
	            extensions = ua;
	            ua = undefined$1;
	        }

	        if (!(this instanceof UAParser)) {
	            return new UAParser(ua, extensions).getResult();
	        }

	        var _ua = ua || ((typeof window !== UNDEF_TYPE && window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : EMPTY);
	        var _rgxmap = extensions ? extend(regexes, extensions) : regexes;

	        this.getBrowser = function () {
	            var _browser = {};
	            _browser[NAME] = undefined$1;
	            _browser[VERSION] = undefined$1;
	            rgxMapper.call(_browser, _ua, _rgxmap.browser);
	            _browser.major = majorize(_browser.version);
	            return _browser;
	        };
	        this.getCPU = function () {
	            var _cpu = {};
	            _cpu[ARCHITECTURE] = undefined$1;
	            rgxMapper.call(_cpu, _ua, _rgxmap.cpu);
	            return _cpu;
	        };
	        this.getDevice = function () {
	            var _device = {};
	            _device[VENDOR] = undefined$1;
	            _device[MODEL] = undefined$1;
	            _device[TYPE] = undefined$1;
	            rgxMapper.call(_device, _ua, _rgxmap.device);
	            return _device;
	        };
	        this.getEngine = function () {
	            var _engine = {};
	            _engine[NAME] = undefined$1;
	            _engine[VERSION] = undefined$1;
	            rgxMapper.call(_engine, _ua, _rgxmap.engine);
	            return _engine;
	        };
	        this.getOS = function () {
	            var _os = {};
	            _os[NAME] = undefined$1;
	            _os[VERSION] = undefined$1;
	            rgxMapper.call(_os, _ua, _rgxmap.os);
	            return _os;
	        };
	        this.getResult = function () {
	            return {
	                ua      : this.getUA(),
	                browser : this.getBrowser(),
	                engine  : this.getEngine(),
	                os      : this.getOS(),
	                device  : this.getDevice(),
	                cpu     : this.getCPU()
	            };
	        };
	        this.getUA = function () {
	            return _ua;
	        };
	        this.setUA = function (ua) {
	            _ua = (typeof ua === STR_TYPE && ua.length > UA_MAX_LENGTH) ? trim(ua, UA_MAX_LENGTH) : ua;
	            return this;
	        };
	        this.setUA(_ua);
	        return this;
	    };

	    UAParser.VERSION = LIBVERSION;
	    UAParser.BROWSER =  enumerize([NAME, VERSION, MAJOR]);
	    UAParser.CPU = enumerize([ARCHITECTURE]);
	    UAParser.DEVICE = enumerize([MODEL, VENDOR, TYPE, CONSOLE, MOBILE, SMARTTV, TABLET, WEARABLE, EMBEDDED]);
	    UAParser.ENGINE = UAParser.OS = enumerize([NAME, VERSION]);

	    ///////////
	    // Export
	    //////////

	    // check js environment
	    {
	        // nodejs env
	        if (module.exports) {
	            exports = module.exports = UAParser;
	        }
	        exports.UAParser = UAParser;
	    }

	    // jQuery/Zepto specific (optional)
	    // Note:
	    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
	    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
	    //   and we should catch that.
	    var $ = typeof window !== UNDEF_TYPE && (window.jQuery || window.Zepto);
	    if ($ && !$.ua) {
	        var parser = new UAParser();
	        $.ua = parser.getResult();
	        $.ua.get = function () {
	            return parser.getUA();
	        };
	        $.ua.set = function (ua) {
	            parser.setUA(ua);
	            var result = parser.getResult();
	            for (var prop in result) {
	                $.ua[prop] = result[prop];
	            }
	        };
	    }

	})(typeof window === 'object' ? window : commonjsGlobal);
} (uaParser, uaParserExports));

function isType(type) {
    return function (value) {
        return Object.prototype.toString.call(value) === "[object ".concat(type, "]");
    };
}
/**
 * 检测变量类型
 * @param type
 */
var variableTypeDetection = {
    isNumber: isType('Number'),
    isString: isType('String'),
    isBoolean: isType('Boolean'),
    isNull: isType('Null'),
    isUndefined: isType('Undefined'),
    isSymbol: isType('Symbol'),
    isFunction: isType('Function'),
    isObject: isType('Object'),
    isArray: isType('Array'),
    isProcess: isType('process'),
    isWindow: isType('Window'),
};
function isError(error) {
    switch (Object.prototype.toString.call(error)) {
        case '[object Error]':
            return true;
        case '[object Exception]':
            return true;
        case '[object DOMException]':
            return true;
        default:
            return false;
    }
}
function isEmpty(wat) {
    return ((variableTypeDetection.isString(wat) && wat.trim() === '') || wat === undefined || wat === null);
}
function isExistProperty(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}

var isBrowserEnv = variableTypeDetection.isWindow(typeof window !== 'undefined' ? window : 0);
// 获取全局变量
function getGlobal() {
    return window;
}
var _global = getGlobal();
var _support = getGlobalSupport();
var uaResult = new uaParserExports.UAParser().getResult();
// 获取设备信息
_support.deviceInfo = {
    browserVersion: uaResult.browser.version,
    browser: uaResult.browser.name,
    osVersion: uaResult.os.version,
    os: uaResult.os.name,
    ua: uaResult.ua,
    device: uaResult.device.model ? uaResult.device.model : 'Unknow',
    device_type: uaResult.device.type ? uaResult.device.type : 'Pc',
};
_support.errorMap = new Map();
_support.replaceFlag = _support.replaceFlag || {};
var replaceFlag = _support.replaceFlag;
function setFlag(replaceType, isSet) {
    if (replaceFlag[replaceType])
        return;
    replaceFlag[replaceType] = isSet;
}
function getFlag(replaceType) {
    return replaceFlag[replaceType] ? true : false;
}
// 获取全部变量__webSee__的引用地址
function getGlobalSupport() {
    _global.__webSee__ = _global.__webSee__ || {};
    return _global.__webSee__;
}
function supportsHistory() {
    var chrome = _global.chrome;
    var isChromePackagedApp = chrome && chrome.app && chrome.app.runtime;
    var hasHistoryApi = 'history' in _global &&
        !!_global.history.pushState &&
        !!_global.history.replaceState;
    return !isChromePackagedApp && hasHistoryApi;
}

/**
 * 返回包含id、class、innerTextde字符串的标签
 * @param target html节点
 */
function htmlElementAsString(target) {
    var tagName = target.tagName.toLowerCase();
    if (tagName === 'body') {
        return '';
    }
    var classNames = target.classList.value;
    classNames = classNames !== '' ? " class='".concat(classNames, "'") : '';
    var id = target.id ? " id=\"".concat(target.id, "\"") : '';
    var innerText = target.innerText;
    return "<".concat(tagName).concat(id).concat(classNames !== '' ? classNames : '', ">").concat(innerText, "</").concat(tagName, ">");
}
/**
 * 将地址字符串转换成对象，
 * 输入：'https://github.com/xy-sea/web-see?token=123&name=11'
 * 输出：{
 *  "host": "github.com",
 *  "path": "/xy-sea/web-see",
 *  "protocol": "https",
 *  "relative": "/xy-sea/web-see?token=123&name=11"
 * }
 */
function parseUrlToObj(url) {
    if (!url) {
        return {};
    }
    var match = url.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!match) {
        return {};
    }
    var query = match[6] || '';
    var fragment = match[8] || '';
    return {
        host: match[4],
        path: match[5],
        protocol: match[2],
        relative: match[5] + query + fragment,
    };
}
// 压缩
function zip(data) {
    if (!data)
        return data;
    // 判断数据是否需要转为JSON
    var dataJson = typeof data !== 'string' && typeof data !== 'number' ? JSON.stringify(data) : data;
    // 使用Base64.encode处理字符编码，兼容中文
    var str = gBase64.encode(dataJson);
    var binaryString = pako.gzip(str);
    var arr = Array.from(binaryString);
    var s = '';
    arr.forEach(function (item) {
        s += String.fromCharCode(item);
    });
    return gBase64.btoa(s);
}
function setSilentFlag(paramOptions) {
    setFlag(EVENTTYPES.XHR, !!paramOptions.silentXhr);
    setFlag(EVENTTYPES.FETCH, !!paramOptions.silentFetch);
    setFlag(EVENTTYPES.CLICK, !!paramOptions.silentClick);
    setFlag(EVENTTYPES.HISTORY, !!paramOptions.silentHistory);
    setFlag(EVENTTYPES.ERROR, !!paramOptions.silentError);
    setFlag(EVENTTYPES.HASHCHANGE, !!paramOptions.silentHashchange);
    setFlag(EVENTTYPES.UNHANDLEDREJECTION, !!paramOptions.silentUnhandledrejection);
    setFlag(EVENTTYPES.PERFORMANCE, !!paramOptions.silentPerformance);
    setFlag(EVENTTYPES.RECORDSCREEN, !paramOptions.silentRecordScreen);
    setFlag(EVENTTYPES.WHITESCREEN, !paramOptions.silentWhiteScreen);
}
// 对每一个错误详情，生成唯一的编码
function getErrorUid(input) {
    return window.btoa(encodeURIComponent(input));
}
function hashMapExist(hash) {
    var exist = _support.errorMap.has(hash);
    if (!exist) {
        _support.errorMap.set(hash, true);
    }
    return exist;
}

/**
 * 原生try函数
 * ../param fn try中执行的函数体
 * ../param errorFn 报错时执行的函数体，将err传入
 */
function nativeTryCatch(fn, errorFn) {
    try {
        fn();
    }
    catch (err) {
        if (errorFn) {
            errorFn(err);
        }
    }
}

function getLocationHref() {
    if (typeof document === 'undefined' || document.location == null)
        return '';
    return document.location.href;
}
/**
 * 添加事件监听器
 * ../export
 * ../param {{ addEventListener: Function }} target
 * ../param {keyof TotalEventName} eventName
 * ../param {Function} handler
 * ../param {(boolean | Object)} opitons
 * ../returns
 */
function on$1(target, eventName, handler, opitons) {
    if (opitons === void 0) { opitons = false; }
    target.addEventListener(eventName, handler, opitons);
}
/**
 *
 * 重写对象上面的某个属性
 * ../param source 需要被重写的对象
 * ../param name 需要被重写对象的key
 * ../param replacement 以原有的函数作为参数，执行并重写原有函数
 * ../param isForced 是否强制重写（可能原先没有该属性）
 * ../returns void
 */
function replaceAop(source, name, replacement, isForced) {
    if (isForced === void 0) { isForced = false; }
    if (source === undefined)
        return;
    if (name in source || isForced) {
        var original = source[name];
        var wrapped = replacement(original);
        if (typeof wrapped === 'function') {
            source[name] = wrapped;
        }
    }
}
/**
 * 函数节流
 * fn 需要节流的函数
 * delay 节流的时间间隔
 * 返回一个包含节流功能的函数
 */
var throttle$1 = function (fn, delay) {
    var canRun = true;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!canRun)
            return;
        fn.apply(this, args);
        canRun = false;
        setTimeout(function () {
            canRun = true;
        }, delay);
    };
};
// 获取当前的时间戳
function getTimestamp() {
    return Date.now();
}
function typeofAny(target) {
    return Object.prototype.toString.call(target).slice(8, -1).toLowerCase();
}
// 验证选项的类型
function validateOption(target, targetName, expectType) {
    if (!target)
        return false;
    if (typeofAny(target) === expectType)
        return true;
    console.error("web-see: ".concat(targetName, "\u671F\u671B\u4F20\u5165").concat(expectType, "\u7C7B\u578B\uFF0C\u76EE\u524D\u662F").concat(typeofAny(target), "\u7C7B\u578B"));
}
function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
    return uuid;
}
function unknownToString(target) {
    if (variableTypeDetection.isString(target)) {
        return target;
    }
    if (variableTypeDetection.isUndefined(target)) {
        return 'undefined';
    }
    return JSON.stringify(target);
}
function interceptStr(str, interceptLength) {
    if (variableTypeDetection.isString(str)) {
        return (str.slice(0, interceptLength) +
            (str.length > interceptLength ? ":\u622A\u53D6\u524D".concat(interceptLength, "\u4E2A\u5B57\u7B26") : ''));
    }
    return '';
}

var Queue = /** @class */ (function () {
    function Queue() {
        this.stack = [];
        this.isFlushing = false;
    }
    Queue.prototype.addFn = function (fn) {
        var _this = this;
        if (typeof fn !== 'function')
            return;
        if (!('requestIdleCallback' in _global || 'Promise' in _global)) {
            fn();
            return;
        }
        this.stack.push(fn);
        if (!this.isFlushing) {
            this.isFlushing = true;
            // 优先使用requestIdleCallback
            if ('requestIdleCallback' in _global) {
                requestIdleCallback(function () { return _this.flushStack(); });
            }
            else {
                // 其次使用微任务上报
                Promise.resolve().then(function () { return _this.flushStack(); });
            }
        }
    };
    Queue.prototype.clear = function () {
        this.stack = [];
    };
    Queue.prototype.getStack = function () {
        return this.stack;
    };
    Queue.prototype.flushStack = function () {
        var temp = this.stack.slice(0);
        this.stack = [];
        this.isFlushing = false;
        for (var i = 0; i < temp.length; i++) {
            temp[i]();
        }
    };
    return Queue;
}());

function fromHttpStatus(httpStatus) {
    if (httpStatus < 400) {
        return SpanStatus.Ok;
    }
    if (httpStatus >= 400 && httpStatus < 500) {
        switch (httpStatus) {
            case 401:
                return SpanStatus.Unauthenticated;
            case 403:
                return SpanStatus.PermissionDenied;
            case 404:
                return SpanStatus.NotFound;
            case 409:
                return SpanStatus.AlreadyExists;
            case 413:
                return SpanStatus.FailedPrecondition;
            case 429:
                return SpanStatus.ResourceExhausted;
            default:
                return SpanStatus.InvalidArgument;
        }
    }
    if (httpStatus >= 500 && httpStatus < 600) {
        switch (httpStatus) {
            case 501:
                return SpanStatus.Unimplemented;
            case 503:
                return SpanStatus.Unavailable;
            case 504:
                return SpanStatus.DeadlineExceeded;
            default:
                return SpanStatus.InternalError;
        }
    }
    return SpanStatus.UnknownError;
}

var Breadcrumb = /** @class */ (function () {
    function Breadcrumb() {
        this.maxBreadcrumbs = 20; // 用户行为存放的最大长度
        this.stack = [];
    }
    /**
     * 添加用户行为栈
     */
    Breadcrumb.prototype.push = function (data) {
        if (typeof this.beforePushBreadcrumb === 'function') {
            // 执行用户自定义的hook
            var result = this.beforePushBreadcrumb(data);
            if (!result)
                return;
            this.immediatePush(result);
            return;
        }
        this.immediatePush(data);
    };
    Breadcrumb.prototype.immediatePush = function (data) {
        data.time || (data.time = getTimestamp());
        if (this.stack.length >= this.maxBreadcrumbs) {
            this.shift();
        }
        this.stack.push(data);
        this.stack.sort(function (a, b) { return a.time - b.time; });
    };
    Breadcrumb.prototype.shift = function () {
        return this.stack.shift() !== undefined;
    };
    Breadcrumb.prototype.clear = function () {
        this.stack = [];
    };
    Breadcrumb.prototype.getStack = function () {
        return this.stack;
    };
    Breadcrumb.prototype.getCategory = function (type) {
        switch (type) {
            // 接口请求
            case EVENTTYPES.XHR:
            case EVENTTYPES.FETCH:
                return BREADCRUMBTYPES.HTTP;
            // 用户点击
            case EVENTTYPES.CLICK:
                return BREADCRUMBTYPES.CLICK;
            // 路由变化
            case EVENTTYPES.HISTORY:
            case EVENTTYPES.HASHCHANGE:
                return BREADCRUMBTYPES.ROUTE;
            // 加载资源
            case EVENTTYPES.RESOURCE:
                return BREADCRUMBTYPES.RESOURCE;
            // Js代码报错
            case EVENTTYPES.UNHANDLEDREJECTION:
            case EVENTTYPES.ERROR:
                return BREADCRUMBTYPES.CODEERROR;
            // 用户自定义
            default:
                return BREADCRUMBTYPES.CUSTOM;
        }
    };
    Breadcrumb.prototype.bindOptions = function (options) {
        // maxBreadcrumbs 用户行为存放的最大容量
        // beforePushBreadcrumb 添加用户行为前的处理函数
        var _a = options.maxBreadcrumbs, maxBreadcrumbs = _a === void 0 ? 20 : _a, beforePushBreadcrumb = options.beforePushBreadcrumb;
        validateOption(maxBreadcrumbs, 'maxBreadcrumbs', 'number') &&
            (this.maxBreadcrumbs = maxBreadcrumbs);
        validateOption(beforePushBreadcrumb, 'beforePushBreadcrumb', 'function') &&
            (this.beforePushBreadcrumb = beforePushBreadcrumb);
    };
    return Breadcrumb;
}());
var breadcrumb = _support.breadcrumb || (_support.breadcrumb = new Breadcrumb());

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign$1 = function() {
    __assign$1 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

/**
 * 用来上报数据，包含图片打点上报、xhr请求
 */
var TransportData = /** @class */ (function () {
    function TransportData() {
        this.queue = new Queue(); // 消息队列
        this.apikey = ''; // 每个项目对应的唯一标识
        this.errorDsn = ''; // 监控上报接口的地址
        this.userId = ''; // 用户id
        this.useImgUpload = false; // 是否使用图片打点上报
        this.uuid = generateUUID(); // 每次页面加载的唯一标识
    }
    TransportData.prototype.beacon = function (url, data) {
        return navigator.sendBeacon(url, JSON.stringify(data));
    };
    TransportData.prototype.imgRequest = function (data, url) {
        var requestFun = function () {
            var img = new Image();
            var spliceStr = url.indexOf('?') === -1 ? '?' : '&';
            img.src = "".concat(url).concat(spliceStr, "data=").concat(encodeURIComponent(JSON.stringify(data)));
        };
        this.queue.addFn(requestFun);
    };
    TransportData.prototype.beforePost = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var transportData;
            return __generator(this, function (_a) {
                transportData = this.getTransportData(data);
                // 配置了beforeDataReport
                if (typeof this.beforeDataReport === 'function') {
                    transportData = this.beforeDataReport(transportData);
                    if (!transportData)
                        return [2 /*return*/, false];
                }
                return [2 /*return*/, transportData];
            });
        });
    };
    TransportData.prototype.xhrPost = function (data, url) {
        return __awaiter(this, void 0, void 0, function () {
            var requestFun;
            return __generator(this, function (_a) {
                requestFun = function () {
                    fetch("".concat(url), {
                        method: 'POST',
                        body: JSON.stringify(data),
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
                    // .then(response => response.json());
                    // .then((res) => console.log(res));
                };
                this.queue.addFn(requestFun);
                return [2 /*return*/];
            });
        });
    };
    // 获取用户信息
    TransportData.prototype.getAuthInfo = function () {
        return {
            userId: this.userId || this.getAuthId() || '',
            sdkVersion: SDK_VERSION,
            apikey: this.apikey,
        };
    };
    TransportData.prototype.getAuthId = function () {
        if (typeof this.getUserId === 'function') {
            var id = this.getUserId();
            if (typeof id === 'string' || typeof id === 'number') {
                return id;
            }
            else {
                console.error("web-see userId: ".concat(id, " \u671F\u671B string \u6216 number \u7C7B\u578B\uFF0C\u4F46\u662F\u4F20\u5165 ").concat(typeof id));
            }
        }
        return '';
    };
    // 添加公共信息
    // 这里不要添加时间戳，比如接口报错，发生的时间和上报时间不一致
    TransportData.prototype.getTransportData = function (data) {
        var info = __assign$1(__assign$1(__assign$1({}, data), this.getAuthInfo()), { uuid: this.uuid, pageUrl: getLocationHref(), deviceInfo: _support.deviceInfo });
        // 性能数据、录屏、白屏检测等不需要附带用户行为
        if (data.type != EVENTTYPES.PERFORMANCE &&
            data.type != EVENTTYPES.RECORDSCREEN &&
            data.type != EVENTTYPES.WHITESCREEN) {
            info.breadcrumb = breadcrumb.getStack(); // 获取用户行为栈
        }
        return info;
    };
    // 判断请求是否为SDK配置的接口
    TransportData.prototype.isSdkTransportUrl = function (targetUrl) {
        var isSdkDsn = false;
        if (this.errorDsn && targetUrl.indexOf(this.errorDsn) !== -1) {
            isSdkDsn = true;
        }
        return isSdkDsn;
    };
    TransportData.prototype.bindOptions = function (options) {
        var dsn = options.dsn, apikey = options.apikey, beforeDataReport = options.beforeDataReport, userId = options.userId, getUserId = options.getUserId, useImgUpload = options.useImgUpload;
        validateOption(apikey, 'apikey', 'string') && (this.apikey = apikey);
        validateOption(dsn, 'dsn', 'string') && (this.errorDsn = dsn);
        validateOption(userId, 'userId', 'string') && (this.userId = userId || '');
        validateOption(useImgUpload, 'useImgUpload', 'boolean') &&
            (this.useImgUpload = useImgUpload || false);
        validateOption(beforeDataReport, 'beforeDataReport', 'function') &&
            (this.beforeDataReport = beforeDataReport);
        validateOption(getUserId, 'getUserId', 'function') && (this.getUserId = getUserId);
    };
    // 上报数据
    TransportData.prototype.send = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var dsn, result, value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dsn = this.errorDsn;
                        if (isEmpty(dsn)) {
                            console.error('web-see: dsn为空，没有传入监控错误上报的dsn地址，请在init中传入');
                            return [2 /*return*/];
                        }
                        // 开启录屏
                        if (_support.options.silentRecordScreen) {
                            if (options.recordScreenTypeList.includes(data.type)) {
                                // 修改hasError
                                _support.hasError = true;
                                data.recordScreenId = _support.recordScreenId;
                            }
                        }
                        return [4 /*yield*/, this.beforePost(data)];
                    case 1:
                        result = (_a.sent());
                        if (isBrowserEnv && result) {
                            value = this.beacon(dsn, result);
                            if (!value) {
                                return [2 /*return*/, this.useImgUpload ? this.imgRequest(result, dsn) : this.xhrPost(result, dsn)];
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return TransportData;
}());
var transportData = _support.transportData || (_support.transportData = new TransportData());

var Options = /** @class */ (function () {
    function Options() {
        this.dsn = ''; // 监控上报接口的地址
        this.throttleDelayTime = 0; // click事件的节流时长
        this.overTime = 10; // 接口超时时长
        this.silentRecordScreen = false; // 是否开启录屏
        this.recordScreentime = 10; // 默认录屏时长
        this.silentWhiteScreen = false; // 是否开启白屏检测
        this.skeletonProject = false; // 项目是否有骨架屏
        this.repeatCodeError = false; // 是否去除重复的代码错误，重复的错误只上报一次
        this.recordScreenTypeList = [
            // 录屏事件集合
            EVENTTYPES.ERROR,
            EVENTTYPES.UNHANDLEDREJECTION,
            EVENTTYPES.RESOURCE,
            EVENTTYPES.FETCH,
            EVENTTYPES.XHR,
        ];
        this.whiteBoxElements = ['html', 'body', '#app', '#root']; // 白屏检测的父容器列表
    }
    Options.prototype.bindOptions = function (options) {
        var dsn = options.dsn, filterXhrUrlRegExp = options.filterXhrUrlRegExp, _a = options.throttleDelayTime, throttleDelayTime = _a === void 0 ? 0 : _a, _b = options.silentRecordScreen, silentRecordScreen = _b === void 0 ? false : _b, _c = options.overTime, overTime = _c === void 0 ? 10 : _c, recordScreenTypeList = options.recordScreenTypeList, _d = options.recordScreentime, recordScreentime = _d === void 0 ? 10 : _d, _e = options.silentWhiteScreen, silentWhiteScreen = _e === void 0 ? false : _e, _f = options.whiteBoxElements, whiteBoxElements = _f === void 0 ? ['html', 'body', '#app', '#root'] : _f, _g = options.skeletonProject, skeletonProject = _g === void 0 ? false : _g, handleHttpStatus = options.handleHttpStatus, _h = options.repeatCodeError, repeatCodeError = _h === void 0 ? false : _h;
        validateOption(dsn, 'dsn', 'string') && (this.dsn = dsn);
        validateOption(throttleDelayTime, 'throttleDelayTime', 'number') &&
            (this.throttleDelayTime = throttleDelayTime);
        validateOption(overTime, 'overTime', 'number') && (this.overTime = overTime);
        validateOption(recordScreentime, 'recordScreentime', 'number') &&
            (this.recordScreentime = recordScreentime);
        if (validateOption(silentRecordScreen, 'silentRecordScreen', 'boolean')) {
            this.silentRecordScreen = silentRecordScreen;
            _support.recordScreenId = generateUUID(); // 添加初始的recordScreenId
        }
        validateOption(recordScreenTypeList, 'recordScreenTypeList', 'array') &&
            (this.recordScreenTypeList = recordScreenTypeList);
        validateOption(filterXhrUrlRegExp, 'filterXhrUrlRegExp', 'regexp') &&
            (this.filterXhrUrlRegExp = filterXhrUrlRegExp);
        validateOption(silentWhiteScreen, 'silentWhiteScreen', 'boolean') &&
            (this.silentWhiteScreen = silentWhiteScreen);
        validateOption(skeletonProject, 'skeletonProject', 'boolean') &&
            (this.skeletonProject = skeletonProject);
        validateOption(whiteBoxElements, 'whiteBoxElements', 'array') &&
            (this.whiteBoxElements = whiteBoxElements);
        validateOption(handleHttpStatus, 'handleHttpStatus', 'function') &&
            (this.handleHttpStatus = handleHttpStatus);
        validateOption(repeatCodeError, 'repeatCodeError', 'boolean') &&
            (this.repeatCodeError = repeatCodeError);
    };
    return Options;
}());
var options = _support.options || (_support.options = new Options());
function handleOptions(paramOptions) {
    // setSilentFlag 给全局添加已设置的标识，防止重复设置
    setSilentFlag(paramOptions);
    // 设置用户行为的配置项
    breadcrumb.bindOptions(paramOptions);
    // transportData 配置上报的信息
    transportData.bindOptions(paramOptions);
    // 绑定其他配置项
    options.bindOptions(paramOptions);
}

// 处理接口的状态
function httpTransform(data) {
    var message = '';
    var elapsedTime = data.elapsedTime, time = data.time, _a = data.method, method = _a === void 0 ? '' : _a, type = data.type, _b = data.Status, Status = _b === void 0 ? 200 : _b, response = data.response, requestData = data.requestData;
    var status;
    if (Status === 0) {
        status = STATUS_CODE.ERROR;
        message =
            elapsedTime <= options.overTime * 1000
                ? "\u8BF7\u6C42\u5931\u8D25\uFF0CStatus\u503C\u4E3A:".concat(Status)
                : '请求失败，接口超时';
    }
    else if (Status < HTTP_CODE.BAD_REQUEST) {
        status = STATUS_CODE.OK;
        if (options.handleHttpStatus && typeof options.handleHttpStatus == 'function') {
            if (options.handleHttpStatus(data)) {
                status = STATUS_CODE.OK;
            }
            else {
                status = STATUS_CODE.ERROR;
                message = "\u63A5\u53E3\u62A5\u9519\uFF0C\u62A5\u9519\u4FE1\u606F\u4E3A\uFF1A".concat(typeof response == 'object' ? JSON.stringify(response) : response);
            }
        }
    }
    else {
        status = STATUS_CODE.ERROR;
        message = "\u8BF7\u6C42\u5931\u8D25\uFF0CStatus\u503C\u4E3A:".concat(Status, "\uFF0C").concat(fromHttpStatus(Status));
    }
    message = "".concat(data.url, "; ").concat(message);
    return {
        url: data.url,
        time: time,
        status: status,
        elapsedTime: elapsedTime,
        message: message,
        requestData: {
            httpType: type,
            method: method,
            data: requestData || '',
        },
        response: {
            Status: Status,
            data: status == STATUS_CODE.ERROR ? response : null,
        },
    };
}
function resourceTransform(target) {
    return {
        time: getTimestamp(),
        message: (interceptStr(target.src, 120) || interceptStr(target.href, 120)) +
            '; 资源加载失败',
        name: target.localName,
    };
}

var errorStackParserExports = {};
var errorStackParser = {
  get exports(){ return errorStackParserExports; },
  set exports(v){ errorStackParserExports = v; },
};

var stackframeExports = {};
var stackframe = {
  get exports(){ return stackframeExports; },
  set exports(v){ stackframeExports = v; },
};

var hasRequiredStackframe;

function requireStackframe () {
	if (hasRequiredStackframe) return stackframeExports;
	hasRequiredStackframe = 1;
	(function (module, exports) {
		(function(root, factory) {
		    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

		    /* istanbul ignore next */
		    {
		        module.exports = factory();
		    }
		}(commonjsGlobal, function() {
		    function _isNumber(n) {
		        return !isNaN(parseFloat(n)) && isFinite(n);
		    }

		    function _capitalize(str) {
		        return str.charAt(0).toUpperCase() + str.substring(1);
		    }

		    function _getter(p) {
		        return function() {
		            return this[p];
		        };
		    }

		    var booleanProps = ['isConstructor', 'isEval', 'isNative', 'isToplevel'];
		    var numericProps = ['columnNumber', 'lineNumber'];
		    var stringProps = ['fileName', 'functionName', 'source'];
		    var arrayProps = ['args'];
		    var objectProps = ['evalOrigin'];

		    var props = booleanProps.concat(numericProps, stringProps, arrayProps, objectProps);

		    function StackFrame(obj) {
		        if (!obj) return;
		        for (var i = 0; i < props.length; i++) {
		            if (obj[props[i]] !== undefined) {
		                this['set' + _capitalize(props[i])](obj[props[i]]);
		            }
		        }
		    }

		    StackFrame.prototype = {
		        getArgs: function() {
		            return this.args;
		        },
		        setArgs: function(v) {
		            if (Object.prototype.toString.call(v) !== '[object Array]') {
		                throw new TypeError('Args must be an Array');
		            }
		            this.args = v;
		        },

		        getEvalOrigin: function() {
		            return this.evalOrigin;
		        },
		        setEvalOrigin: function(v) {
		            if (v instanceof StackFrame) {
		                this.evalOrigin = v;
		            } else if (v instanceof Object) {
		                this.evalOrigin = new StackFrame(v);
		            } else {
		                throw new TypeError('Eval Origin must be an Object or StackFrame');
		            }
		        },

		        toString: function() {
		            var fileName = this.getFileName() || '';
		            var lineNumber = this.getLineNumber() || '';
		            var columnNumber = this.getColumnNumber() || '';
		            var functionName = this.getFunctionName() || '';
		            if (this.getIsEval()) {
		                if (fileName) {
		                    return '[eval] (' + fileName + ':' + lineNumber + ':' + columnNumber + ')';
		                }
		                return '[eval]:' + lineNumber + ':' + columnNumber;
		            }
		            if (functionName) {
		                return functionName + ' (' + fileName + ':' + lineNumber + ':' + columnNumber + ')';
		            }
		            return fileName + ':' + lineNumber + ':' + columnNumber;
		        }
		    };

		    StackFrame.fromString = function StackFrame$$fromString(str) {
		        var argsStartIndex = str.indexOf('(');
		        var argsEndIndex = str.lastIndexOf(')');

		        var functionName = str.substring(0, argsStartIndex);
		        var args = str.substring(argsStartIndex + 1, argsEndIndex).split(',');
		        var locationString = str.substring(argsEndIndex + 1);

		        if (locationString.indexOf('@') === 0) {
		            var parts = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(locationString, '');
		            var fileName = parts[1];
		            var lineNumber = parts[2];
		            var columnNumber = parts[3];
		        }

		        return new StackFrame({
		            functionName: functionName,
		            args: args || undefined,
		            fileName: fileName,
		            lineNumber: lineNumber || undefined,
		            columnNumber: columnNumber || undefined
		        });
		    };

		    for (var i = 0; i < booleanProps.length; i++) {
		        StackFrame.prototype['get' + _capitalize(booleanProps[i])] = _getter(booleanProps[i]);
		        StackFrame.prototype['set' + _capitalize(booleanProps[i])] = (function(p) {
		            return function(v) {
		                this[p] = Boolean(v);
		            };
		        })(booleanProps[i]);
		    }

		    for (var j = 0; j < numericProps.length; j++) {
		        StackFrame.prototype['get' + _capitalize(numericProps[j])] = _getter(numericProps[j]);
		        StackFrame.prototype['set' + _capitalize(numericProps[j])] = (function(p) {
		            return function(v) {
		                if (!_isNumber(v)) {
		                    throw new TypeError(p + ' must be a Number');
		                }
		                this[p] = Number(v);
		            };
		        })(numericProps[j]);
		    }

		    for (var k = 0; k < stringProps.length; k++) {
		        StackFrame.prototype['get' + _capitalize(stringProps[k])] = _getter(stringProps[k]);
		        StackFrame.prototype['set' + _capitalize(stringProps[k])] = (function(p) {
		            return function(v) {
		                this[p] = String(v);
		            };
		        })(stringProps[k]);
		    }

		    return StackFrame;
		}));
} (stackframe));
	return stackframeExports;
}

(function (module, exports) {
	(function(root, factory) {
	    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

	    /* istanbul ignore next */
	    {
	        module.exports = factory(requireStackframe());
	    }
	}(commonjsGlobal, function ErrorStackParser(StackFrame) {

	    var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+:\d+/;
	    var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+:\d+|\(native\))/m;
	    var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code])?$/;

	    return {
	        /**
	         * Given an Error object, extract the most information from it.
	         *
	         * @param {Error} error object
	         * @return {Array} of StackFrames
	         */
	        parse: function ErrorStackParser$$parse(error) {
	            if (typeof error.stacktrace !== 'undefined' || typeof error['opera#sourceloc'] !== 'undefined') {
	                return this.parseOpera(error);
	            } else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
	                return this.parseV8OrIE(error);
	            } else if (error.stack) {
	                return this.parseFFOrSafari(error);
	            } else {
	                throw new Error('Cannot parse given Error object');
	            }
	        },

	        // Separate line and column numbers from a string of the form: (URI:Line:Column)
	        extractLocation: function ErrorStackParser$$extractLocation(urlLike) {
	            // Fail-fast but return locations like "(native)"
	            if (urlLike.indexOf(':') === -1) {
	                return [urlLike];
	            }

	            var regExp = /(.+?)(?::(\d+))?(?::(\d+))?$/;
	            var parts = regExp.exec(urlLike.replace(/[()]/g, ''));
	            return [parts[1], parts[2] || undefined, parts[3] || undefined];
	        },

	        parseV8OrIE: function ErrorStackParser$$parseV8OrIE(error) {
	            var filtered = error.stack.split('\n').filter(function(line) {
	                return !!line.match(CHROME_IE_STACK_REGEXP);
	            }, this);

	            return filtered.map(function(line) {
	                if (line.indexOf('(eval ') > -1) {
	                    // Throw away eval information until we implement stacktrace.js/stackframe#8
	                    line = line.replace(/eval code/g, 'eval').replace(/(\(eval at [^()]*)|(,.*$)/g, '');
	                }
	                var sanitizedLine = line.replace(/^\s+/, '').replace(/\(eval code/g, '(').replace(/^.*?\s+/, '');

	                // capture and preseve the parenthesized location "(/foo/my bar.js:12:87)" in
	                // case it has spaces in it, as the string is split on \s+ later on
	                var location = sanitizedLine.match(/ (\(.+\)$)/);

	                // remove the parenthesized location from the line, if it was matched
	                sanitizedLine = location ? sanitizedLine.replace(location[0], '') : sanitizedLine;

	                // if a location was matched, pass it to extractLocation() otherwise pass all sanitizedLine
	                // because this line doesn't have function name
	                var locationParts = this.extractLocation(location ? location[1] : sanitizedLine);
	                var functionName = location && sanitizedLine || undefined;
	                var fileName = ['eval', '<anonymous>'].indexOf(locationParts[0]) > -1 ? undefined : locationParts[0];

	                return new StackFrame({
	                    functionName: functionName,
	                    fileName: fileName,
	                    lineNumber: locationParts[1],
	                    columnNumber: locationParts[2],
	                    source: line
	                });
	            }, this);
	        },

	        parseFFOrSafari: function ErrorStackParser$$parseFFOrSafari(error) {
	            var filtered = error.stack.split('\n').filter(function(line) {
	                return !line.match(SAFARI_NATIVE_CODE_REGEXP);
	            }, this);

	            return filtered.map(function(line) {
	                // Throw away eval information until we implement stacktrace.js/stackframe#8
	                if (line.indexOf(' > eval') > -1) {
	                    line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ':$1');
	                }

	                if (line.indexOf('@') === -1 && line.indexOf(':') === -1) {
	                    // Safari eval frames only have function names and nothing else
	                    return new StackFrame({
	                        functionName: line
	                    });
	                } else {
	                    var functionNameRegex = /((.*".+"[^@]*)?[^@]*)(?:@)/;
	                    var matches = line.match(functionNameRegex);
	                    var functionName = matches && matches[1] ? matches[1] : undefined;
	                    var locationParts = this.extractLocation(line.replace(functionNameRegex, ''));

	                    return new StackFrame({
	                        functionName: functionName,
	                        fileName: locationParts[0],
	                        lineNumber: locationParts[1],
	                        columnNumber: locationParts[2],
	                        source: line
	                    });
	                }
	            }, this);
	        },

	        parseOpera: function ErrorStackParser$$parseOpera(e) {
	            if (!e.stacktrace || (e.message.indexOf('\n') > -1 &&
	                e.message.split('\n').length > e.stacktrace.split('\n').length)) {
	                return this.parseOpera9(e);
	            } else if (!e.stack) {
	                return this.parseOpera10(e);
	            } else {
	                return this.parseOpera11(e);
	            }
	        },

	        parseOpera9: function ErrorStackParser$$parseOpera9(e) {
	            var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
	            var lines = e.message.split('\n');
	            var result = [];

	            for (var i = 2, len = lines.length; i < len; i += 2) {
	                var match = lineRE.exec(lines[i]);
	                if (match) {
	                    result.push(new StackFrame({
	                        fileName: match[2],
	                        lineNumber: match[1],
	                        source: lines[i]
	                    }));
	                }
	            }

	            return result;
	        },

	        parseOpera10: function ErrorStackParser$$parseOpera10(e) {
	            var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
	            var lines = e.stacktrace.split('\n');
	            var result = [];

	            for (var i = 0, len = lines.length; i < len; i += 2) {
	                var match = lineRE.exec(lines[i]);
	                if (match) {
	                    result.push(
	                        new StackFrame({
	                            functionName: match[3] || undefined,
	                            fileName: match[2],
	                            lineNumber: match[1],
	                            source: lines[i]
	                        })
	                    );
	                }
	            }

	            return result;
	        },

	        // Opera 10.65+ Error.stack very similar to FF/Safari
	        parseOpera11: function ErrorStackParser$$parseOpera11(error) {
	            var filtered = error.stack.split('\n').filter(function(line) {
	                return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) && !line.match(/^Error created at/);
	            }, this);

	            return filtered.map(function(line) {
	                var tokens = line.split('@');
	                var locationParts = this.extractLocation(tokens.pop());
	                var functionCall = (tokens.shift() || '');
	                var functionName = functionCall
	                    .replace(/<anonymous function(: (\w+))?>/, '$2')
	                    .replace(/\([^)]*\)/g, '') || undefined;
	                var argsRaw;
	                if (functionCall.match(/\(([^)]*)\)/)) {
	                    argsRaw = functionCall.replace(/^[^(]+\(([^)]*)\)$/, '$1');
	                }
	                var args = (argsRaw === undefined || argsRaw === '[arguments not available]') ?
	                    undefined : argsRaw.split(',');

	                return new StackFrame({
	                    functionName: functionName,
	                    args: args,
	                    fileName: locationParts[0],
	                    lineNumber: locationParts[1],
	                    columnNumber: locationParts[2],
	                    source: line
	                });
	            }, this);
	        }
	    };
	}));
} (errorStackParser));

var ErrorStackParser = errorStackParserExports;

// 自定义上报事件
function log(_a) {
    var _b = _a.message, message = _b === void 0 ? 'customMsg' : _b, _c = _a.error, error = _c === void 0 ? '' : _c, _d = _a.type, type = _d === void 0 ? EVENTTYPES.CUSTOM : _d;
    try {
        var errorInfo = {};
        if (isError(error)) {
            var result = ErrorStackParser.parse(!error.target ? error : error.error || error.reason)[0];
            errorInfo = __assign$1(__assign$1({}, result), { line: result.lineNumber, column: result.columnNumber });
        }
        breadcrumb.push({
            type: type,
            status: STATUS_CODE.ERROR,
            category: breadcrumb.getCategory(EVENTTYPES.CUSTOM),
            data: unknownToString(message),
            time: getTimestamp(),
        });
        transportData.send(__assign$1({ type: type, status: STATUS_CODE.ERROR, message: unknownToString(message), time: getTimestamp() }, errorInfo));
    }
    catch (err) {
        // console.log('上报自定义事件时报错：', err);
    }
}

var handlers = {};
// subscribeEvent 设置标识，并将处理的方法放置到handlers中，{ xhr: [ funtion ] }
function subscribeEvent(handler) {
    var _a;
    if (!handler || getFlag(handler.type))
        return false;
    setFlag(handler.type, true);
    handlers[handler.type] = handlers[handler.type] || [];
    (_a = handlers[handler.type]) === null || _a === void 0 ? void 0 : _a.push(handler.callback);
    return true;
}
function triggerHandlers(type, data) {
    var _a;
    if (!type || !handlers[type])
        return;
    // 获取对应事件的回调函数并执行，回调函数为addReplaceHandler事件中定义的事件
    (_a = handlers[type]) === null || _a === void 0 ? void 0 : _a.forEach(function (callback) {
        nativeTryCatch(function () {
            callback(data);
        }, function () {
            // console.error(
            //   `web-see 重写事件triggerHandlers的回调函数发生错误\nType:${type}\nName: ${getFunctionName(
            //     callback
            //   )}\nError: ${e}`
            // );
        });
    });
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

var NodeType;
(function (NodeType) {
    NodeType[NodeType["Document"] = 0] = "Document";
    NodeType[NodeType["DocumentType"] = 1] = "DocumentType";
    NodeType[NodeType["Element"] = 2] = "Element";
    NodeType[NodeType["Text"] = 3] = "Text";
    NodeType[NodeType["CDATA"] = 4] = "CDATA";
    NodeType[NodeType["Comment"] = 5] = "Comment";
})(NodeType || (NodeType = {}));

function isElement(n) {
    return n.nodeType === n.ELEMENT_NODE;
}
function isShadowRoot(n) {
    var _a;
    var host = (_a = n) === null || _a === void 0 ? void 0 : _a.host;
    return Boolean(host && host.shadowRoot && host.shadowRoot === n);
}
function maskInputValue(_a) {
    var maskInputOptions = _a.maskInputOptions, tagName = _a.tagName, type = _a.type, value = _a.value, maskInputFn = _a.maskInputFn;
    var text = value || '';
    if (maskInputOptions[tagName.toLowerCase()] ||
        maskInputOptions[type]) {
        if (maskInputFn) {
            text = maskInputFn(text);
        }
        else {
            text = '*'.repeat(text.length);
        }
    }
    return text;
}
var ORIGINAL_ATTRIBUTE_NAME = '__rrweb_original__';
function is2DCanvasBlank(canvas) {
    var ctx = canvas.getContext('2d');
    if (!ctx)
        return true;
    var chunkSize = 50;
    for (var x = 0; x < canvas.width; x += chunkSize) {
        for (var y = 0; y < canvas.height; y += chunkSize) {
            var getImageData = ctx.getImageData;
            var originalGetImageData = ORIGINAL_ATTRIBUTE_NAME in getImageData
                ? getImageData[ORIGINAL_ATTRIBUTE_NAME]
                : getImageData;
            var pixelBuffer = new Uint32Array(originalGetImageData.call(ctx, x, y, Math.min(chunkSize, canvas.width - x), Math.min(chunkSize, canvas.height - y)).data.buffer);
            if (pixelBuffer.some(function (pixel) { return pixel !== 0; }))
                return false;
        }
    }
    return true;
}

var _id = 1;
var tagNameRegex = new RegExp('[^a-z0-9-_:]');
var IGNORED_NODE = -2;
function genId() {
    return _id++;
}
function getValidTagName(element) {
    if (element instanceof HTMLFormElement) {
        return 'form';
    }
    var processedTagName = element.tagName.toLowerCase().trim();
    if (tagNameRegex.test(processedTagName)) {
        return 'div';
    }
    return processedTagName;
}
function getCssRulesString(s) {
    try {
        var rules = s.rules || s.cssRules;
        return rules ? Array.from(rules).map(getCssRuleString).join('') : null;
    }
    catch (error) {
        return null;
    }
}
function getCssRuleString(rule) {
    var cssStringified = rule.cssText;
    if (isCSSImportRule(rule)) {
        try {
            cssStringified = getCssRulesString(rule.styleSheet) || cssStringified;
        }
        catch (_a) {
        }
    }
    return cssStringified;
}
function isCSSImportRule(rule) {
    return 'styleSheet' in rule;
}
function stringifyStyleSheet(sheet) {
    return sheet.cssRules
        ? Array.from(sheet.cssRules)
            .map(function (rule) { return rule.cssText || ''; })
            .join('')
        : '';
}
function extractOrigin(url) {
    var origin = '';
    if (url.indexOf('//') > -1) {
        origin = url.split('/').slice(0, 3).join('/');
    }
    else {
        origin = url.split('/')[0];
    }
    origin = origin.split('?')[0];
    return origin;
}
var canvasService;
var canvasCtx;
var URL_IN_CSS_REF = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm;
var RELATIVE_PATH = /^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/|#).*/;
var DATA_URI = /^(data:)([^,]*),(.*)/i;
function absoluteToStylesheet(cssText, href) {
    return (cssText || '').replace(URL_IN_CSS_REF, function (origin, quote1, path1, quote2, path2, path3) {
        var filePath = path1 || path2 || path3;
        var maybeQuote = quote1 || quote2 || '';
        if (!filePath) {
            return origin;
        }
        if (!RELATIVE_PATH.test(filePath)) {
            return "url(" + maybeQuote + filePath + maybeQuote + ")";
        }
        if (DATA_URI.test(filePath)) {
            return "url(" + maybeQuote + filePath + maybeQuote + ")";
        }
        if (filePath[0] === '/') {
            return "url(" + maybeQuote + (extractOrigin(href) + filePath) + maybeQuote + ")";
        }
        var stack = href.split('/');
        var parts = filePath.split('/');
        stack.pop();
        for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
            var part = parts_1[_i];
            if (part === '.') {
                continue;
            }
            else if (part === '..') {
                stack.pop();
            }
            else {
                stack.push(part);
            }
        }
        return "url(" + maybeQuote + stack.join('/') + maybeQuote + ")";
    });
}
var SRCSET_NOT_SPACES = /^[^ \t\n\r\u000c]+/;
var SRCSET_COMMAS_OR_SPACES = /^[, \t\n\r\u000c]+/;
function getAbsoluteSrcsetString(doc, attributeValue) {
    if (attributeValue.trim() === '') {
        return attributeValue;
    }
    var pos = 0;
    function collectCharacters(regEx) {
        var chars;
        var match = regEx.exec(attributeValue.substring(pos));
        if (match) {
            chars = match[0];
            pos += chars.length;
            return chars;
        }
        return '';
    }
    var output = [];
    while (true) {
        collectCharacters(SRCSET_COMMAS_OR_SPACES);
        if (pos >= attributeValue.length) {
            break;
        }
        var url = collectCharacters(SRCSET_NOT_SPACES);
        if (url.slice(-1) === ',') {
            url = absoluteToDoc(doc, url.substring(0, url.length - 1));
            output.push(url);
        }
        else {
            var descriptorsStr = '';
            url = absoluteToDoc(doc, url);
            var inParens = false;
            while (true) {
                var c = attributeValue.charAt(pos);
                if (c === '') {
                    output.push((url + descriptorsStr).trim());
                    break;
                }
                else if (!inParens) {
                    if (c === ',') {
                        pos += 1;
                        output.push((url + descriptorsStr).trim());
                        break;
                    }
                    else if (c === '(') {
                        inParens = true;
                    }
                }
                else {
                    if (c === ')') {
                        inParens = false;
                    }
                }
                descriptorsStr += c;
                pos += 1;
            }
        }
    }
    return output.join(', ');
}
function absoluteToDoc(doc, attributeValue) {
    if (!attributeValue || attributeValue.trim() === '') {
        return attributeValue;
    }
    var a = doc.createElement('a');
    a.href = attributeValue;
    return a.href;
}
function isSVGElement(el) {
    return Boolean(el.tagName === 'svg' || el.ownerSVGElement);
}
function getHref() {
    var a = document.createElement('a');
    a.href = '';
    return a.href;
}
function transformAttribute(doc, tagName, name, value) {
    if (name === 'src' || (name === 'href' && value)) {
        return absoluteToDoc(doc, value);
    }
    else if (name === 'xlink:href' && value && value[0] !== '#') {
        return absoluteToDoc(doc, value);
    }
    else if (name === 'background' &&
        value &&
        (tagName === 'table' || tagName === 'td' || tagName === 'th')) {
        return absoluteToDoc(doc, value);
    }
    else if (name === 'srcset' && value) {
        return getAbsoluteSrcsetString(doc, value);
    }
    else if (name === 'style' && value) {
        return absoluteToStylesheet(value, getHref());
    }
    else if (tagName === 'object' && name === 'data' && value) {
        return absoluteToDoc(doc, value);
    }
    else {
        return value;
    }
}
function _isBlockedElement(element, blockClass, blockSelector) {
    if (typeof blockClass === 'string') {
        if (element.classList.contains(blockClass)) {
            return true;
        }
    }
    else {
        for (var eIndex = 0; eIndex < element.classList.length; eIndex++) {
            var className = element.classList[eIndex];
            if (blockClass.test(className)) {
                return true;
            }
        }
    }
    if (blockSelector) {
        return element.matches(blockSelector);
    }
    return false;
}
function needMaskingText(node, maskTextClass, maskTextSelector) {
    if (!node) {
        return false;
    }
    if (node.nodeType === node.ELEMENT_NODE) {
        if (typeof maskTextClass === 'string') {
            if (node.classList.contains(maskTextClass)) {
                return true;
            }
        }
        else {
            for (var eIndex = 0; eIndex < node.classList.length; eIndex++) {
                var className = node.classList[eIndex];
                if (maskTextClass.test(className)) {
                    return true;
                }
            }
        }
        if (maskTextSelector) {
            if (node.matches(maskTextSelector)) {
                return true;
            }
        }
        return needMaskingText(node.parentNode, maskTextClass, maskTextSelector);
    }
    if (node.nodeType === node.TEXT_NODE) {
        return needMaskingText(node.parentNode, maskTextClass, maskTextSelector);
    }
    return needMaskingText(node.parentNode, maskTextClass, maskTextSelector);
}
function onceIframeLoaded(iframeEl, listener, iframeLoadTimeout) {
    var win = iframeEl.contentWindow;
    if (!win) {
        return;
    }
    var fired = false;
    var readyState;
    try {
        readyState = win.document.readyState;
    }
    catch (error) {
        return;
    }
    if (readyState !== 'complete') {
        var timer_1 = setTimeout(function () {
            if (!fired) {
                listener();
                fired = true;
            }
        }, iframeLoadTimeout);
        iframeEl.addEventListener('load', function () {
            clearTimeout(timer_1);
            fired = true;
            listener();
        });
        return;
    }
    var blankUrl = 'about:blank';
    if (win.location.href !== blankUrl ||
        iframeEl.src === blankUrl ||
        iframeEl.src === '') {
        setTimeout(listener, 0);
        return;
    }
    iframeEl.addEventListener('load', listener);
}
function serializeNode(n, options) {
    var _a;
    var doc = options.doc, blockClass = options.blockClass, blockSelector = options.blockSelector, maskTextClass = options.maskTextClass, maskTextSelector = options.maskTextSelector, inlineStylesheet = options.inlineStylesheet, _b = options.maskInputOptions, maskInputOptions = _b === void 0 ? {} : _b, maskTextFn = options.maskTextFn, maskInputFn = options.maskInputFn, _c = options.dataURLOptions, dataURLOptions = _c === void 0 ? {} : _c, inlineImages = options.inlineImages, recordCanvas = options.recordCanvas, keepIframeSrcFn = options.keepIframeSrcFn;
    var rootId;
    if (doc.__sn) {
        var docId = doc.__sn.id;
        rootId = docId === 1 ? undefined : docId;
    }
    switch (n.nodeType) {
        case n.DOCUMENT_NODE:
            if (n.compatMode !== 'CSS1Compat') {
                return {
                    type: NodeType.Document,
                    childNodes: [],
                    compatMode: n.compatMode,
                    rootId: rootId
                };
            }
            else {
                return {
                    type: NodeType.Document,
                    childNodes: [],
                    rootId: rootId
                };
            }
        case n.DOCUMENT_TYPE_NODE:
            return {
                type: NodeType.DocumentType,
                name: n.name,
                publicId: n.publicId,
                systemId: n.systemId,
                rootId: rootId
            };
        case n.ELEMENT_NODE:
            var needBlock = _isBlockedElement(n, blockClass, blockSelector);
            var tagName = getValidTagName(n);
            var attributes_1 = {};
            for (var _i = 0, _d = Array.from(n.attributes); _i < _d.length; _i++) {
                var _e = _d[_i], name_1 = _e.name, value = _e.value;
                attributes_1[name_1] = transformAttribute(doc, tagName, name_1, value);
            }
            if (tagName === 'link' && inlineStylesheet) {
                var stylesheet = Array.from(doc.styleSheets).find(function (s) {
                    return s.href === n.href;
                });
                var cssText = null;
                if (stylesheet) {
                    cssText = getCssRulesString(stylesheet);
                }
                if (cssText) {
                    delete attributes_1.rel;
                    delete attributes_1.href;
                    attributes_1._cssText = absoluteToStylesheet(cssText, stylesheet.href);
                }
            }
            if (tagName === 'style' &&
                n.sheet &&
                !(n.innerText ||
                    n.textContent ||
                    '').trim().length) {
                var cssText = getCssRulesString(n.sheet);
                if (cssText) {
                    attributes_1._cssText = absoluteToStylesheet(cssText, getHref());
                }
            }
            if (tagName === 'input' ||
                tagName === 'textarea' ||
                tagName === 'select') {
                var value = n.value;
                if (attributes_1.type !== 'radio' &&
                    attributes_1.type !== 'checkbox' &&
                    attributes_1.type !== 'submit' &&
                    attributes_1.type !== 'button' &&
                    value) {
                    attributes_1.value = maskInputValue({
                        type: attributes_1.type,
                        tagName: tagName,
                        value: value,
                        maskInputOptions: maskInputOptions,
                        maskInputFn: maskInputFn
                    });
                }
                else if (n.checked) {
                    attributes_1.checked = n.checked;
                }
            }
            if (tagName === 'option') {
                if (n.selected && !maskInputOptions['select']) {
                    attributes_1.selected = true;
                }
                else {
                    delete attributes_1.selected;
                }
            }
            if (tagName === 'canvas' && recordCanvas) {
                if (n.__context === '2d') {
                    if (!is2DCanvasBlank(n)) {
                        attributes_1.rr_dataURL = n.toDataURL(dataURLOptions.type, dataURLOptions.quality);
                    }
                }
                else if (!('__context' in n)) {
                    var canvasDataURL = n.toDataURL(dataURLOptions.type, dataURLOptions.quality);
                    var blankCanvas = document.createElement('canvas');
                    blankCanvas.width = n.width;
                    blankCanvas.height = n.height;
                    var blankCanvasDataURL = blankCanvas.toDataURL(dataURLOptions.type, dataURLOptions.quality);
                    if (canvasDataURL !== blankCanvasDataURL) {
                        attributes_1.rr_dataURL = canvasDataURL;
                    }
                }
            }
            if (tagName === 'img' && inlineImages) {
                if (!canvasService) {
                    canvasService = doc.createElement('canvas');
                    canvasCtx = canvasService.getContext('2d');
                }
                var image_1 = n;
                var oldValue_1 = image_1.crossOrigin;
                image_1.crossOrigin = 'anonymous';
                var recordInlineImage = function () {
                    try {
                        canvasService.width = image_1.naturalWidth;
                        canvasService.height = image_1.naturalHeight;
                        canvasCtx.drawImage(image_1, 0, 0);
                        attributes_1.rr_dataURL = canvasService.toDataURL(dataURLOptions.type, dataURLOptions.quality);
                    }
                    catch (err) {
                        console.warn("Cannot inline img src=" + image_1.currentSrc + "! Error: " + err);
                    }
                    oldValue_1
                        ? (attributes_1.crossOrigin = oldValue_1)
                        : delete attributes_1.crossOrigin;
                };
                if (image_1.complete && image_1.naturalWidth !== 0)
                    recordInlineImage();
                else
                    image_1.onload = recordInlineImage;
            }
            if (tagName === 'audio' || tagName === 'video') {
                attributes_1.rr_mediaState = n.paused
                    ? 'paused'
                    : 'played';
                attributes_1.rr_mediaCurrentTime = n.currentTime;
            }
            if (n.scrollLeft) {
                attributes_1.rr_scrollLeft = n.scrollLeft;
            }
            if (n.scrollTop) {
                attributes_1.rr_scrollTop = n.scrollTop;
            }
            if (needBlock) {
                var _f = n.getBoundingClientRect(), width = _f.width, height = _f.height;
                attributes_1 = {
                    "class": attributes_1["class"],
                    rr_width: width + "px",
                    rr_height: height + "px"
                };
            }
            if (tagName === 'iframe' && !keepIframeSrcFn(attributes_1.src)) {
                if (!n.contentDocument) {
                    attributes_1.rr_src = attributes_1.src;
                }
                delete attributes_1.src;
            }
            return {
                type: NodeType.Element,
                tagName: tagName,
                attributes: attributes_1,
                childNodes: [],
                isSVG: isSVGElement(n) || undefined,
                needBlock: needBlock,
                rootId: rootId
            };
        case n.TEXT_NODE:
            var parentTagName = n.parentNode && n.parentNode.tagName;
            var textContent = n.textContent;
            var isStyle = parentTagName === 'STYLE' ? true : undefined;
            var isScript = parentTagName === 'SCRIPT' ? true : undefined;
            if (isStyle && textContent) {
                try {
                    if (n.nextSibling || n.previousSibling) {
                    }
                    else if ((_a = n.parentNode.sheet) === null || _a === void 0 ? void 0 : _a.cssRules) {
                        textContent = stringifyStyleSheet(n.parentNode.sheet);
                    }
                }
                catch (err) {
                    console.warn("Cannot get CSS styles from text's parentNode. Error: " + err, n);
                }
                textContent = absoluteToStylesheet(textContent, getHref());
            }
            if (isScript) {
                textContent = 'SCRIPT_PLACEHOLDER';
            }
            if (!isStyle &&
                !isScript &&
                needMaskingText(n, maskTextClass, maskTextSelector) &&
                textContent) {
                textContent = maskTextFn
                    ? maskTextFn(textContent)
                    : textContent.replace(/[\S]/g, '*');
            }
            return {
                type: NodeType.Text,
                textContent: textContent || '',
                isStyle: isStyle,
                rootId: rootId
            };
        case n.CDATA_SECTION_NODE:
            return {
                type: NodeType.CDATA,
                textContent: '',
                rootId: rootId
            };
        case n.COMMENT_NODE:
            return {
                type: NodeType.Comment,
                textContent: n.textContent || '',
                rootId: rootId
            };
        default:
            return false;
    }
}
function lowerIfExists(maybeAttr) {
    if (maybeAttr === undefined) {
        return '';
    }
    else {
        return maybeAttr.toLowerCase();
    }
}
function slimDOMExcluded(sn, slimDOMOptions) {
    if (slimDOMOptions.comment && sn.type === NodeType.Comment) {
        return true;
    }
    else if (sn.type === NodeType.Element) {
        if (slimDOMOptions.script &&
            (sn.tagName === 'script' ||
                (sn.tagName === 'link' &&
                    sn.attributes.rel === 'preload' &&
                    sn.attributes.as === 'script') ||
                (sn.tagName === 'link' &&
                    sn.attributes.rel === 'prefetch' &&
                    typeof sn.attributes.href === 'string' &&
                    sn.attributes.href.endsWith('.js')))) {
            return true;
        }
        else if (slimDOMOptions.headFavicon &&
            ((sn.tagName === 'link' && sn.attributes.rel === 'shortcut icon') ||
                (sn.tagName === 'meta' &&
                    (lowerIfExists(sn.attributes.name).match(/^msapplication-tile(image|color)$/) ||
                        lowerIfExists(sn.attributes.name) === 'application-name' ||
                        lowerIfExists(sn.attributes.rel) === 'icon' ||
                        lowerIfExists(sn.attributes.rel) === 'apple-touch-icon' ||
                        lowerIfExists(sn.attributes.rel) === 'shortcut icon')))) {
            return true;
        }
        else if (sn.tagName === 'meta') {
            if (slimDOMOptions.headMetaDescKeywords &&
                lowerIfExists(sn.attributes.name).match(/^description|keywords$/)) {
                return true;
            }
            else if (slimDOMOptions.headMetaSocial &&
                (lowerIfExists(sn.attributes.property).match(/^(og|twitter|fb):/) ||
                    lowerIfExists(sn.attributes.name).match(/^(og|twitter):/) ||
                    lowerIfExists(sn.attributes.name) === 'pinterest')) {
                return true;
            }
            else if (slimDOMOptions.headMetaRobots &&
                (lowerIfExists(sn.attributes.name) === 'robots' ||
                    lowerIfExists(sn.attributes.name) === 'googlebot' ||
                    lowerIfExists(sn.attributes.name) === 'bingbot')) {
                return true;
            }
            else if (slimDOMOptions.headMetaHttpEquiv &&
                sn.attributes['http-equiv'] !== undefined) {
                return true;
            }
            else if (slimDOMOptions.headMetaAuthorship &&
                (lowerIfExists(sn.attributes.name) === 'author' ||
                    lowerIfExists(sn.attributes.name) === 'generator' ||
                    lowerIfExists(sn.attributes.name) === 'framework' ||
                    lowerIfExists(sn.attributes.name) === 'publisher' ||
                    lowerIfExists(sn.attributes.name) === 'progid' ||
                    lowerIfExists(sn.attributes.property).match(/^article:/) ||
                    lowerIfExists(sn.attributes.property).match(/^product:/))) {
                return true;
            }
            else if (slimDOMOptions.headMetaVerification &&
                (lowerIfExists(sn.attributes.name) === 'google-site-verification' ||
                    lowerIfExists(sn.attributes.name) === 'yandex-verification' ||
                    lowerIfExists(sn.attributes.name) === 'csrf-token' ||
                    lowerIfExists(sn.attributes.name) === 'p:domain_verify' ||
                    lowerIfExists(sn.attributes.name) === 'verify-v1' ||
                    lowerIfExists(sn.attributes.name) === 'verification' ||
                    lowerIfExists(sn.attributes.name) === 'shopify-checkout-api-token')) {
                return true;
            }
        }
    }
    return false;
}
function serializeNodeWithId(n, options) {
    var doc = options.doc, map = options.map, blockClass = options.blockClass, blockSelector = options.blockSelector, maskTextClass = options.maskTextClass, maskTextSelector = options.maskTextSelector, _a = options.skipChild, skipChild = _a === void 0 ? false : _a, _b = options.inlineStylesheet, inlineStylesheet = _b === void 0 ? true : _b, _c = options.maskInputOptions, maskInputOptions = _c === void 0 ? {} : _c, maskTextFn = options.maskTextFn, maskInputFn = options.maskInputFn, slimDOMOptions = options.slimDOMOptions, _d = options.dataURLOptions, dataURLOptions = _d === void 0 ? {} : _d, _e = options.inlineImages, inlineImages = _e === void 0 ? false : _e, _f = options.recordCanvas, recordCanvas = _f === void 0 ? false : _f, onSerialize = options.onSerialize, onIframeLoad = options.onIframeLoad, _g = options.iframeLoadTimeout, iframeLoadTimeout = _g === void 0 ? 5000 : _g, _h = options.keepIframeSrcFn, keepIframeSrcFn = _h === void 0 ? function () { return false; } : _h;
    var _j = options.preserveWhiteSpace, preserveWhiteSpace = _j === void 0 ? true : _j;
    var _serializedNode = serializeNode(n, {
        doc: doc,
        blockClass: blockClass,
        blockSelector: blockSelector,
        maskTextClass: maskTextClass,
        maskTextSelector: maskTextSelector,
        inlineStylesheet: inlineStylesheet,
        maskInputOptions: maskInputOptions,
        maskTextFn: maskTextFn,
        maskInputFn: maskInputFn,
        dataURLOptions: dataURLOptions,
        inlineImages: inlineImages,
        recordCanvas: recordCanvas,
        keepIframeSrcFn: keepIframeSrcFn
    });
    if (!_serializedNode) {
        console.warn(n, 'not serialized');
        return null;
    }
    var id;
    if ('__sn' in n) {
        id = n.__sn.id;
    }
    else if (slimDOMExcluded(_serializedNode, slimDOMOptions) ||
        (!preserveWhiteSpace &&
            _serializedNode.type === NodeType.Text &&
            !_serializedNode.isStyle &&
            !_serializedNode.textContent.replace(/^\s+|\s+$/gm, '').length)) {
        id = IGNORED_NODE;
    }
    else {
        id = genId();
    }
    var serializedNode = Object.assign(_serializedNode, { id: id });
    n.__sn = serializedNode;
    if (id === IGNORED_NODE) {
        return null;
    }
    map[id] = n;
    if (onSerialize) {
        onSerialize(n);
    }
    var recordChild = !skipChild;
    if (serializedNode.type === NodeType.Element) {
        recordChild = recordChild && !serializedNode.needBlock;
        delete serializedNode.needBlock;
        if (n.shadowRoot)
            serializedNode.isShadowHost = true;
    }
    if ((serializedNode.type === NodeType.Document ||
        serializedNode.type === NodeType.Element) &&
        recordChild) {
        if (slimDOMOptions.headWhitespace &&
            _serializedNode.type === NodeType.Element &&
            _serializedNode.tagName === 'head') {
            preserveWhiteSpace = false;
        }
        var bypassOptions = {
            doc: doc,
            map: map,
            blockClass: blockClass,
            blockSelector: blockSelector,
            maskTextClass: maskTextClass,
            maskTextSelector: maskTextSelector,
            skipChild: skipChild,
            inlineStylesheet: inlineStylesheet,
            maskInputOptions: maskInputOptions,
            maskTextFn: maskTextFn,
            maskInputFn: maskInputFn,
            slimDOMOptions: slimDOMOptions,
            dataURLOptions: dataURLOptions,
            inlineImages: inlineImages,
            recordCanvas: recordCanvas,
            preserveWhiteSpace: preserveWhiteSpace,
            onSerialize: onSerialize,
            onIframeLoad: onIframeLoad,
            iframeLoadTimeout: iframeLoadTimeout,
            keepIframeSrcFn: keepIframeSrcFn
        };
        for (var _i = 0, _k = Array.from(n.childNodes); _i < _k.length; _i++) {
            var childN = _k[_i];
            var serializedChildNode = serializeNodeWithId(childN, bypassOptions);
            if (serializedChildNode) {
                serializedNode.childNodes.push(serializedChildNode);
            }
        }
        if (isElement(n) && n.shadowRoot) {
            for (var _l = 0, _m = Array.from(n.shadowRoot.childNodes); _l < _m.length; _l++) {
                var childN = _m[_l];
                var serializedChildNode = serializeNodeWithId(childN, bypassOptions);
                if (serializedChildNode) {
                    serializedChildNode.isShadow = true;
                    serializedNode.childNodes.push(serializedChildNode);
                }
            }
        }
    }
    if (n.parentNode && isShadowRoot(n.parentNode)) {
        serializedNode.isShadow = true;
    }
    if (serializedNode.type === NodeType.Element &&
        serializedNode.tagName === 'iframe') {
        onceIframeLoaded(n, function () {
            var iframeDoc = n.contentDocument;
            if (iframeDoc && onIframeLoad) {
                var serializedIframeNode = serializeNodeWithId(iframeDoc, {
                    doc: iframeDoc,
                    map: map,
                    blockClass: blockClass,
                    blockSelector: blockSelector,
                    maskTextClass: maskTextClass,
                    maskTextSelector: maskTextSelector,
                    skipChild: false,
                    inlineStylesheet: inlineStylesheet,
                    maskInputOptions: maskInputOptions,
                    maskTextFn: maskTextFn,
                    maskInputFn: maskInputFn,
                    slimDOMOptions: slimDOMOptions,
                    dataURLOptions: dataURLOptions,
                    inlineImages: inlineImages,
                    recordCanvas: recordCanvas,
                    preserveWhiteSpace: preserveWhiteSpace,
                    onSerialize: onSerialize,
                    onIframeLoad: onIframeLoad,
                    iframeLoadTimeout: iframeLoadTimeout,
                    keepIframeSrcFn: keepIframeSrcFn
                });
                if (serializedIframeNode) {
                    onIframeLoad(n, serializedIframeNode);
                }
            }
        }, iframeLoadTimeout);
    }
    return serializedNode;
}
function snapshot(n, options) {
    var _a = options || {}, _b = _a.blockClass, blockClass = _b === void 0 ? 'rr-block' : _b, _c = _a.blockSelector, blockSelector = _c === void 0 ? null : _c, _d = _a.maskTextClass, maskTextClass = _d === void 0 ? 'rr-mask' : _d, _e = _a.maskTextSelector, maskTextSelector = _e === void 0 ? null : _e, _f = _a.inlineStylesheet, inlineStylesheet = _f === void 0 ? true : _f, _g = _a.inlineImages, inlineImages = _g === void 0 ? false : _g, _h = _a.recordCanvas, recordCanvas = _h === void 0 ? false : _h, _j = _a.maskAllInputs, maskAllInputs = _j === void 0 ? false : _j, maskTextFn = _a.maskTextFn, maskInputFn = _a.maskInputFn, _k = _a.slimDOM, slimDOM = _k === void 0 ? false : _k, dataURLOptions = _a.dataURLOptions, preserveWhiteSpace = _a.preserveWhiteSpace, onSerialize = _a.onSerialize, onIframeLoad = _a.onIframeLoad, iframeLoadTimeout = _a.iframeLoadTimeout, _l = _a.keepIframeSrcFn, keepIframeSrcFn = _l === void 0 ? function () { return false; } : _l;
    var idNodeMap = {};
    var maskInputOptions = maskAllInputs === true
        ? {
            color: true,
            date: true,
            'datetime-local': true,
            email: true,
            month: true,
            number: true,
            range: true,
            search: true,
            tel: true,
            text: true,
            time: true,
            url: true,
            week: true,
            textarea: true,
            select: true,
            password: true
        }
        : maskAllInputs === false
            ? {
                password: true
            }
            : maskAllInputs;
    var slimDOMOptions = slimDOM === true || slimDOM === 'all'
        ?
            {
                script: true,
                comment: true,
                headFavicon: true,
                headWhitespace: true,
                headMetaDescKeywords: slimDOM === 'all',
                headMetaSocial: true,
                headMetaRobots: true,
                headMetaHttpEquiv: true,
                headMetaAuthorship: true,
                headMetaVerification: true
            }
        : slimDOM === false
            ? {}
            : slimDOM;
    return [
        serializeNodeWithId(n, {
            doc: n,
            map: idNodeMap,
            blockClass: blockClass,
            blockSelector: blockSelector,
            maskTextClass: maskTextClass,
            maskTextSelector: maskTextSelector,
            skipChild: false,
            inlineStylesheet: inlineStylesheet,
            maskInputOptions: maskInputOptions,
            maskTextFn: maskTextFn,
            maskInputFn: maskInputFn,
            slimDOMOptions: slimDOMOptions,
            dataURLOptions: dataURLOptions,
            inlineImages: inlineImages,
            recordCanvas: recordCanvas,
            preserveWhiteSpace: preserveWhiteSpace,
            onSerialize: onSerialize,
            onIframeLoad: onIframeLoad,
            iframeLoadTimeout: iframeLoadTimeout,
            keepIframeSrcFn: keepIframeSrcFn
        }),
        idNodeMap,
    ];
}

var EventType;
(function (EventType) {
    EventType[EventType["DomContentLoaded"] = 0] = "DomContentLoaded";
    EventType[EventType["Load"] = 1] = "Load";
    EventType[EventType["FullSnapshot"] = 2] = "FullSnapshot";
    EventType[EventType["IncrementalSnapshot"] = 3] = "IncrementalSnapshot";
    EventType[EventType["Meta"] = 4] = "Meta";
    EventType[EventType["Custom"] = 5] = "Custom";
    EventType[EventType["Plugin"] = 6] = "Plugin";
})(EventType || (EventType = {}));
var IncrementalSource;
(function (IncrementalSource) {
    IncrementalSource[IncrementalSource["Mutation"] = 0] = "Mutation";
    IncrementalSource[IncrementalSource["MouseMove"] = 1] = "MouseMove";
    IncrementalSource[IncrementalSource["MouseInteraction"] = 2] = "MouseInteraction";
    IncrementalSource[IncrementalSource["Scroll"] = 3] = "Scroll";
    IncrementalSource[IncrementalSource["ViewportResize"] = 4] = "ViewportResize";
    IncrementalSource[IncrementalSource["Input"] = 5] = "Input";
    IncrementalSource[IncrementalSource["TouchMove"] = 6] = "TouchMove";
    IncrementalSource[IncrementalSource["MediaInteraction"] = 7] = "MediaInteraction";
    IncrementalSource[IncrementalSource["StyleSheetRule"] = 8] = "StyleSheetRule";
    IncrementalSource[IncrementalSource["CanvasMutation"] = 9] = "CanvasMutation";
    IncrementalSource[IncrementalSource["Font"] = 10] = "Font";
    IncrementalSource[IncrementalSource["Log"] = 11] = "Log";
    IncrementalSource[IncrementalSource["Drag"] = 12] = "Drag";
    IncrementalSource[IncrementalSource["StyleDeclaration"] = 13] = "StyleDeclaration";
})(IncrementalSource || (IncrementalSource = {}));
var MouseInteractions;
(function (MouseInteractions) {
    MouseInteractions[MouseInteractions["MouseUp"] = 0] = "MouseUp";
    MouseInteractions[MouseInteractions["MouseDown"] = 1] = "MouseDown";
    MouseInteractions[MouseInteractions["Click"] = 2] = "Click";
    MouseInteractions[MouseInteractions["ContextMenu"] = 3] = "ContextMenu";
    MouseInteractions[MouseInteractions["DblClick"] = 4] = "DblClick";
    MouseInteractions[MouseInteractions["Focus"] = 5] = "Focus";
    MouseInteractions[MouseInteractions["Blur"] = 6] = "Blur";
    MouseInteractions[MouseInteractions["TouchStart"] = 7] = "TouchStart";
    MouseInteractions[MouseInteractions["TouchMove_Departed"] = 8] = "TouchMove_Departed";
    MouseInteractions[MouseInteractions["TouchEnd"] = 9] = "TouchEnd";
    MouseInteractions[MouseInteractions["TouchCancel"] = 10] = "TouchCancel";
})(MouseInteractions || (MouseInteractions = {}));
var CanvasContext;
(function (CanvasContext) {
    CanvasContext[CanvasContext["2D"] = 0] = "2D";
    CanvasContext[CanvasContext["WebGL"] = 1] = "WebGL";
    CanvasContext[CanvasContext["WebGL2"] = 2] = "WebGL2";
})(CanvasContext || (CanvasContext = {}));
var MediaInteractions;
(function (MediaInteractions) {
    MediaInteractions[MediaInteractions["Play"] = 0] = "Play";
    MediaInteractions[MediaInteractions["Pause"] = 1] = "Pause";
    MediaInteractions[MediaInteractions["Seeked"] = 2] = "Seeked";
    MediaInteractions[MediaInteractions["VolumeChange"] = 3] = "VolumeChange";
})(MediaInteractions || (MediaInteractions = {}));
var ReplayerEvents;
(function (ReplayerEvents) {
    ReplayerEvents["Start"] = "start";
    ReplayerEvents["Pause"] = "pause";
    ReplayerEvents["Resume"] = "resume";
    ReplayerEvents["Resize"] = "resize";
    ReplayerEvents["Finish"] = "finish";
    ReplayerEvents["FullsnapshotRebuilded"] = "fullsnapshot-rebuilded";
    ReplayerEvents["LoadStylesheetStart"] = "load-stylesheet-start";
    ReplayerEvents["LoadStylesheetEnd"] = "load-stylesheet-end";
    ReplayerEvents["SkipStart"] = "skip-start";
    ReplayerEvents["SkipEnd"] = "skip-end";
    ReplayerEvents["MouseInteraction"] = "mouse-interaction";
    ReplayerEvents["EventCast"] = "event-cast";
    ReplayerEvents["CustomEvent"] = "custom-event";
    ReplayerEvents["Flush"] = "flush";
    ReplayerEvents["StateChange"] = "state-change";
    ReplayerEvents["PlayBack"] = "play-back";
})(ReplayerEvents || (ReplayerEvents = {}));

function on(type, fn, target) {
    if (target === void 0) { target = document; }
    var options = { capture: true, passive: true };
    target.addEventListener(type, fn, options);
    return function () { return target.removeEventListener(type, fn, options); };
}
function createMirror() {
    return {
        map: {},
        getId: function (n) {
            if (!n || !n.__sn) {
                return -1;
            }
            return n.__sn.id;
        },
        getNode: function (id) {
            return this.map[id] || null;
        },
        removeNodeFromMap: function (n) {
            var _this = this;
            var id = n.__sn && n.__sn.id;
            delete this.map[id];
            if (n.childNodes) {
                n.childNodes.forEach(function (child) {
                    return _this.removeNodeFromMap(child);
                });
            }
        },
        has: function (id) {
            return this.map.hasOwnProperty(id);
        },
        reset: function () {
            this.map = {};
        },
    };
}
var DEPARTED_MIRROR_ACCESS_WARNING = 'Please stop import mirror directly. Instead of that,' +
    '\r\n' +
    'now you can use replayer.getMirror() to access the mirror instance of a replayer,' +
    '\r\n' +
    'or you can use record.mirror to access the mirror instance during recording.';
var _mirror = {
    map: {},
    getId: function () {
        console.error(DEPARTED_MIRROR_ACCESS_WARNING);
        return -1;
    },
    getNode: function () {
        console.error(DEPARTED_MIRROR_ACCESS_WARNING);
        return null;
    },
    removeNodeFromMap: function () {
        console.error(DEPARTED_MIRROR_ACCESS_WARNING);
    },
    has: function () {
        console.error(DEPARTED_MIRROR_ACCESS_WARNING);
        return false;
    },
    reset: function () {
        console.error(DEPARTED_MIRROR_ACCESS_WARNING);
    },
};
if (typeof window !== 'undefined' && window.Proxy && window.Reflect) {
    _mirror = new Proxy(_mirror, {
        get: function (target, prop, receiver) {
            if (prop === 'map') {
                console.error(DEPARTED_MIRROR_ACCESS_WARNING);
            }
            return Reflect.get(target, prop, receiver);
        },
    });
}
function throttle(func, wait, options) {
    if (options === void 0) { options = {}; }
    var timeout = null;
    var previous = 0;
    return function (arg) {
        var now = Date.now();
        if (!previous && options.leading === false) {
            previous = now;
        }
        var remaining = wait - (now - previous);
        var context = this;
        var args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            func.apply(context, args);
        }
        else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(function () {
                previous = options.leading === false ? 0 : Date.now();
                timeout = null;
                func.apply(context, args);
            }, remaining);
        }
    };
}
function hookSetter(target, key, d, isRevoked, win) {
    if (win === void 0) { win = window; }
    var original = win.Object.getOwnPropertyDescriptor(target, key);
    win.Object.defineProperty(target, key, isRevoked
        ? d
        : {
            set: function (value) {
                var _this = this;
                setTimeout(function () {
                    d.set.call(_this, value);
                }, 0);
                if (original && original.set) {
                    original.set.call(this, value);
                }
            },
        });
    return function () { return hookSetter(target, key, original || {}, true); };
}
function patch(source, name, replacement) {
    try {
        if (!(name in source)) {
            return function () { };
        }
        var original_1 = source[name];
        var wrapped = replacement(original_1);
        if (typeof wrapped === 'function') {
            wrapped.prototype = wrapped.prototype || {};
            Object.defineProperties(wrapped, {
                __rrweb_original__: {
                    enumerable: false,
                    value: original_1,
                },
            });
        }
        source[name] = wrapped;
        return function () {
            source[name] = original_1;
        };
    }
    catch (_a) {
        return function () { };
    }
}
function getWindowHeight() {
    return (window.innerHeight ||
        (document.documentElement && document.documentElement.clientHeight) ||
        (document.body && document.body.clientHeight));
}
function getWindowWidth() {
    return (window.innerWidth ||
        (document.documentElement && document.documentElement.clientWidth) ||
        (document.body && document.body.clientWidth));
}
function isBlocked(node, blockClass) {
    if (!node) {
        return false;
    }
    if (node.nodeType === node.ELEMENT_NODE) {
        var needBlock_1 = false;
        if (typeof blockClass === 'string') {
            if (node.closest !== undefined) {
                return node.closest('.' + blockClass) !== null;
            }
            else {
                needBlock_1 = node.classList.contains(blockClass);
            }
        }
        else {
            node.classList.forEach(function (className) {
                if (blockClass.test(className)) {
                    needBlock_1 = true;
                }
            });
        }
        return needBlock_1 || isBlocked(node.parentNode, blockClass);
    }
    if (node.nodeType === node.TEXT_NODE) {
        return isBlocked(node.parentNode, blockClass);
    }
    return isBlocked(node.parentNode, blockClass);
}
function isIgnored(n) {
    if ('__sn' in n) {
        return n.__sn.id === IGNORED_NODE;
    }
    return false;
}
function isAncestorRemoved(target, mirror) {
    if (isShadowRoot(target)) {
        return false;
    }
    var id = mirror.getId(target);
    if (!mirror.has(id)) {
        return true;
    }
    if (target.parentNode &&
        target.parentNode.nodeType === target.DOCUMENT_NODE) {
        return false;
    }
    if (!target.parentNode) {
        return true;
    }
    return isAncestorRemoved(target.parentNode, mirror);
}
function isTouchEvent(event) {
    return Boolean(event.changedTouches);
}
function polyfill(win) {
    if (win === void 0) { win = window; }
    if ('NodeList' in win && !win.NodeList.prototype.forEach) {
        win.NodeList.prototype.forEach = Array.prototype
            .forEach;
    }
    if ('DOMTokenList' in win && !win.DOMTokenList.prototype.forEach) {
        win.DOMTokenList.prototype.forEach = Array.prototype
            .forEach;
    }
    if (!Node.prototype.contains) {
        Node.prototype.contains = function contains(node) {
            if (!(0 in arguments)) {
                throw new TypeError('1 argument is required');
            }
            do {
                if (this === node) {
                    return true;
                }
            } while ((node = node && node.parentNode));
            return false;
        };
    }
}
function isIframeINode(node) {
    if ('__sn' in node) {
        return (node.__sn.type === NodeType.Element && node.__sn.tagName === 'iframe');
    }
    return false;
}
function hasShadowRoot(n) {
    return Boolean(n === null || n === void 0 ? void 0 : n.shadowRoot);
}

function isNodeInLinkedList(n) {
    return '__ln' in n;
}
var DoubleLinkedList = (function () {
    function DoubleLinkedList() {
        this.length = 0;
        this.head = null;
    }
    DoubleLinkedList.prototype.get = function (position) {
        if (position >= this.length) {
            throw new Error('Position outside of list range');
        }
        var current = this.head;
        for (var index = 0; index < position; index++) {
            current = (current === null || current === void 0 ? void 0 : current.next) || null;
        }
        return current;
    };
    DoubleLinkedList.prototype.addNode = function (n) {
        var node = {
            value: n,
            previous: null,
            next: null,
        };
        n.__ln = node;
        if (n.previousSibling && isNodeInLinkedList(n.previousSibling)) {
            var current = n.previousSibling.__ln.next;
            node.next = current;
            node.previous = n.previousSibling.__ln;
            n.previousSibling.__ln.next = node;
            if (current) {
                current.previous = node;
            }
        }
        else if (n.nextSibling &&
            isNodeInLinkedList(n.nextSibling) &&
            n.nextSibling.__ln.previous) {
            var current = n.nextSibling.__ln.previous;
            node.previous = current;
            node.next = n.nextSibling.__ln;
            n.nextSibling.__ln.previous = node;
            if (current) {
                current.next = node;
            }
        }
        else {
            if (this.head) {
                this.head.previous = node;
            }
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    };
    DoubleLinkedList.prototype.removeNode = function (n) {
        var current = n.__ln;
        if (!this.head) {
            return;
        }
        if (!current.previous) {
            this.head = current.next;
            if (this.head) {
                this.head.previous = null;
            }
        }
        else {
            current.previous.next = current.next;
            if (current.next) {
                current.next.previous = current.previous;
            }
        }
        if (n.__ln) {
            delete n.__ln;
        }
        this.length--;
    };
    return DoubleLinkedList;
}());
var moveKey = function (id, parentId) { return "".concat(id, "@").concat(parentId); };
function isINode(n) {
    return '__sn' in n;
}
var MutationBuffer = (function () {
    function MutationBuffer() {
        var _this = this;
        this.frozen = false;
        this.locked = false;
        this.texts = [];
        this.attributes = [];
        this.removes = [];
        this.mapRemoves = [];
        this.movedMap = {};
        this.addedSet = new Set();
        this.movedSet = new Set();
        this.droppedSet = new Set();
        this.processMutations = function (mutations) {
            mutations.forEach(_this.processMutation);
            _this.emit();
        };
        this.emit = function () {
            var e_1, _a, e_2, _b;
            if (_this.frozen || _this.locked) {
                return;
            }
            var adds = [];
            var addList = new DoubleLinkedList();
            var getNextId = function (n) {
                var ns = n;
                var nextId = IGNORED_NODE;
                while (nextId === IGNORED_NODE) {
                    ns = ns && ns.nextSibling;
                    nextId = ns && _this.mirror.getId(ns);
                }
                return nextId;
            };
            var pushAdd = function (n) {
                var _a, _b, _c, _d, _e;
                var shadowHost = n.getRootNode
                    ? (_a = n.getRootNode()) === null || _a === void 0 ? void 0 : _a.host
                    : null;
                var rootShadowHost = shadowHost;
                while ((_c = (_b = rootShadowHost === null || rootShadowHost === void 0 ? void 0 : rootShadowHost.getRootNode) === null || _b === void 0 ? void 0 : _b.call(rootShadowHost)) === null || _c === void 0 ? void 0 : _c.host)
                    rootShadowHost =
                        ((_e = (_d = rootShadowHost === null || rootShadowHost === void 0 ? void 0 : rootShadowHost.getRootNode) === null || _d === void 0 ? void 0 : _d.call(rootShadowHost)) === null || _e === void 0 ? void 0 : _e.host) ||
                            null;
                var notInDoc = !_this.doc.contains(n) &&
                    (rootShadowHost === null || !_this.doc.contains(rootShadowHost));
                if (!n.parentNode || notInDoc) {
                    return;
                }
                var parentId = isShadowRoot(n.parentNode)
                    ? _this.mirror.getId(shadowHost)
                    : _this.mirror.getId(n.parentNode);
                var nextId = getNextId(n);
                if (parentId === -1 || nextId === -1) {
                    return addList.addNode(n);
                }
                var sn = serializeNodeWithId(n, {
                    doc: _this.doc,
                    map: _this.mirror.map,
                    blockClass: _this.blockClass,
                    blockSelector: _this.blockSelector,
                    maskTextClass: _this.maskTextClass,
                    maskTextSelector: _this.maskTextSelector,
                    skipChild: true,
                    inlineStylesheet: _this.inlineStylesheet,
                    maskInputOptions: _this.maskInputOptions,
                    maskTextFn: _this.maskTextFn,
                    maskInputFn: _this.maskInputFn,
                    slimDOMOptions: _this.slimDOMOptions,
                    recordCanvas: _this.recordCanvas,
                    inlineImages: _this.inlineImages,
                    onSerialize: function (currentN) {
                        if (isIframeINode(currentN)) {
                            _this.iframeManager.addIframe(currentN);
                        }
                        if (hasShadowRoot(n)) {
                            _this.shadowDomManager.addShadowRoot(n.shadowRoot, document);
                        }
                    },
                    onIframeLoad: function (iframe, childSn) {
                        _this.iframeManager.attachIframe(iframe, childSn);
                        _this.shadowDomManager.observeAttachShadow(iframe);
                    },
                });
                if (sn) {
                    adds.push({
                        parentId: parentId,
                        nextId: nextId,
                        node: sn,
                    });
                }
            };
            while (_this.mapRemoves.length) {
                _this.mirror.removeNodeFromMap(_this.mapRemoves.shift());
            }
            try {
                for (var _c = __values(_this.movedSet), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var n = _d.value;
                    if (isParentRemoved(_this.removes, n, _this.mirror) &&
                        !_this.movedSet.has(n.parentNode)) {
                        continue;
                    }
                    pushAdd(n);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
            try {
                for (var _e = __values(_this.addedSet), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var n = _f.value;
                    if (!isAncestorInSet(_this.droppedSet, n) &&
                        !isParentRemoved(_this.removes, n, _this.mirror)) {
                        pushAdd(n);
                    }
                    else if (isAncestorInSet(_this.movedSet, n)) {
                        pushAdd(n);
                    }
                    else {
                        _this.droppedSet.add(n);
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                }
                finally { if (e_2) throw e_2.error; }
            }
            var candidate = null;
            while (addList.length) {
                var node = null;
                if (candidate) {
                    var parentId = _this.mirror.getId(candidate.value.parentNode);
                    var nextId = getNextId(candidate.value);
                    if (parentId !== -1 && nextId !== -1) {
                        node = candidate;
                    }
                }
                if (!node) {
                    for (var index = addList.length - 1; index >= 0; index--) {
                        var _node = addList.get(index);
                        if (_node) {
                            var parentId = _this.mirror.getId(_node.value.parentNode);
                            var nextId = getNextId(_node.value);
                            if (parentId !== -1 && nextId !== -1) {
                                node = _node;
                                break;
                            }
                        }
                    }
                }
                if (!node) {
                    while (addList.head) {
                        addList.removeNode(addList.head.value);
                    }
                    break;
                }
                candidate = node.previous;
                addList.removeNode(node.value);
                pushAdd(node.value);
            }
            var payload = {
                texts: _this.texts
                    .map(function (text) { return ({
                    id: _this.mirror.getId(text.node),
                    value: text.value,
                }); })
                    .filter(function (text) { return _this.mirror.has(text.id); }),
                attributes: _this.attributes
                    .map(function (attribute) { return ({
                    id: _this.mirror.getId(attribute.node),
                    attributes: attribute.attributes,
                }); })
                    .filter(function (attribute) { return _this.mirror.has(attribute.id); }),
                removes: _this.removes,
                adds: adds,
            };
            if (!payload.texts.length &&
                !payload.attributes.length &&
                !payload.removes.length &&
                !payload.adds.length) {
                return;
            }
            _this.texts = [];
            _this.attributes = [];
            _this.removes = [];
            _this.addedSet = new Set();
            _this.movedSet = new Set();
            _this.droppedSet = new Set();
            _this.movedMap = {};
            _this.mutationCb(payload);
        };
        this.processMutation = function (m) {
            var e_3, _a, e_4, _b;
            if (isIgnored(m.target)) {
                return;
            }
            switch (m.type) {
                case 'characterData': {
                    var value = m.target.textContent;
                    if (!isBlocked(m.target, _this.blockClass) && value !== m.oldValue) {
                        _this.texts.push({
                            value: needMaskingText(m.target, _this.maskTextClass, _this.maskTextSelector) && value
                                ? _this.maskTextFn
                                    ? _this.maskTextFn(value)
                                    : value.replace(/[\S]/g, '*')
                                : value,
                            node: m.target,
                        });
                    }
                    break;
                }
                case 'attributes': {
                    var target = m.target;
                    var value = m.target.getAttribute(m.attributeName);
                    if (m.attributeName === 'value') {
                        value = maskInputValue({
                            maskInputOptions: _this.maskInputOptions,
                            tagName: m.target.tagName,
                            type: m.target.getAttribute('type'),
                            value: value,
                            maskInputFn: _this.maskInputFn,
                        });
                    }
                    if (isBlocked(m.target, _this.blockClass) || value === m.oldValue) {
                        return;
                    }
                    var item = _this.attributes.find(function (a) { return a.node === m.target; });
                    if (!item) {
                        item = {
                            node: m.target,
                            attributes: {},
                        };
                        _this.attributes.push(item);
                    }
                    if (m.attributeName === 'style') {
                        var old = _this.doc.createElement('span');
                        if (m.oldValue) {
                            old.setAttribute('style', m.oldValue);
                        }
                        if (item.attributes.style === undefined ||
                            item.attributes.style === null) {
                            item.attributes.style = {};
                        }
                        var styleObj = item.attributes.style;
                        try {
                            for (var _c = __values(Array.from(target.style)), _d = _c.next(); !_d.done; _d = _c.next()) {
                                var pname = _d.value;
                                var newValue = target.style.getPropertyValue(pname);
                                var newPriority = target.style.getPropertyPriority(pname);
                                if (newValue !== old.style.getPropertyValue(pname) ||
                                    newPriority !== old.style.getPropertyPriority(pname)) {
                                    if (newPriority === '') {
                                        styleObj[pname] = newValue;
                                    }
                                    else {
                                        styleObj[pname] = [newValue, newPriority];
                                    }
                                }
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                        try {
                            for (var _e = __values(Array.from(old.style)), _f = _e.next(); !_f.done; _f = _e.next()) {
                                var pname = _f.value;
                                if (target.style.getPropertyValue(pname) === '') {
                                    styleObj[pname] = false;
                                }
                            }
                        }
                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                        finally {
                            try {
                                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                            }
                            finally { if (e_4) throw e_4.error; }
                        }
                    }
                    else {
                        item.attributes[m.attributeName] = transformAttribute(_this.doc, m.target.tagName, m.attributeName, value);
                    }
                    break;
                }
                case 'childList': {
                    m.addedNodes.forEach(function (n) { return _this.genAdds(n, m.target); });
                    m.removedNodes.forEach(function (n) {
                        var nodeId = _this.mirror.getId(n);
                        var parentId = isShadowRoot(m.target)
                            ? _this.mirror.getId(m.target.host)
                            : _this.mirror.getId(m.target);
                        if (isBlocked(m.target, _this.blockClass) || isIgnored(n)) {
                            return;
                        }
                        if (_this.addedSet.has(n)) {
                            deepDelete(_this.addedSet, n);
                            _this.droppedSet.add(n);
                        }
                        else if (_this.addedSet.has(m.target) && nodeId === -1) ;
                        else if (isAncestorRemoved(m.target, _this.mirror)) ;
                        else if (_this.movedSet.has(n) &&
                            _this.movedMap[moveKey(nodeId, parentId)]) {
                            deepDelete(_this.movedSet, n);
                        }
                        else {
                            _this.removes.push({
                                parentId: parentId,
                                id: nodeId,
                                isShadow: isShadowRoot(m.target) ? true : undefined,
                            });
                        }
                        _this.mapRemoves.push(n);
                    });
                    break;
                }
            }
        };
        this.genAdds = function (n, target) {
            if (target && isBlocked(target, _this.blockClass)) {
                return;
            }
            if (isINode(n)) {
                if (isIgnored(n)) {
                    return;
                }
                _this.movedSet.add(n);
                var targetId = null;
                if (target && isINode(target)) {
                    targetId = target.__sn.id;
                }
                if (targetId) {
                    _this.movedMap[moveKey(n.__sn.id, targetId)] = true;
                }
            }
            else {
                _this.addedSet.add(n);
                _this.droppedSet.delete(n);
            }
            if (!isBlocked(n, _this.blockClass))
                n.childNodes.forEach(function (childN) { return _this.genAdds(childN); });
        };
    }
    MutationBuffer.prototype.init = function (options) {
        var _this = this;
        [
            'mutationCb',
            'blockClass',
            'blockSelector',
            'maskTextClass',
            'maskTextSelector',
            'inlineStylesheet',
            'maskInputOptions',
            'maskTextFn',
            'maskInputFn',
            'recordCanvas',
            'inlineImages',
            'slimDOMOptions',
            'doc',
            'mirror',
            'iframeManager',
            'shadowDomManager',
            'canvasManager',
        ].forEach(function (key) {
            _this[key] = options[key];
        });
    };
    MutationBuffer.prototype.freeze = function () {
        this.frozen = true;
        this.canvasManager.freeze();
    };
    MutationBuffer.prototype.unfreeze = function () {
        this.frozen = false;
        this.canvasManager.unfreeze();
        this.emit();
    };
    MutationBuffer.prototype.isFrozen = function () {
        return this.frozen;
    };
    MutationBuffer.prototype.lock = function () {
        this.locked = true;
        this.canvasManager.lock();
    };
    MutationBuffer.prototype.unlock = function () {
        this.locked = false;
        this.canvasManager.unlock();
        this.emit();
    };
    MutationBuffer.prototype.reset = function () {
        this.shadowDomManager.reset();
        this.canvasManager.reset();
    };
    return MutationBuffer;
}());
function deepDelete(addsSet, n) {
    addsSet.delete(n);
    n.childNodes.forEach(function (childN) { return deepDelete(addsSet, childN); });
}
function isParentRemoved(removes, n, mirror) {
    var parentNode = n.parentNode;
    if (!parentNode) {
        return false;
    }
    var parentId = mirror.getId(parentNode);
    if (removes.some(function (r) { return r.id === parentId; })) {
        return true;
    }
    return isParentRemoved(removes, parentNode, mirror);
}
function isAncestorInSet(set, n) {
    var parentNode = n.parentNode;
    if (!parentNode) {
        return false;
    }
    if (set.has(parentNode)) {
        return true;
    }
    return isAncestorInSet(set, parentNode);
}

var MutationBuffer$1 = MutationBuffer;

var mutationBuffers = [];
var isCSSGroupingRuleSupported = typeof CSSGroupingRule !== 'undefined';
var isCSSMediaRuleSupported = typeof CSSMediaRule !== 'undefined';
var isCSSSupportsRuleSupported = typeof CSSSupportsRule !== 'undefined';
var isCSSConditionRuleSupported = typeof CSSConditionRule !== 'undefined';
function getEventTarget(event) {
    try {
        if ('composedPath' in event) {
            var path = event.composedPath();
            if (path.length) {
                return path[0];
            }
        }
        else if ('path' in event && event.path.length) {
            return event.path[0];
        }
        return event.target;
    }
    catch (_a) {
        return event.target;
    }
}
function initMutationObserver(options, rootEl) {
    var _a, _b;
    var mutationBuffer = new MutationBuffer$1();
    mutationBuffers.push(mutationBuffer);
    mutationBuffer.init(options);
    var mutationObserverCtor = window.MutationObserver ||
        window.__rrMutationObserver;
    var angularZoneSymbol = (_b = (_a = window === null || window === void 0 ? void 0 : window.Zone) === null || _a === void 0 ? void 0 : _a.__symbol__) === null || _b === void 0 ? void 0 : _b.call(_a, 'MutationObserver');
    if (angularZoneSymbol &&
        window[angularZoneSymbol]) {
        mutationObserverCtor = window[angularZoneSymbol];
    }
    var observer = new mutationObserverCtor(mutationBuffer.processMutations.bind(mutationBuffer));
    observer.observe(rootEl, {
        attributes: true,
        attributeOldValue: true,
        characterData: true,
        characterDataOldValue: true,
        childList: true,
        subtree: true,
    });
    return observer;
}
function initMoveObserver(_a) {
    var mousemoveCb = _a.mousemoveCb, sampling = _a.sampling, doc = _a.doc, mirror = _a.mirror;
    if (sampling.mousemove === false) {
        return function () { };
    }
    var threshold = typeof sampling.mousemove === 'number' ? sampling.mousemove : 50;
    var callbackThreshold = typeof sampling.mousemoveCallback === 'number'
        ? sampling.mousemoveCallback
        : 500;
    var positions = [];
    var timeBaseline;
    var wrappedCb = throttle(function (source) {
        var totalOffset = Date.now() - timeBaseline;
        mousemoveCb(positions.map(function (p) {
            p.timeOffset -= totalOffset;
            return p;
        }), source);
        positions = [];
        timeBaseline = null;
    }, callbackThreshold);
    var updatePosition = throttle(function (evt) {
        var target = getEventTarget(evt);
        var _a = isTouchEvent(evt)
            ? evt.changedTouches[0]
            : evt, clientX = _a.clientX, clientY = _a.clientY;
        if (!timeBaseline) {
            timeBaseline = Date.now();
        }
        positions.push({
            x: clientX,
            y: clientY,
            id: mirror.getId(target),
            timeOffset: Date.now() - timeBaseline,
        });
        wrappedCb(typeof DragEvent !== 'undefined' && evt instanceof DragEvent
            ? IncrementalSource.Drag
            : evt instanceof MouseEvent
                ? IncrementalSource.MouseMove
                : IncrementalSource.TouchMove);
    }, threshold, {
        trailing: false,
    });
    var handlers = [
        on('mousemove', updatePosition, doc),
        on('touchmove', updatePosition, doc),
        on('drag', updatePosition, doc),
    ];
    return function () {
        handlers.forEach(function (h) { return h(); });
    };
}
function initMouseInteractionObserver(_a) {
    var mouseInteractionCb = _a.mouseInteractionCb, doc = _a.doc, mirror = _a.mirror, blockClass = _a.blockClass, sampling = _a.sampling;
    if (sampling.mouseInteraction === false) {
        return function () { };
    }
    var disableMap = sampling.mouseInteraction === true ||
        sampling.mouseInteraction === undefined
        ? {}
        : sampling.mouseInteraction;
    var handlers = [];
    var getHandler = function (eventKey) {
        return function (event) {
            var target = getEventTarget(event);
            if (isBlocked(target, blockClass)) {
                return;
            }
            var e = isTouchEvent(event) ? event.changedTouches[0] : event;
            if (!e) {
                return;
            }
            var id = mirror.getId(target);
            var clientX = e.clientX, clientY = e.clientY;
            mouseInteractionCb({
                type: MouseInteractions[eventKey],
                id: id,
                x: clientX,
                y: clientY,
            });
        };
    };
    Object.keys(MouseInteractions)
        .filter(function (key) {
        return Number.isNaN(Number(key)) &&
            !key.endsWith('_Departed') &&
            disableMap[key] !== false;
    })
        .forEach(function (eventKey) {
        var eventName = eventKey.toLowerCase();
        var handler = getHandler(eventKey);
        handlers.push(on(eventName, handler, doc));
    });
    return function () {
        handlers.forEach(function (h) { return h(); });
    };
}
function initScrollObserver(_a) {
    var scrollCb = _a.scrollCb, doc = _a.doc, mirror = _a.mirror, blockClass = _a.blockClass, sampling = _a.sampling;
    var updatePosition = throttle(function (evt) {
        var target = getEventTarget(evt);
        if (!target || isBlocked(target, blockClass)) {
            return;
        }
        var id = mirror.getId(target);
        if (target === doc) {
            var scrollEl = (doc.scrollingElement || doc.documentElement);
            scrollCb({
                id: id,
                x: scrollEl.scrollLeft,
                y: scrollEl.scrollTop,
            });
        }
        else {
            scrollCb({
                id: id,
                x: target.scrollLeft,
                y: target.scrollTop,
            });
        }
    }, sampling.scroll || 100);
    return on('scroll', updatePosition, doc);
}
function initViewportResizeObserver(_a) {
    var viewportResizeCb = _a.viewportResizeCb;
    var lastH = -1;
    var lastW = -1;
    var updateDimension = throttle(function () {
        var height = getWindowHeight();
        var width = getWindowWidth();
        if (lastH !== height || lastW !== width) {
            viewportResizeCb({
                width: Number(width),
                height: Number(height),
            });
            lastH = height;
            lastW = width;
        }
    }, 200);
    return on('resize', updateDimension, window);
}
function wrapEventWithUserTriggeredFlag(v, enable) {
    var value = __assign({}, v);
    if (!enable)
        delete value.userTriggered;
    return value;
}
var INPUT_TAGS = ['INPUT', 'TEXTAREA', 'SELECT'];
var lastInputValueMap = new WeakMap();
function initInputObserver(_a) {
    var inputCb = _a.inputCb, doc = _a.doc, mirror = _a.mirror, blockClass = _a.blockClass, ignoreClass = _a.ignoreClass, maskInputOptions = _a.maskInputOptions, maskInputFn = _a.maskInputFn, sampling = _a.sampling, userTriggeredOnInput = _a.userTriggeredOnInput;
    function eventHandler(event) {
        var target = getEventTarget(event);
        var userTriggered = event.isTrusted;
        if (target && target.tagName === 'OPTION')
            target = target.parentElement;
        if (!target ||
            !target.tagName ||
            INPUT_TAGS.indexOf(target.tagName) < 0 ||
            isBlocked(target, blockClass)) {
            return;
        }
        var type = target.type;
        if (target.classList.contains(ignoreClass)) {
            return;
        }
        var text = target.value;
        var isChecked = false;
        if (type === 'radio' || type === 'checkbox') {
            isChecked = target.checked;
        }
        else if (maskInputOptions[target.tagName.toLowerCase()] ||
            maskInputOptions[type]) {
            text = maskInputValue({
                maskInputOptions: maskInputOptions,
                tagName: target.tagName,
                type: type,
                value: text,
                maskInputFn: maskInputFn,
            });
        }
        cbWithDedup(target, wrapEventWithUserTriggeredFlag({ text: text, isChecked: isChecked, userTriggered: userTriggered }, userTriggeredOnInput));
        var name = target.name;
        if (type === 'radio' && name && isChecked) {
            doc
                .querySelectorAll("input[type=\"radio\"][name=\"".concat(name, "\"]"))
                .forEach(function (el) {
                if (el !== target) {
                    cbWithDedup(el, wrapEventWithUserTriggeredFlag({
                        text: el.value,
                        isChecked: !isChecked,
                        userTriggered: false,
                    }, userTriggeredOnInput));
                }
            });
        }
    }
    function cbWithDedup(target, v) {
        var lastInputValue = lastInputValueMap.get(target);
        if (!lastInputValue ||
            lastInputValue.text !== v.text ||
            lastInputValue.isChecked !== v.isChecked) {
            lastInputValueMap.set(target, v);
            var id = mirror.getId(target);
            inputCb(__assign(__assign({}, v), { id: id }));
        }
    }
    var events = sampling.input === 'last' ? ['change'] : ['input', 'change'];
    var handlers = events.map(function (eventName) { return on(eventName, eventHandler, doc); });
    var propertyDescriptor = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value');
    var hookProperties = [
        [HTMLInputElement.prototype, 'value'],
        [HTMLInputElement.prototype, 'checked'],
        [HTMLSelectElement.prototype, 'value'],
        [HTMLTextAreaElement.prototype, 'value'],
        [HTMLSelectElement.prototype, 'selectedIndex'],
        [HTMLOptionElement.prototype, 'selected'],
    ];
    if (propertyDescriptor && propertyDescriptor.set) {
        handlers.push.apply(handlers, __spreadArray([], __read(hookProperties.map(function (p) {
            return hookSetter(p[0], p[1], {
                set: function () {
                    eventHandler({ target: this });
                },
            });
        })), false));
    }
    return function () {
        handlers.forEach(function (h) { return h(); });
    };
}
function getNestedCSSRulePositions(rule) {
    var positions = [];
    function recurse(childRule, pos) {
        if ((isCSSGroupingRuleSupported &&
            childRule.parentRule instanceof CSSGroupingRule) ||
            (isCSSMediaRuleSupported &&
                childRule.parentRule instanceof CSSMediaRule) ||
            (isCSSSupportsRuleSupported &&
                childRule.parentRule instanceof CSSSupportsRule) ||
            (isCSSConditionRuleSupported &&
                childRule.parentRule instanceof CSSConditionRule)) {
            var rules = Array.from(childRule.parentRule.cssRules);
            var index = rules.indexOf(childRule);
            pos.unshift(index);
        }
        else {
            var rules = Array.from(childRule.parentStyleSheet.cssRules);
            var index = rules.indexOf(childRule);
            pos.unshift(index);
        }
        return pos;
    }
    return recurse(rule, positions);
}
function initStyleSheetObserver(_a, _b) {
    var styleSheetRuleCb = _a.styleSheetRuleCb, mirror = _a.mirror;
    var win = _b.win;
    var insertRule = win.CSSStyleSheet.prototype.insertRule;
    win.CSSStyleSheet.prototype.insertRule = function (rule, index) {
        var id = mirror.getId(this.ownerNode);
        if (id !== -1) {
            styleSheetRuleCb({
                id: id,
                adds: [{ rule: rule, index: index }],
            });
        }
        return insertRule.apply(this, arguments);
    };
    var deleteRule = win.CSSStyleSheet.prototype.deleteRule;
    win.CSSStyleSheet.prototype.deleteRule = function (index) {
        var id = mirror.getId(this.ownerNode);
        if (id !== -1) {
            styleSheetRuleCb({
                id: id,
                removes: [{ index: index }],
            });
        }
        return deleteRule.apply(this, arguments);
    };
    var supportedNestedCSSRuleTypes = {};
    if (isCSSGroupingRuleSupported) {
        supportedNestedCSSRuleTypes.CSSGroupingRule = win.CSSGroupingRule;
    }
    else {
        if (isCSSMediaRuleSupported) {
            supportedNestedCSSRuleTypes.CSSMediaRule = win.CSSMediaRule;
        }
        if (isCSSConditionRuleSupported) {
            supportedNestedCSSRuleTypes.CSSConditionRule = win.CSSConditionRule;
        }
        if (isCSSSupportsRuleSupported) {
            supportedNestedCSSRuleTypes.CSSSupportsRule = win.CSSSupportsRule;
        }
    }
    var unmodifiedFunctions = {};
    Object.entries(supportedNestedCSSRuleTypes).forEach(function (_a) {
        var _b = __read(_a, 2), typeKey = _b[0], type = _b[1];
        unmodifiedFunctions[typeKey] = {
            insertRule: type.prototype.insertRule,
            deleteRule: type.prototype.deleteRule,
        };
        type.prototype.insertRule = function (rule, index) {
            var id = mirror.getId(this.parentStyleSheet.ownerNode);
            if (id !== -1) {
                styleSheetRuleCb({
                    id: id,
                    adds: [
                        {
                            rule: rule,
                            index: __spreadArray(__spreadArray([], __read(getNestedCSSRulePositions(this)), false), [
                                index || 0,
                            ], false),
                        },
                    ],
                });
            }
            return unmodifiedFunctions[typeKey].insertRule.apply(this, arguments);
        };
        type.prototype.deleteRule = function (index) {
            var id = mirror.getId(this.parentStyleSheet.ownerNode);
            if (id !== -1) {
                styleSheetRuleCb({
                    id: id,
                    removes: [{ index: __spreadArray(__spreadArray([], __read(getNestedCSSRulePositions(this)), false), [index], false) }],
                });
            }
            return unmodifiedFunctions[typeKey].deleteRule.apply(this, arguments);
        };
    });
    return function () {
        win.CSSStyleSheet.prototype.insertRule = insertRule;
        win.CSSStyleSheet.prototype.deleteRule = deleteRule;
        Object.entries(supportedNestedCSSRuleTypes).forEach(function (_a) {
            var _b = __read(_a, 2), typeKey = _b[0], type = _b[1];
            type.prototype.insertRule = unmodifiedFunctions[typeKey].insertRule;
            type.prototype.deleteRule = unmodifiedFunctions[typeKey].deleteRule;
        });
    };
}
function initStyleDeclarationObserver(_a, _b) {
    var styleDeclarationCb = _a.styleDeclarationCb, mirror = _a.mirror;
    var win = _b.win;
    var setProperty = win.CSSStyleDeclaration.prototype.setProperty;
    win.CSSStyleDeclaration.prototype.setProperty = function (property, value, priority) {
        var _a, _b;
        var id = mirror.getId((_b = (_a = this.parentRule) === null || _a === void 0 ? void 0 : _a.parentStyleSheet) === null || _b === void 0 ? void 0 : _b.ownerNode);
        if (id !== -1) {
            styleDeclarationCb({
                id: id,
                set: {
                    property: property,
                    value: value,
                    priority: priority,
                },
                index: getNestedCSSRulePositions(this.parentRule),
            });
        }
        return setProperty.apply(this, arguments);
    };
    var removeProperty = win.CSSStyleDeclaration.prototype.removeProperty;
    win.CSSStyleDeclaration.prototype.removeProperty = function (property) {
        var _a, _b;
        var id = mirror.getId((_b = (_a = this.parentRule) === null || _a === void 0 ? void 0 : _a.parentStyleSheet) === null || _b === void 0 ? void 0 : _b.ownerNode);
        if (id !== -1) {
            styleDeclarationCb({
                id: id,
                remove: {
                    property: property,
                },
                index: getNestedCSSRulePositions(this.parentRule),
            });
        }
        return removeProperty.apply(this, arguments);
    };
    return function () {
        win.CSSStyleDeclaration.prototype.setProperty = setProperty;
        win.CSSStyleDeclaration.prototype.removeProperty = removeProperty;
    };
}
function initMediaInteractionObserver(_a) {
    var mediaInteractionCb = _a.mediaInteractionCb, blockClass = _a.blockClass, mirror = _a.mirror, sampling = _a.sampling;
    var handler = function (type) {
        return throttle(function (event) {
            var target = getEventTarget(event);
            if (!target || isBlocked(target, blockClass)) {
                return;
            }
            var _a = target, currentTime = _a.currentTime, volume = _a.volume, muted = _a.muted;
            mediaInteractionCb({
                type: type,
                id: mirror.getId(target),
                currentTime: currentTime,
                volume: volume,
                muted: muted,
            });
        }, sampling.media || 500);
    };
    var handlers = [
        on('play', handler(0)),
        on('pause', handler(1)),
        on('seeked', handler(2)),
        on('volumechange', handler(3)),
    ];
    return function () {
        handlers.forEach(function (h) { return h(); });
    };
}
function initFontObserver(_a) {
    var fontCb = _a.fontCb, doc = _a.doc;
    var win = doc.defaultView;
    if (!win) {
        return function () { };
    }
    var handlers = [];
    var fontMap = new WeakMap();
    var originalFontFace = win.FontFace;
    win.FontFace = function FontFace(family, source, descriptors) {
        var fontFace = new originalFontFace(family, source, descriptors);
        fontMap.set(fontFace, {
            family: family,
            buffer: typeof source !== 'string',
            descriptors: descriptors,
            fontSource: typeof source === 'string'
                ? source
                :
                    JSON.stringify(Array.from(new Uint8Array(source))),
        });
        return fontFace;
    };
    var restoreHandler = patch(doc.fonts, 'add', function (original) {
        return function (fontFace) {
            setTimeout(function () {
                var p = fontMap.get(fontFace);
                if (p) {
                    fontCb(p);
                    fontMap.delete(fontFace);
                }
            }, 0);
            return original.apply(this, [fontFace]);
        };
    });
    handlers.push(function () {
        win.FontFace = originalFontFace;
    });
    handlers.push(restoreHandler);
    return function () {
        handlers.forEach(function (h) { return h(); });
    };
}
function mergeHooks(o, hooks) {
    var mutationCb = o.mutationCb, mousemoveCb = o.mousemoveCb, mouseInteractionCb = o.mouseInteractionCb, scrollCb = o.scrollCb, viewportResizeCb = o.viewportResizeCb, inputCb = o.inputCb, mediaInteractionCb = o.mediaInteractionCb, styleSheetRuleCb = o.styleSheetRuleCb, styleDeclarationCb = o.styleDeclarationCb, canvasMutationCb = o.canvasMutationCb, fontCb = o.fontCb;
    o.mutationCb = function () {
        var p = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p[_i] = arguments[_i];
        }
        if (hooks.mutation) {
            hooks.mutation.apply(hooks, __spreadArray([], __read(p), false));
        }
        mutationCb.apply(void 0, __spreadArray([], __read(p), false));
    };
    o.mousemoveCb = function () {
        var p = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p[_i] = arguments[_i];
        }
        if (hooks.mousemove) {
            hooks.mousemove.apply(hooks, __spreadArray([], __read(p), false));
        }
        mousemoveCb.apply(void 0, __spreadArray([], __read(p), false));
    };
    o.mouseInteractionCb = function () {
        var p = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p[_i] = arguments[_i];
        }
        if (hooks.mouseInteraction) {
            hooks.mouseInteraction.apply(hooks, __spreadArray([], __read(p), false));
        }
        mouseInteractionCb.apply(void 0, __spreadArray([], __read(p), false));
    };
    o.scrollCb = function () {
        var p = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p[_i] = arguments[_i];
        }
        if (hooks.scroll) {
            hooks.scroll.apply(hooks, __spreadArray([], __read(p), false));
        }
        scrollCb.apply(void 0, __spreadArray([], __read(p), false));
    };
    o.viewportResizeCb = function () {
        var p = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p[_i] = arguments[_i];
        }
        if (hooks.viewportResize) {
            hooks.viewportResize.apply(hooks, __spreadArray([], __read(p), false));
        }
        viewportResizeCb.apply(void 0, __spreadArray([], __read(p), false));
    };
    o.inputCb = function () {
        var p = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p[_i] = arguments[_i];
        }
        if (hooks.input) {
            hooks.input.apply(hooks, __spreadArray([], __read(p), false));
        }
        inputCb.apply(void 0, __spreadArray([], __read(p), false));
    };
    o.mediaInteractionCb = function () {
        var p = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p[_i] = arguments[_i];
        }
        if (hooks.mediaInteaction) {
            hooks.mediaInteaction.apply(hooks, __spreadArray([], __read(p), false));
        }
        mediaInteractionCb.apply(void 0, __spreadArray([], __read(p), false));
    };
    o.styleSheetRuleCb = function () {
        var p = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p[_i] = arguments[_i];
        }
        if (hooks.styleSheetRule) {
            hooks.styleSheetRule.apply(hooks, __spreadArray([], __read(p), false));
        }
        styleSheetRuleCb.apply(void 0, __spreadArray([], __read(p), false));
    };
    o.styleDeclarationCb = function () {
        var p = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p[_i] = arguments[_i];
        }
        if (hooks.styleDeclaration) {
            hooks.styleDeclaration.apply(hooks, __spreadArray([], __read(p), false));
        }
        styleDeclarationCb.apply(void 0, __spreadArray([], __read(p), false));
    };
    o.canvasMutationCb = function () {
        var p = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p[_i] = arguments[_i];
        }
        if (hooks.canvasMutation) {
            hooks.canvasMutation.apply(hooks, __spreadArray([], __read(p), false));
        }
        canvasMutationCb.apply(void 0, __spreadArray([], __read(p), false));
    };
    o.fontCb = function () {
        var p = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p[_i] = arguments[_i];
        }
        if (hooks.font) {
            hooks.font.apply(hooks, __spreadArray([], __read(p), false));
        }
        fontCb.apply(void 0, __spreadArray([], __read(p), false));
    };
}
function initObservers(o, hooks) {
    var e_1, _a;
    if (hooks === void 0) { hooks = {}; }
    var currentWindow = o.doc.defaultView;
    if (!currentWindow) {
        return function () { };
    }
    mergeHooks(o, hooks);
    var mutationObserver = initMutationObserver(o, o.doc);
    var mousemoveHandler = initMoveObserver(o);
    var mouseInteractionHandler = initMouseInteractionObserver(o);
    var scrollHandler = initScrollObserver(o);
    var viewportResizeHandler = initViewportResizeObserver(o);
    var inputHandler = initInputObserver(o);
    var mediaInteractionHandler = initMediaInteractionObserver(o);
    var styleSheetObserver = initStyleSheetObserver(o, { win: currentWindow });
    var styleDeclarationObserver = initStyleDeclarationObserver(o, {
        win: currentWindow,
    });
    var fontObserver = o.collectFonts ? initFontObserver(o) : function () { };
    var pluginHandlers = [];
    try {
        for (var _b = __values(o.plugins), _c = _b.next(); !_c.done; _c = _b.next()) {
            var plugin = _c.value;
            pluginHandlers.push(plugin.observer(plugin.callback, currentWindow, plugin.options));
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return function () {
        mutationBuffers.forEach(function (b) { return b.reset(); });
        mutationObserver.disconnect();
        mousemoveHandler();
        mouseInteractionHandler();
        scrollHandler();
        viewportResizeHandler();
        inputHandler();
        mediaInteractionHandler();
        styleSheetObserver();
        styleDeclarationObserver();
        fontObserver();
        pluginHandlers.forEach(function (h) { return h(); });
    };
}

var IframeManager = (function () {
    function IframeManager(options) {
        this.iframes = new WeakMap();
        this.mutationCb = options.mutationCb;
    }
    IframeManager.prototype.addIframe = function (iframeEl) {
        this.iframes.set(iframeEl, true);
    };
    IframeManager.prototype.addLoadListener = function (cb) {
        this.loadListener = cb;
    };
    IframeManager.prototype.attachIframe = function (iframeEl, childSn) {
        var _a;
        this.mutationCb({
            adds: [
                {
                    parentId: iframeEl.__sn.id,
                    nextId: null,
                    node: childSn,
                },
            ],
            removes: [],
            texts: [],
            attributes: [],
            isAttachIframe: true,
        });
        (_a = this.loadListener) === null || _a === void 0 ? void 0 : _a.call(this, iframeEl);
    };
    return IframeManager;
}());

var ShadowDomManager = (function () {
    function ShadowDomManager(options) {
        this.restorePatches = [];
        this.mutationCb = options.mutationCb;
        this.scrollCb = options.scrollCb;
        this.bypassOptions = options.bypassOptions;
        this.mirror = options.mirror;
        var manager = this;
        this.restorePatches.push(patch(HTMLElement.prototype, 'attachShadow', function (original) {
            return function () {
                var shadowRoot = original.apply(this, arguments);
                if (this.shadowRoot)
                    manager.addShadowRoot(this.shadowRoot, this.ownerDocument);
                return shadowRoot;
            };
        }));
    }
    ShadowDomManager.prototype.addShadowRoot = function (shadowRoot, doc) {
        initMutationObserver(__assign(__assign({}, this.bypassOptions), { doc: doc, mutationCb: this.mutationCb, mirror: this.mirror, shadowDomManager: this }), shadowRoot);
        initScrollObserver(__assign(__assign({}, this.bypassOptions), { scrollCb: this.scrollCb, doc: shadowRoot, mirror: this.mirror }));
    };
    ShadowDomManager.prototype.observeAttachShadow = function (iframeElement) {
        if (iframeElement.contentWindow) {
            var manager_1 = this;
            this.restorePatches.push(patch(iframeElement.contentWindow.HTMLElement.prototype, 'attachShadow', function (original) {
                return function () {
                    var shadowRoot = original.apply(this, arguments);
                    if (this.shadowRoot)
                        manager_1.addShadowRoot(this.shadowRoot, iframeElement.contentDocument);
                    return shadowRoot;
                };
            }));
        }
    };
    ShadowDomManager.prototype.reset = function () {
        this.restorePatches.forEach(function (restorePatch) { return restorePatch(); });
    };
    return ShadowDomManager;
}());

function initCanvas2DMutationObserver(cb, win, blockClass, mirror) {
    var e_1, _a;
    var handlers = [];
    var props2D = Object.getOwnPropertyNames(win.CanvasRenderingContext2D.prototype);
    var _loop_1 = function (prop) {
        try {
            if (typeof win.CanvasRenderingContext2D.prototype[prop] !== 'function') {
                return "continue";
            }
            var restoreHandler = patch(win.CanvasRenderingContext2D.prototype, prop, function (original) {
                return function () {
                    var _this = this;
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (!isBlocked(this.canvas, blockClass)) {
                        setTimeout(function () {
                            var recordArgs = __spreadArray([], __read(args), false);
                            if (prop === 'drawImage') {
                                if (recordArgs[0] &&
                                    recordArgs[0] instanceof HTMLCanvasElement) {
                                    var canvas = recordArgs[0];
                                    var ctx = canvas.getContext('2d');
                                    var imgd = ctx === null || ctx === void 0 ? void 0 : ctx.getImageData(0, 0, canvas.width, canvas.height);
                                    var pix = imgd === null || imgd === void 0 ? void 0 : imgd.data;
                                    recordArgs[0] = JSON.stringify(pix);
                                }
                            }
                            cb(_this.canvas, {
                                type: CanvasContext['2D'],
                                property: prop,
                                args: recordArgs,
                            });
                        }, 0);
                    }
                    return original.apply(this, args);
                };
            });
            handlers.push(restoreHandler);
        }
        catch (_b) {
            var hookHandler = hookSetter(win.CanvasRenderingContext2D.prototype, prop, {
                set: function (v) {
                    cb(this.canvas, {
                        type: CanvasContext['2D'],
                        property: prop,
                        args: [v],
                        setter: true,
                    });
                },
            });
            handlers.push(hookHandler);
        }
    };
    try {
        for (var props2D_1 = __values(props2D), props2D_1_1 = props2D_1.next(); !props2D_1_1.done; props2D_1_1 = props2D_1.next()) {
            var prop = props2D_1_1.value;
            _loop_1(prop);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (props2D_1_1 && !props2D_1_1.done && (_a = props2D_1.return)) _a.call(props2D_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return function () {
        handlers.forEach(function (h) { return h(); });
    };
}

function initCanvasContextObserver(win, blockClass) {
    var handlers = [];
    try {
        var restoreHandler = patch(win.HTMLCanvasElement.prototype, 'getContext', function (original) {
            return function (contextType) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                if (!isBlocked(this, blockClass)) {
                    if (!('__context' in this))
                        this.__context = contextType;
                }
                return original.apply(this, __spreadArray([contextType], __read(args), false));
            };
        });
        handlers.push(restoreHandler);
    }
    catch (_a) {
        console.error('failed to patch HTMLCanvasElement.prototype.getContext');
    }
    return function () {
        handlers.forEach(function (h) { return h(); });
    };
}

/*
 * base64-arraybuffer 1.0.1 <https://github.com/niklasvh/base64-arraybuffer>
 * Copyright (c) 2021 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
// Use a lookup table to find the index.
var lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
}
var encode = function (arraybuffer) {
    var bytes = new Uint8Array(arraybuffer), i, len = bytes.length, base64 = '';
    for (i = 0; i < len; i += 3) {
        base64 += chars[bytes[i] >> 2];
        base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
        base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
        base64 += chars[bytes[i + 2] & 63];
    }
    if (len % 3 === 2) {
        base64 = base64.substring(0, base64.length - 1) + '=';
    }
    else if (len % 3 === 1) {
        base64 = base64.substring(0, base64.length - 2) + '==';
    }
    return base64;
};

var webGLVarMap = new Map();
function variableListFor(ctx, ctor) {
    var contextMap = webGLVarMap.get(ctx);
    if (!contextMap) {
        contextMap = new Map();
        webGLVarMap.set(ctx, contextMap);
    }
    if (!contextMap.has(ctor)) {
        contextMap.set(ctor, []);
    }
    return contextMap.get(ctor);
}
var saveWebGLVar = function (value, win, ctx) {
    if (!value ||
        !(isInstanceOfWebGLObject(value, win) || typeof value === 'object'))
        return;
    var name = value.constructor.name;
    var list = variableListFor(ctx, name);
    var index = list.indexOf(value);
    if (index === -1) {
        index = list.length;
        list.push(value);
    }
    return index;
};
function serializeArg(value, win, ctx) {
    if (value instanceof Array) {
        return value.map(function (arg) { return serializeArg(arg, win, ctx); });
    }
    else if (value === null) {
        return value;
    }
    else if (value instanceof Float32Array ||
        value instanceof Float64Array ||
        value instanceof Int32Array ||
        value instanceof Uint32Array ||
        value instanceof Uint8Array ||
        value instanceof Uint16Array ||
        value instanceof Int16Array ||
        value instanceof Int8Array ||
        value instanceof Uint8ClampedArray) {
        var name_1 = value.constructor.name;
        return {
            rr_type: name_1,
            args: [Object.values(value)],
        };
    }
    else if (value instanceof ArrayBuffer) {
        var name_2 = value.constructor.name;
        var base64 = encode(value);
        return {
            rr_type: name_2,
            base64: base64,
        };
    }
    else if (value instanceof DataView) {
        var name_3 = value.constructor.name;
        return {
            rr_type: name_3,
            args: [
                serializeArg(value.buffer, win, ctx),
                value.byteOffset,
                value.byteLength,
            ],
        };
    }
    else if (value instanceof HTMLImageElement) {
        var name_4 = value.constructor.name;
        var src = value.src;
        return {
            rr_type: name_4,
            src: src,
        };
    }
    else if (value instanceof ImageData) {
        var name_5 = value.constructor.name;
        return {
            rr_type: name_5,
            args: [serializeArg(value.data, win, ctx), value.width, value.height],
        };
    }
    else if (isInstanceOfWebGLObject(value, win) || typeof value === 'object') {
        var name_6 = value.constructor.name;
        var index = saveWebGLVar(value, win, ctx);
        return {
            rr_type: name_6,
            index: index,
        };
    }
    return value;
}
var serializeArgs = function (args, win, ctx) {
    return __spreadArray([], __read(args), false).map(function (arg) { return serializeArg(arg, win, ctx); });
};
var isInstanceOfWebGLObject = function (value, win) {
    var webGLConstructorNames = [
        'WebGLActiveInfo',
        'WebGLBuffer',
        'WebGLFramebuffer',
        'WebGLProgram',
        'WebGLRenderbuffer',
        'WebGLShader',
        'WebGLShaderPrecisionFormat',
        'WebGLTexture',
        'WebGLUniformLocation',
        'WebGLVertexArrayObject',
        'WebGLVertexArrayObjectOES',
    ];
    var supportedWebGLConstructorNames = webGLConstructorNames.filter(function (name) { return typeof win[name] === 'function'; });
    return Boolean(supportedWebGLConstructorNames.find(function (name) { return value instanceof win[name]; }));
};

function patchGLPrototype(prototype, type, cb, blockClass, mirror, win) {
    var e_1, _a;
    var handlers = [];
    var props = Object.getOwnPropertyNames(prototype);
    var _loop_1 = function (prop) {
        try {
            if (typeof prototype[prop] !== 'function') {
                return "continue";
            }
            var restoreHandler = patch(prototype, prop, function (original) {
                return function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var result = original.apply(this, args);
                    saveWebGLVar(result, win, prototype);
                    if (!isBlocked(this.canvas, blockClass)) {
                        var id = mirror.getId(this.canvas);
                        var recordArgs = serializeArgs(__spreadArray([], __read(args), false), win, prototype);
                        var mutation = {
                            type: type,
                            property: prop,
                            args: recordArgs,
                        };
                        cb(this.canvas, mutation);
                    }
                    return result;
                };
            });
            handlers.push(restoreHandler);
        }
        catch (_b) {
            var hookHandler = hookSetter(prototype, prop, {
                set: function (v) {
                    cb(this.canvas, {
                        type: type,
                        property: prop,
                        args: [v],
                        setter: true,
                    });
                },
            });
            handlers.push(hookHandler);
        }
    };
    try {
        for (var props_1 = __values(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
            var prop = props_1_1.value;
            _loop_1(prop);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (props_1_1 && !props_1_1.done && (_a = props_1.return)) _a.call(props_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return handlers;
}
function initCanvasWebGLMutationObserver(cb, win, blockClass, mirror) {
    var handlers = [];
    handlers.push.apply(handlers, __spreadArray([], __read(patchGLPrototype(win.WebGLRenderingContext.prototype, CanvasContext.WebGL, cb, blockClass, mirror, win)), false));
    if (typeof win.WebGL2RenderingContext !== 'undefined') {
        handlers.push.apply(handlers, __spreadArray([], __read(patchGLPrototype(win.WebGL2RenderingContext.prototype, CanvasContext.WebGL2, cb, blockClass, mirror, win)), false));
    }
    return function () {
        handlers.forEach(function (h) { return h(); });
    };
}

var CanvasManager = (function () {
    function CanvasManager(options) {
        this.pendingCanvasMutations = new Map();
        this.rafStamps = { latestId: 0, invokeId: null };
        this.frozen = false;
        this.locked = false;
        this.processMutation = function (target, mutation) {
            var newFrame = this.rafStamps.invokeId &&
                this.rafStamps.latestId !== this.rafStamps.invokeId;
            if (newFrame || !this.rafStamps.invokeId)
                this.rafStamps.invokeId = this.rafStamps.latestId;
            if (!this.pendingCanvasMutations.has(target)) {
                this.pendingCanvasMutations.set(target, []);
            }
            this.pendingCanvasMutations.get(target).push(mutation);
        };
        this.mutationCb = options.mutationCb;
        this.mirror = options.mirror;
        if (options.recordCanvas === true)
            this.initCanvasMutationObserver(options.win, options.blockClass);
    }
    CanvasManager.prototype.reset = function () {
        this.pendingCanvasMutations.clear();
        this.resetObservers && this.resetObservers();
    };
    CanvasManager.prototype.freeze = function () {
        this.frozen = true;
    };
    CanvasManager.prototype.unfreeze = function () {
        this.frozen = false;
    };
    CanvasManager.prototype.lock = function () {
        this.locked = true;
    };
    CanvasManager.prototype.unlock = function () {
        this.locked = false;
    };
    CanvasManager.prototype.initCanvasMutationObserver = function (win, blockClass) {
        this.startRAFTimestamping();
        this.startPendingCanvasMutationFlusher();
        var canvasContextReset = initCanvasContextObserver(win, blockClass);
        var canvas2DReset = initCanvas2DMutationObserver(this.processMutation.bind(this), win, blockClass, this.mirror);
        var canvasWebGL1and2Reset = initCanvasWebGLMutationObserver(this.processMutation.bind(this), win, blockClass, this.mirror);
        this.resetObservers = function () {
            canvasContextReset();
            canvas2DReset();
            canvasWebGL1and2Reset();
        };
    };
    CanvasManager.prototype.startPendingCanvasMutationFlusher = function () {
        var _this = this;
        requestAnimationFrame(function () { return _this.flushPendingCanvasMutations(); });
    };
    CanvasManager.prototype.startRAFTimestamping = function () {
        var _this = this;
        var setLatestRAFTimestamp = function (timestamp) {
            _this.rafStamps.latestId = timestamp;
            requestAnimationFrame(setLatestRAFTimestamp);
        };
        requestAnimationFrame(setLatestRAFTimestamp);
    };
    CanvasManager.prototype.flushPendingCanvasMutations = function () {
        var _this = this;
        this.pendingCanvasMutations.forEach(function (values, canvas) {
            var id = _this.mirror.getId(canvas);
            _this.flushPendingCanvasMutationFor(canvas, id);
        });
        requestAnimationFrame(function () { return _this.flushPendingCanvasMutations(); });
    };
    CanvasManager.prototype.flushPendingCanvasMutationFor = function (canvas, id) {
        if (this.frozen || this.locked) {
            return;
        }
        var valuesWithType = this.pendingCanvasMutations.get(canvas);
        if (!valuesWithType || id === -1)
            return;
        var values = valuesWithType.map(function (value) {
            value.type; var rest = __rest(value, ["type"]);
            return rest;
        });
        var type = valuesWithType[0].type;
        this.mutationCb({ id: id, type: type, commands: values });
        this.pendingCanvasMutations.delete(canvas);
    };
    return CanvasManager;
}());

function wrapEvent(e) {
    return __assign(__assign({}, e), { timestamp: Date.now() });
}
var wrappedEmit;
var takeFullSnapshot;
var mirror = createMirror();
function record(options) {
    if (options === void 0) { options = {}; }
    var emit = options.emit, checkoutEveryNms = options.checkoutEveryNms, checkoutEveryNth = options.checkoutEveryNth, _a = options.blockClass, blockClass = _a === void 0 ? 'rr-block' : _a, _b = options.blockSelector, blockSelector = _b === void 0 ? null : _b, _c = options.ignoreClass, ignoreClass = _c === void 0 ? 'rr-ignore' : _c, _d = options.maskTextClass, maskTextClass = _d === void 0 ? 'rr-mask' : _d, _e = options.maskTextSelector, maskTextSelector = _e === void 0 ? null : _e, _f = options.inlineStylesheet, inlineStylesheet = _f === void 0 ? true : _f, maskAllInputs = options.maskAllInputs, _maskInputOptions = options.maskInputOptions, _slimDOMOptions = options.slimDOMOptions, maskInputFn = options.maskInputFn, maskTextFn = options.maskTextFn, hooks = options.hooks, packFn = options.packFn, _g = options.sampling, sampling = _g === void 0 ? {} : _g, mousemoveWait = options.mousemoveWait, _h = options.recordCanvas, recordCanvas = _h === void 0 ? false : _h, _j = options.userTriggeredOnInput, userTriggeredOnInput = _j === void 0 ? false : _j, _k = options.collectFonts, collectFonts = _k === void 0 ? false : _k, _l = options.inlineImages, inlineImages = _l === void 0 ? false : _l, plugins = options.plugins, _m = options.keepIframeSrcFn, keepIframeSrcFn = _m === void 0 ? function () { return false; } : _m;
    if (!emit) {
        throw new Error('emit function is required');
    }
    if (mousemoveWait !== undefined && sampling.mousemove === undefined) {
        sampling.mousemove = mousemoveWait;
    }
    var maskInputOptions = maskAllInputs === true
        ? {
            color: true,
            date: true,
            'datetime-local': true,
            email: true,
            month: true,
            number: true,
            range: true,
            search: true,
            tel: true,
            text: true,
            time: true,
            url: true,
            week: true,
            textarea: true,
            select: true,
            password: true,
        }
        : _maskInputOptions !== undefined
            ? _maskInputOptions
            : { password: true };
    var slimDOMOptions = _slimDOMOptions === true || _slimDOMOptions === 'all'
        ? {
            script: true,
            comment: true,
            headFavicon: true,
            headWhitespace: true,
            headMetaSocial: true,
            headMetaRobots: true,
            headMetaHttpEquiv: true,
            headMetaVerification: true,
            headMetaAuthorship: _slimDOMOptions === 'all',
            headMetaDescKeywords: _slimDOMOptions === 'all',
        }
        : _slimDOMOptions
            ? _slimDOMOptions
            : {};
    polyfill();
    var lastFullSnapshotEvent;
    var incrementalSnapshotCount = 0;
    var eventProcessor = function (e) {
        var e_1, _a;
        try {
            for (var _b = __values(plugins || []), _c = _b.next(); !_c.done; _c = _b.next()) {
                var plugin = _c.value;
                if (plugin.eventProcessor) {
                    e = plugin.eventProcessor(e);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (packFn) {
            e = packFn(e);
        }
        return e;
    };
    wrappedEmit = function (e, isCheckout) {
        var _a;
        if (((_a = mutationBuffers[0]) === null || _a === void 0 ? void 0 : _a.isFrozen()) &&
            e.type !== EventType.FullSnapshot &&
            !(e.type === EventType.IncrementalSnapshot &&
                e.data.source === IncrementalSource.Mutation)) {
            mutationBuffers.forEach(function (buf) { return buf.unfreeze(); });
        }
        emit(eventProcessor(e), isCheckout);
        if (e.type === EventType.FullSnapshot) {
            lastFullSnapshotEvent = e;
            incrementalSnapshotCount = 0;
        }
        else if (e.type === EventType.IncrementalSnapshot) {
            if (e.data.source === IncrementalSource.Mutation &&
                e.data.isAttachIframe) {
                return;
            }
            incrementalSnapshotCount++;
            var exceedCount = checkoutEveryNth && incrementalSnapshotCount >= checkoutEveryNth;
            var exceedTime = checkoutEveryNms &&
                e.timestamp - lastFullSnapshotEvent.timestamp > checkoutEveryNms;
            if (exceedCount || exceedTime) {
                takeFullSnapshot(true);
            }
        }
    };
    var wrappedMutationEmit = function (m) {
        wrappedEmit(wrapEvent({
            type: EventType.IncrementalSnapshot,
            data: __assign({ source: IncrementalSource.Mutation }, m),
        }));
    };
    var wrappedScrollEmit = function (p) {
        return wrappedEmit(wrapEvent({
            type: EventType.IncrementalSnapshot,
            data: __assign({ source: IncrementalSource.Scroll }, p),
        }));
    };
    var wrappedCanvasMutationEmit = function (p) {
        return wrappedEmit(wrapEvent({
            type: EventType.IncrementalSnapshot,
            data: __assign({ source: IncrementalSource.CanvasMutation }, p),
        }));
    };
    var iframeManager = new IframeManager({
        mutationCb: wrappedMutationEmit,
    });
    var canvasManager = new CanvasManager({
        recordCanvas: recordCanvas,
        mutationCb: wrappedCanvasMutationEmit,
        win: window,
        blockClass: blockClass,
        mirror: mirror,
    });
    var shadowDomManager = new ShadowDomManager({
        mutationCb: wrappedMutationEmit,
        scrollCb: wrappedScrollEmit,
        bypassOptions: {
            blockClass: blockClass,
            blockSelector: blockSelector,
            maskTextClass: maskTextClass,
            maskTextSelector: maskTextSelector,
            inlineStylesheet: inlineStylesheet,
            maskInputOptions: maskInputOptions,
            maskTextFn: maskTextFn,
            maskInputFn: maskInputFn,
            recordCanvas: recordCanvas,
            inlineImages: inlineImages,
            sampling: sampling,
            slimDOMOptions: slimDOMOptions,
            iframeManager: iframeManager,
            canvasManager: canvasManager,
        },
        mirror: mirror,
    });
    takeFullSnapshot = function (isCheckout) {
        var _a, _b, _c, _d;
        if (isCheckout === void 0) { isCheckout = false; }
        wrappedEmit(wrapEvent({
            type: EventType.Meta,
            data: {
                href: window.location.href,
                width: getWindowWidth(),
                height: getWindowHeight(),
            },
        }), isCheckout);
        mutationBuffers.forEach(function (buf) { return buf.lock(); });
        var _e = __read(snapshot(document, {
            blockClass: blockClass,
            blockSelector: blockSelector,
            maskTextClass: maskTextClass,
            maskTextSelector: maskTextSelector,
            inlineStylesheet: inlineStylesheet,
            maskAllInputs: maskInputOptions,
            maskTextFn: maskTextFn,
            slimDOM: slimDOMOptions,
            recordCanvas: recordCanvas,
            inlineImages: inlineImages,
            onSerialize: function (n) {
                if (isIframeINode(n)) {
                    iframeManager.addIframe(n);
                }
                if (hasShadowRoot(n)) {
                    shadowDomManager.addShadowRoot(n.shadowRoot, document);
                }
            },
            onIframeLoad: function (iframe, childSn) {
                iframeManager.attachIframe(iframe, childSn);
                shadowDomManager.observeAttachShadow(iframe);
            },
            keepIframeSrcFn: keepIframeSrcFn,
        }), 2), node = _e[0], idNodeMap = _e[1];
        if (!node) {
            return console.warn('Failed to snapshot the document');
        }
        mirror.map = idNodeMap;
        wrappedEmit(wrapEvent({
            type: EventType.FullSnapshot,
            data: {
                node: node,
                initialOffset: {
                    left: window.pageXOffset !== undefined
                        ? window.pageXOffset
                        : (document === null || document === void 0 ? void 0 : document.documentElement.scrollLeft) ||
                            ((_b = (_a = document === null || document === void 0 ? void 0 : document.body) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.scrollLeft) ||
                            (document === null || document === void 0 ? void 0 : document.body.scrollLeft) ||
                            0,
                    top: window.pageYOffset !== undefined
                        ? window.pageYOffset
                        : (document === null || document === void 0 ? void 0 : document.documentElement.scrollTop) ||
                            ((_d = (_c = document === null || document === void 0 ? void 0 : document.body) === null || _c === void 0 ? void 0 : _c.parentElement) === null || _d === void 0 ? void 0 : _d.scrollTop) ||
                            (document === null || document === void 0 ? void 0 : document.body.scrollTop) ||
                            0,
                },
            },
        }));
        mutationBuffers.forEach(function (buf) { return buf.unlock(); });
    };
    try {
        var handlers_1 = [];
        handlers_1.push(on('DOMContentLoaded', function () {
            wrappedEmit(wrapEvent({
                type: EventType.DomContentLoaded,
                data: {},
            }));
        }));
        var observe_1 = function (doc) {
            var _a;
            return initObservers({
                mutationCb: wrappedMutationEmit,
                mousemoveCb: function (positions, source) {
                    return wrappedEmit(wrapEvent({
                        type: EventType.IncrementalSnapshot,
                        data: {
                            source: source,
                            positions: positions,
                        },
                    }));
                },
                mouseInteractionCb: function (d) {
                    return wrappedEmit(wrapEvent({
                        type: EventType.IncrementalSnapshot,
                        data: __assign({ source: IncrementalSource.MouseInteraction }, d),
                    }));
                },
                scrollCb: wrappedScrollEmit,
                viewportResizeCb: function (d) {
                    return wrappedEmit(wrapEvent({
                        type: EventType.IncrementalSnapshot,
                        data: __assign({ source: IncrementalSource.ViewportResize }, d),
                    }));
                },
                inputCb: function (v) {
                    return wrappedEmit(wrapEvent({
                        type: EventType.IncrementalSnapshot,
                        data: __assign({ source: IncrementalSource.Input }, v),
                    }));
                },
                mediaInteractionCb: function (p) {
                    return wrappedEmit(wrapEvent({
                        type: EventType.IncrementalSnapshot,
                        data: __assign({ source: IncrementalSource.MediaInteraction }, p),
                    }));
                },
                styleSheetRuleCb: function (r) {
                    return wrappedEmit(wrapEvent({
                        type: EventType.IncrementalSnapshot,
                        data: __assign({ source: IncrementalSource.StyleSheetRule }, r),
                    }));
                },
                styleDeclarationCb: function (r) {
                    return wrappedEmit(wrapEvent({
                        type: EventType.IncrementalSnapshot,
                        data: __assign({ source: IncrementalSource.StyleDeclaration }, r),
                    }));
                },
                canvasMutationCb: wrappedCanvasMutationEmit,
                fontCb: function (p) {
                    return wrappedEmit(wrapEvent({
                        type: EventType.IncrementalSnapshot,
                        data: __assign({ source: IncrementalSource.Font }, p),
                    }));
                },
                blockClass: blockClass,
                ignoreClass: ignoreClass,
                maskTextClass: maskTextClass,
                maskTextSelector: maskTextSelector,
                maskInputOptions: maskInputOptions,
                inlineStylesheet: inlineStylesheet,
                sampling: sampling,
                recordCanvas: recordCanvas,
                inlineImages: inlineImages,
                userTriggeredOnInput: userTriggeredOnInput,
                collectFonts: collectFonts,
                doc: doc,
                maskInputFn: maskInputFn,
                maskTextFn: maskTextFn,
                blockSelector: blockSelector,
                slimDOMOptions: slimDOMOptions,
                mirror: mirror,
                iframeManager: iframeManager,
                shadowDomManager: shadowDomManager,
                canvasManager: canvasManager,
                plugins: ((_a = plugins === null || plugins === void 0 ? void 0 : plugins.filter(function (p) { return p.observer; })) === null || _a === void 0 ? void 0 : _a.map(function (p) { return ({
                    observer: p.observer,
                    options: p.options,
                    callback: function (payload) {
                        return wrappedEmit(wrapEvent({
                            type: EventType.Plugin,
                            data: {
                                plugin: p.name,
                                payload: payload,
                            },
                        }));
                    },
                }); })) || [],
            }, hooks);
        };
        iframeManager.addLoadListener(function (iframeEl) {
            handlers_1.push(observe_1(iframeEl.contentDocument));
        });
        var init_1 = function () {
            takeFullSnapshot();
            handlers_1.push(observe_1(document));
        };
        if (document.readyState === 'interactive' ||
            document.readyState === 'complete') {
            init_1();
        }
        else {
            handlers_1.push(on('load', function () {
                wrappedEmit(wrapEvent({
                    type: EventType.Load,
                    data: {},
                }));
                init_1();
            }, window));
        }
        return function () {
            handlers_1.forEach(function (h) { return h(); });
        };
    }
    catch (error) {
        console.warn(error);
    }
}
record.addCustomEvent = function (tag, payload) {
    if (!wrappedEmit) {
        throw new Error('please add custom event after start recording');
    }
    wrappedEmit(wrapEvent({
        type: EventType.Custom,
        data: {
            tag: tag,
            payload: payload,
        },
    }));
};
record.freezePage = function () {
    mutationBuffers.forEach(function (buf) { return buf.freeze(); });
};
record.takeFullSnapshot = function (isCheckout) {
    if (!takeFullSnapshot) {
        throw new Error('please take full snapshot after start recording');
    }
    takeFullSnapshot(isCheckout);
};
record.mirror = mirror;

var HandleEvents = {
    // 处理xhr、fetch回调
    handleHttp: function (data, type) {
        var result = httpTransform(data);
        // 添加用户行为，去掉自身上报的接口行为
        if (!data.url.includes(options.dsn)) {
            breadcrumb.push({
                type: type,
                category: breadcrumb.getCategory(type),
                data: result,
                status: result.status,
                time: data.time,
            });
        }
        if (result.status === 'error') {
            // 上报接口错误
            transportData.send(__assign$1(__assign$1({}, result), { type: type, status: STATUS_CODE.ERROR }));
        }
    },
    handleError: function (ev) {
        try {
            var target = ev.target;
            if (!target || (ev.target && !ev.target.localName)) {
                // vue和react捕获的报错使用ev解析，异步错误使用ev.error解析
                var stackFrame = ErrorStackParser.parse(!target ? ev : ev.error)[0];
                var fileName = stackFrame.fileName, columnNumber = stackFrame.columnNumber, lineNumber = stackFrame.lineNumber;
                var errorData = {
                    type: EVENTTYPES.ERROR,
                    status: STATUS_CODE.ERROR,
                    time: getTimestamp(),
                    message: ev.message,
                    fileName: fileName,
                    line: lineNumber,
                    column: columnNumber,
                };
                breadcrumb.push({
                    type: EVENTTYPES.ERROR,
                    category: breadcrumb.getCategory(EVENTTYPES.ERROR),
                    data: errorData,
                    time: getTimestamp(),
                    status: STATUS_CODE.ERROR,
                });
                var hash = getErrorUid("".concat(EVENTTYPES.ERROR, "-").concat(ev.message, "-").concat(fileName, "-").concat(columnNumber));
                // 开启repeatCodeError第一次报错才上报
                if (!options.repeatCodeError || (options.repeatCodeError && !hashMapExist(hash))) {
                    return transportData.send(errorData);
                }
            }
            // 资源加载报错
            if (target === null || target === void 0 ? void 0 : target.localName) {
                // 提取资源加载的信息
                var data = resourceTransform(target);
                breadcrumb.push({
                    type: EVENTTYPES.RESOURCE,
                    category: breadcrumb.getCategory(EVENTTYPES.RESOURCE),
                    status: STATUS_CODE.ERROR,
                    time: getTimestamp(),
                    data: data,
                });
                return transportData.send(__assign$1(__assign$1({}, data), { type: EVENTTYPES.RESOURCE, status: STATUS_CODE.ERROR }));
            }
        }
        catch (er) {
            // console.error('web-see: handleError错误解析异常:', er);
        }
    },
    handleHistory: function (data) {
        var from = data.from, to = data.to;
        // 定义parsedFrom变量，值为relative
        var parsedFrom = parseUrlToObj(from).relative;
        var parsedTo = parseUrlToObj(to).relative;
        breadcrumb.push({
            type: EVENTTYPES.HISTORY,
            category: breadcrumb.getCategory(EVENTTYPES.HISTORY),
            data: {
                from: parsedFrom ? parsedFrom : '/',
                to: parsedTo ? parsedTo : '/',
            },
            time: getTimestamp(),
            status: STATUS_CODE.OK,
        });
    },
    handleHashchange: function (data) {
        var oldURL = data.oldURL, newURL = data.newURL;
        var from = parseUrlToObj(oldURL).relative;
        var to = parseUrlToObj(newURL).relative;
        breadcrumb.push({
            type: EVENTTYPES.HASHCHANGE,
            category: breadcrumb.getCategory(EVENTTYPES.HASHCHANGE),
            data: {
                from: from,
                to: to,
            },
            time: getTimestamp(),
            status: STATUS_CODE.OK,
        });
    },
    handleUnhandleRejection: function (ev) {
        try {
            var stackFrame = ErrorStackParser.parse(ev.reason)[0];
            var fileName = stackFrame.fileName, columnNumber = stackFrame.columnNumber, lineNumber = stackFrame.lineNumber;
            var message = unknownToString(ev.reason.message || ev.reason.stack);
            var data = {
                type: EVENTTYPES.UNHANDLEDREJECTION,
                status: STATUS_CODE.ERROR,
                time: getTimestamp(),
                message: message,
                fileName: fileName,
                line: lineNumber,
                column: columnNumber,
            };
            breadcrumb.push({
                type: EVENTTYPES.UNHANDLEDREJECTION,
                category: breadcrumb.getCategory(EVENTTYPES.UNHANDLEDREJECTION),
                time: getTimestamp(),
                status: STATUS_CODE.ERROR,
                data: data,
            });
            var hash = getErrorUid("".concat(EVENTTYPES.UNHANDLEDREJECTION, "-").concat(message, "-").concat(fileName, "-").concat(columnNumber));
            // 开启repeatCodeError第一次报错才上报
            if (!options.repeatCodeError || (options.repeatCodeError && !hashMapExist(hash))) {
                transportData.send(data);
            }
        }
        catch (er) {
            // console.error('web-see: handleUnhandleRejection错误解析异常:', er);
        }
    },
    handlePerformance: function () {
        try {
            // 获取FCP、LCP、TTFB、FID等指标
            getWebVitals(function (res) {
                // name指标名称、rating 评级、value数值
                var name = res.name, rating = res.rating, value = res.value;
                transportData.send({
                    type: EVENTTYPES.PERFORMANCE,
                    status: STATUS_CODE.OK,
                    time: getTimestamp(),
                    name: name,
                    rating: rating,
                    value: value,
                });
            });
        }
        catch (err) {
            // console.err('性能指标获取错误:' + err);
        }
        var observer = new PerformanceObserver(function (list) {
            for (var _i = 0, _a = list.getEntries(); _i < _a.length; _i++) {
                var long = _a[_i];
                // 上报长任务详情
                transportData.send({
                    type: EVENTTYPES.PERFORMANCE,
                    name: 'longTask',
                    longTask: long,
                    time: getTimestamp(),
                    status: STATUS_CODE.OK,
                });
            }
        });
        observer.observe({ entryTypes: ['longtask'] });
        on$1(_global, 'load', function () {
            // 上报资源列表
            transportData.send({
                type: EVENTTYPES.PERFORMANCE,
                name: 'resource_list',
                time: getTimestamp(),
                status: STATUS_CODE.OK,
                resourceList: getResource(),
            });
            // 上报内存情况, safari、firefox不支持该属性
            if (performance.memory) {
                transportData.send({
                    type: EVENTTYPES.PERFORMANCE,
                    name: 'memory',
                    time: getTimestamp(),
                    status: STATUS_CODE.OK,
                    memory: {
                        jsHeapSizeLimit: performance.memory.jsHeapSizeLimit,
                        totalJSHeapSize: performance.memory.totalJSHeapSize,
                        usedJSHeapSize: performance.memory.usedJSHeapSize,
                    },
                });
            }
        });
    },
    handleScreen: function () {
        try {
            // events存储录屏信息
            var events_1 = [];
            // 调用stopFn停止录像
            // let stopFn = record({
            record({
                emit: function (event, isCheckout) {
                    if (isCheckout) {
                        // 此段时间内发生错误，上报录屏信息
                        if (_support.hasError) {
                            var recordScreenId = _support.recordScreenId;
                            _support.recordScreenId = generateUUID();
                            transportData.send({
                                type: EVENTTYPES.RECORDSCREEN,
                                recordScreenId: recordScreenId,
                                time: getTimestamp(),
                                status: STATUS_CODE.OK,
                                events: zip(events_1),
                            });
                            events_1 = [];
                            _support.hasError = false;
                        }
                        else {
                            // 不上报，清空录屏
                            events_1 = [];
                            _support.recordScreenId = generateUUID();
                        }
                    }
                    events_1.push(event);
                },
                recordCanvas: true,
                // 默认每10s重新制作快照
                checkoutEveryNms: 1000 * options.recordScreentime,
            });
        }
        catch (err) {
            // console.err('录屏报错:' + err);
        }
    },
    handleWhiteScreen: function () {
        try {
            openWhiteScreen(function (res) {
                // 上报白屏检测信息
                transportData.send(__assign$1({ type: EVENTTYPES.WHITESCREEN, time: getTimestamp() }, res));
            }, options);
        }
        catch (err) {
            // console.err('白屏检测错误:' + err);
        }
    },
};

// 判断当前接口是否为需要过滤掉的接口
function isFilterHttpUrl(url) {
    return options.filterXhrUrlRegExp && options.filterXhrUrlRegExp.test(url);
}
function replace(type) {
    switch (type) {
        case EVENTTYPES.WHITESCREEN:
            whiteScreen();
            break;
        case EVENTTYPES.XHR:
            xhrReplace();
            break;
        case EVENTTYPES.FETCH:
            fetchReplace();
            break;
        case EVENTTYPES.ERROR:
            listenError();
            break;
        case EVENTTYPES.HISTORY:
            historyReplace();
            break;
        case EVENTTYPES.UNHANDLEDREJECTION:
            unhandledrejectionReplace();
            break;
        case EVENTTYPES.CLICK:
            domReplace();
            break;
        case EVENTTYPES.HASHCHANGE:
            listenHashchange();
            break;
        case EVENTTYPES.PERFORMANCE:
            listenPerformance();
            break;
        case EVENTTYPES.RECORDSCREEN:
            recordScreen();
            break;
    }
}
function addReplaceHandler(handler) {
    if (!subscribeEvent(handler))
        return;
    replace(handler.type);
}
function xhrReplace() {
    if (!('XMLHttpRequest' in _global)) {
        return;
    }
    var originalXhrProto = XMLHttpRequest.prototype;
    replaceAop(originalXhrProto, 'open', function (originalOpen) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            this.websee_xhr = {
                method: variableTypeDetection.isString(args[0]) ? args[0].toUpperCase() : args[0],
                url: args[1],
                sTime: getTimestamp(),
                type: HTTPTYPE.XHR,
            };
            originalOpen.apply(this, args);
        };
    });
    replaceAop(originalXhrProto, 'send', function (originalSend) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _a = this.websee_xhr, method = _a.method, url = _a.url;
            // 监听loadend事件，接口成功或失败都会执行
            on$1(this, 'loadend', function () {
                // isSdkTransportUrl 判断当前接口是否为上报的接口
                // isFilterHttpUrl 判断当前接口是否为需要过滤掉的接口
                if ((method === EMethods.Post && transportData.isSdkTransportUrl(url)) ||
                    isFilterHttpUrl(url))
                    return;
                var _a = this, responseType = _a.responseType, response = _a.response, status = _a.status;
                this.websee_xhr.requestData = args[0];
                var eTime = getTimestamp();
                // 设置该接口的time，用户用户行为按时间排序
                this.websee_xhr.time = this.websee_xhr.sTime;
                this.websee_xhr.Status = status;
                if (['', 'json', 'text'].indexOf(responseType) !== -1) {
                    // 用户设置handleHttpStatus函数来判断接口是否正确，只有接口报错时才保留response
                    if (options.handleHttpStatus && typeof options.handleHttpStatus == 'function') {
                        this.websee_xhr.response = response && JSON.parse(response);
                    }
                }
                // 接口的执行时长
                this.websee_xhr.elapsedTime = eTime - this.websee_xhr.sTime;
                // 执行之前注册的xhr回调函数
                triggerHandlers(EVENTTYPES.XHR, this.websee_xhr);
            });
            originalSend.apply(this, args);
        };
    });
}
function fetchReplace() {
    if (!('fetch' in _global)) {
        return;
    }
    replaceAop(_global, EVENTTYPES.FETCH, function (originalFetch) {
        return function (url, config) {
            if (config === void 0) { config = {}; }
            var sTime = getTimestamp();
            var method = (config && config.method) || 'GET';
            var fetchData = {
                type: HTTPTYPE.FETCH,
                method: method,
                requestData: config && config.body,
                url: url,
                response: '',
            };
            // 获取配置的headers
            var headers = new Headers(config.headers || {});
            Object.assign(headers, {
                setRequestHeader: headers.set,
            });
            config = Object.assign({}, config, headers);
            return originalFetch.apply(_global, [url, config]).then(function (res) {
                // 克隆一份，防止被标记已消费
                var tempRes = res.clone();
                var eTime = getTimestamp();
                fetchData = Object.assign({}, fetchData, {
                    elapsedTime: eTime - sTime,
                    Status: tempRes.status,
                    time: sTime,
                });
                tempRes.text().then(function (data) {
                    // 同理，进接口进行过滤
                    if ((method === EMethods.Post && transportData.isSdkTransportUrl(url)) ||
                        isFilterHttpUrl(url))
                        return;
                    // 用户设置handleHttpStatus函数来判断接口是否正确，只有接口报错时才保留response
                    if (options.handleHttpStatus && typeof options.handleHttpStatus == 'function') {
                        fetchData.response = data;
                    }
                    triggerHandlers(EVENTTYPES.FETCH, fetchData);
                });
                return res;
            }, 
            // 接口报错
            function (err) {
                var eTime = getTimestamp();
                if ((method === EMethods.Post && transportData.isSdkTransportUrl(url)) ||
                    isFilterHttpUrl(url))
                    return;
                fetchData = Object.assign({}, fetchData, {
                    elapsedTime: eTime - sTime,
                    status: 0,
                    time: sTime,
                });
                triggerHandlers(EVENTTYPES.FETCH, fetchData);
                throw err;
            });
        };
    });
}
function listenHashchange() {
    // 通过onpopstate事件，来监听hash模式下路由的变化
    if (isExistProperty(_global, 'onhashchange')) {
        on$1(_global, EVENTTYPES.HASHCHANGE, function (e) {
            triggerHandlers(EVENTTYPES.HASHCHANGE, e);
        });
    }
}
function listenError() {
    on$1(_global, 'error', function (e) {
        console.log(e);
        triggerHandlers(EVENTTYPES.ERROR, e);
    }, true);
}
// last time route
var lastHref = getLocationHref();
function historyReplace() {
    // 是否支持history
    if (!supportsHistory())
        return;
    var oldOnpopstate = _global.onpopstate;
    // 添加 onpopstate事件
    _global.onpopstate = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var to = getLocationHref();
        var from = lastHref;
        lastHref = to;
        triggerHandlers(EVENTTYPES.HISTORY, {
            from: from,
            to: to,
        });
        oldOnpopstate && oldOnpopstate.apply(this, args);
    };
    function historyReplaceFn(originalHistoryFn) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var url = args.length > 2 ? args[2] : undefined;
            if (url) {
                var from = lastHref;
                var to = String(url);
                lastHref = to;
                triggerHandlers(EVENTTYPES.HISTORY, {
                    from: from,
                    to: to,
                });
            }
            return originalHistoryFn.apply(this, args);
        };
    }
    // 重写pushState、replaceState事件
    replaceAop(_global.history, 'pushState', historyReplaceFn);
    replaceAop(_global.history, 'replaceState', historyReplaceFn);
}
function unhandledrejectionReplace() {
    on$1(_global, EVENTTYPES.UNHANDLEDREJECTION, function (ev) {
        // ev.preventDefault() 阻止默认行为后，控制台就不会再报红色错误
        triggerHandlers(EVENTTYPES.UNHANDLEDREJECTION, ev);
    });
}
function domReplace() {
    if (!('document' in _global))
        return;
    // 节流，默认0s
    var clickThrottle = throttle$1(triggerHandlers, options.throttleDelayTime);
    on$1(_global.document, 'click', function () {
        clickThrottle(EVENTTYPES.CLICK, {
            category: 'click',
            data: this,
        });
    }, true);
}
function listenPerformance() {
    triggerHandlers(EVENTTYPES.PERFORMANCE);
}
function recordScreen() {
    triggerHandlers(EVENTTYPES.RECORDSCREEN);
}
function whiteScreen() {
    triggerHandlers(EVENTTYPES.WHITESCREEN);
}

function setupReplace() {
    // 白屏检测
    addReplaceHandler({
        callback: function () {
            HandleEvents.handleWhiteScreen();
        },
        type: EVENTTYPES.WHITESCREEN,
    });
    // 重写XMLHttpRequest
    addReplaceHandler({
        callback: function (data) {
            HandleEvents.handleHttp(data, EVENTTYPES.XHR);
        },
        type: EVENTTYPES.XHR,
    });
    // 重写fetch
    addReplaceHandler({
        callback: function (data) {
            HandleEvents.handleHttp(data, EVENTTYPES.FETCH);
        },
        type: EVENTTYPES.FETCH,
    });
    // 捕获错误
    addReplaceHandler({
        callback: function (error) {
            HandleEvents.handleError(error);
        },
        type: EVENTTYPES.ERROR,
    });
    // 监听history模式路由的变化
    addReplaceHandler({
        callback: function (data) {
            HandleEvents.handleHistory(data);
        },
        type: EVENTTYPES.HISTORY,
    });
    // 添加handleUnhandleRejection事件
    addReplaceHandler({
        callback: function (data) {
            HandleEvents.handleUnhandleRejection(data);
        },
        type: EVENTTYPES.UNHANDLEDREJECTION,
    });
    // 监听click事件
    addReplaceHandler({
        callback: function (data) {
            // 获取html信息
            var htmlString = htmlElementAsString(data.data.activeElement);
            if (htmlString) {
                breadcrumb.push({
                    type: EVENTTYPES.CLICK,
                    status: STATUS_CODE.OK,
                    category: breadcrumb.getCategory(EVENTTYPES.CLICK),
                    data: htmlString,
                    time: getTimestamp(),
                });
            }
        },
        type: EVENTTYPES.CLICK,
    });
    // 监听hashchange
    addReplaceHandler({
        callback: function (e) {
            HandleEvents.handleHashchange(e);
        },
        type: EVENTTYPES.HASHCHANGE,
    });
    // 获取性能指标
    addReplaceHandler({
        callback: function () {
            HandleEvents.handlePerformance();
        },
        type: EVENTTYPES.PERFORMANCE,
    });
    // 前端录屏
    addReplaceHandler({
        callback: function () {
            HandleEvents.handleScreen();
        },
        type: EVENTTYPES.RECORDSCREEN,
    });
}

var e,n,t,r,a=-1,o=function(e){addEventListener("pageshow",(function(n){n.persisted&&(a=n.timeStamp,e(n));}),!0);},c=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},u=function(){var e=c();return e&&e.activationStart||0},f=function(e,n){var t=c(),r="navigate";return a>=0?r="back-forward-cache":t&&(r=document.prerendering||u()>0?"prerender":document.wasDiscarded?"restore":t.type.replace(/_/g,"-")),{name:e,value:void 0===n?-1:n,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},s=function(e,n,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var r=new PerformanceObserver((function(e){Promise.resolve().then((function(){n(e.getEntries());}));}));return r.observe(Object.assign({type:e,buffered:!0},t||{})),r}}catch(e){}},d=function(e,n,t,r){var i,a;return function(o){n.value>=0&&(o||r)&&((a=n.value-(i||0))||void 0===i)&&(i=n.value,n.delta=a,n.rating=function(e,n){return e>n[1]?"poor":e>n[0]?"needs-improvement":"good"}(n.value,t),e(n));}},l=function(e){requestAnimationFrame((function(){return requestAnimationFrame((function(){return e()}))}));},v=function(e){var n=function(n){"pagehide"!==n.type&&"hidden"!==document.visibilityState||e(n);};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0);},p=function(e){var n=!1;return function(t){n||(e(t),n=!0);}},m=-1,h=function(){return "hidden"!==document.visibilityState||document.prerendering?1/0:0},g=function(e){"hidden"===document.visibilityState&&m>-1&&(m="visibilitychange"===e.type?e.timeStamp:0,T());},y=function(){addEventListener("visibilitychange",g,!0),addEventListener("prerenderingchange",g,!0);},T=function(){removeEventListener("visibilitychange",g,!0),removeEventListener("prerenderingchange",g,!0);},E=function(){return m<0&&(m=h(),y(),o((function(){setTimeout((function(){m=h(),y();}),0);}))),{get firstHiddenTime(){return m}}},C=function(e){document.prerendering?addEventListener("prerenderingchange",(function(){return e()}),!0):e();},L=function(e,n){n=n||{},C((function(){var t,r=[1800,3e3],i=E(),a=f("FCP"),c=s("paint",(function(e){e.forEach((function(e){"first-contentful-paint"===e.name&&(c.disconnect(),e.startTime<i.firstHiddenTime&&(a.value=Math.max(e.startTime-u(),0),a.entries.push(e),t(!0)));}));}));c&&(t=d(e,a,r,n.reportAllChanges),o((function(i){a=f("FCP"),t=d(e,a,r,n.reportAllChanges),l((function(){a.value=performance.now()-i.timeStamp,t(!0);}));})));}));},b=function(e,n){n=n||{},L(p((function(){var t,r=[.1,.25],i=f("CLS",0),a=0,c=[],u=function(e){e.forEach((function(e){if(!e.hadRecentInput){var n=c[0],t=c[c.length-1];a&&e.startTime-t.startTime<1e3&&e.startTime-n.startTime<5e3?(a+=e.value,c.push(e)):(a=e.value,c=[e]);}})),a>i.value&&(i.value=a,i.entries=c,t());},p=s("layout-shift",u);p&&(t=d(e,i,r,n.reportAllChanges),v((function(){u(p.takeRecords()),t(!0);})),o((function(){a=0,i=f("CLS",0),t=d(e,i,r,n.reportAllChanges),l((function(){return t()}));})),setTimeout(t,0));})));},w={passive:!0,capture:!0},S=new Date,A=function(r,i){e||(e=i,n=r,t=new Date,F(removeEventListener),I());},I=function(){if(n>=0&&n<t-S){var i={entryType:"first-input",name:e.type,target:e.target,cancelable:e.cancelable,startTime:e.timeStamp,processingStart:e.timeStamp+n};r.forEach((function(e){e(i);})),r=[];}},P=function(e){if(e.cancelable){var n=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,n){var t=function(){A(e,n),i();},r=function(){i();},i=function(){removeEventListener("pointerup",t,w),removeEventListener("pointercancel",r,w);};addEventListener("pointerup",t,w),addEventListener("pointercancel",r,w);}(n,e):A(n,e);}},F=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(n){return e(n,P,w)}));},M=function(t,i){i=i||{},C((function(){var a,c=[100,300],u=E(),l=f("FID"),m=function(e){e.startTime<u.firstHiddenTime&&(l.value=e.processingStart-e.startTime,l.entries.push(e),a(!0));},h=function(e){e.forEach(m);},g=s("first-input",h);a=d(t,l,c,i.reportAllChanges),g&&v(p((function(){h(g.takeRecords()),g.disconnect();}))),g&&o((function(){var o;l=f("FID"),a=d(t,l,c,i.reportAllChanges),r=[],n=-1,e=null,F(addEventListener),o=m,r.push(o),I();}));}));},G={},J=function(e,n){n=n||{},C((function(){var t,r=[2500,4e3],i=E(),a=f("LCP"),c=function(e){var n=e[e.length-1];if(n){var r=Math.max(n.startTime-u(),0);r<i.firstHiddenTime&&(a.value=r,a.entries=[n],t());}},m=s("largest-contentful-paint",c);if(m){t=d(e,a,r,n.reportAllChanges);var h=p((function(){G[a.id]||(c(m.takeRecords()),m.disconnect(),G[a.id]=!0,t(!0));}));["keydown","click"].forEach((function(e){addEventListener(e,h,!0);})),v(h),o((function(i){a=f("LCP"),t=d(e,a,r,n.reportAllChanges),l((function(){a.value=performance.now()-i.timeStamp,G[a.id]=!0,t(!0);}));}));}}));},K=function e(n){document.prerendering?C((function(){return e(n)})):"complete"!==document.readyState?addEventListener("load",(function(){return e(n)}),!0):setTimeout(n,0);},Q=function(e,n){n=n||{};var t=[800,1800],r=f("TTFB"),i=d(e,r,t,n.reportAllChanges);K((function(){var a=c();if(a){var s=a.responseStart;if(s<=0||s>performance.now())return;r.value=Math.max(s-u(),0),r.entries=[a],i(!0),o((function(){r=f("TTFB",0),(i=d(e,r,t,n.reportAllChanges))(!0);}));}}));};

// firstScreenPaint为首屏加载时间
var firstScreenPaint = 0;
// 页面是否渲染完成
var isOnLoaded = false;
var timer;
var observer;
var entries = [];
// 定时器循环监听dom的变化，当document.readyState === 'complete'时，停止监听
function checkDOMChange(callback) {
    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(function () {
        if (document.readyState === 'complete') {
            isOnLoaded = true;
        }
        if (isOnLoaded) {
            // 取消监听
            observer && observer.disconnect();
            // document.readyState === 'complete'时，计算首屏渲染时间
            firstScreenPaint = getRenderTime();
            entries = [];
            callback && callback(firstScreenPaint);
        }
        else {
            checkDOMChange(callback);
        }
    });
}
function getRenderTime() {
    var startTime = 0;
    entries.forEach(function (entry) {
        if (entry.startTime > startTime) {
            startTime = entry.startTime;
        }
    });
    // performance.timing.navigationStart 页面的起始时间
    return startTime - performance.timing.navigationStart;
}
var viewportWidth = _global.innerWidth;
var viewportHeight = _global.innerHeight;
// dom 对象是否在屏幕内
function isInScreen(dom) {
    var rectInfo = dom.getBoundingClientRect();
    if (rectInfo.left < viewportWidth && rectInfo.top < viewportHeight) {
        return true;
    }
    return false;
}
// 外部通过callback 拿到首屏加载时间
function observeFirstScreenPaint(callback) {
    var ignoreDOMList = ['STYLE', 'SCRIPT', 'LINK'];
    observer = new MutationObserver(function (mutationList) {
        checkDOMChange(callback);
        var entry = { children: [], startTime: 0 };
        for (var _i = 0, mutationList_1 = mutationList; _i < mutationList_1.length; _i++) {
            var mutation = mutationList_1[_i];
            if (mutation.addedNodes.length && isInScreen(mutation.target)) {
                for (var _a = 0, _b = mutation.addedNodes; _a < _b.length; _a++) {
                    var node = _b[_a];
                    // 忽略掉以上标签的变化
                    if (node.nodeType === 1 && !ignoreDOMList.includes(node.tagName) && isInScreen(node)) {
                        // eslint-disable-next-line
                        //@ts-ignore 
                        entry.children.push(node);
                    }
                }
            }
        }
        if (entry.children.length) {
            entries.push(entry);
            entry.startTime = new Date().getTime();
        }
    });
    observer.observe(document, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true, // 监听元素的属性是否变化
    });
}
function isSafari() {
    return /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
}
function getResource() {
    if (performance.getEntriesByType) {
        var entries_1 = performance.getEntriesByType('resource');
        // 过滤掉非静态资源的 fetch、 xmlhttprequest、beacon
        var list = entries_1.filter(function (entry) {
            return ['fetch', 'xmlhttprequest', 'beacon'].indexOf(entry.initiatorType) === -1;
        });
        if (list.length) {
            list = JSON.parse(JSON.stringify(list));
            list.forEach(function (entry) {
                entry.isCache = isCache(entry);
            });
        }
        return list;
    }
}
// 判断资料是否来自缓存
function isCache(entry) {
    return entry.transferSize === 0 || (entry.transferSize !== 0 && entry.encodedBodySize === 0);
}
function getFCP(callback) {
    var entryHandler = function (list) {
        for (var _i = 0, _a = list.getEntries(); _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry.name === 'first-contentful-paint') {
                observer.disconnect();
                callback({
                    name: 'FCP',
                    value: entry.startTime,
                    rating: entry.startTime > 2500 ? 'poor' : 'good',
                });
            }
        }
    };
    var observer = new PerformanceObserver(entryHandler);
    observer.observe({ type: 'paint', buffered: true });
}
function getLCP(callback) {
    var entryHandler = function (list) {
        for (var _i = 0, _a = list.getEntries(); _i < _a.length; _i++) {
            var entry = _a[_i];
            observer.disconnect();
            callback({
                name: 'LCP',
                value: entry.startTime,
                rating: entry.startTime > 2500 ? 'poor' : 'good',
            });
        }
    };
    var observer = new PerformanceObserver(entryHandler);
    observer.observe({ type: 'largest-contentful-paint', buffered: true });
}
function getFID(callback) {
    var entryHandler = function (entryList) {
        for (var _i = 0, _a = entryList.getEntries(); _i < _a.length; _i++) {
            var entry = _a[_i];
            observer.disconnect();
            var value = entry.processingStart - entry.startTime;
            callback({
                name: 'FID',
                value: value,
                rating: value > 100 ? 'poor' : 'good',
            });
        }
    };
    var observer = new PerformanceObserver(entryHandler);
    observer.observe({ type: 'first-input', buffered: true });
}
function getCLS(callback) {
    var clsValue = 0;
    // let clsEntries = [];
    var sessionValue = 0;
    var sessionEntries = [];
    var entryHandler = function (entryList) {
        for (var _i = 0, _a = entryList.getEntries(); _i < _a.length; _i++) {
            var entry = _a[_i];
            // 只将不带有最近用户输入标志的布局偏移计算在内。
            if (!entry.hadRecentInput) {
                var firstSessionEntry = sessionEntries[0];
                var lastSessionEntry = sessionEntries[sessionEntries.length - 1];
                // 如果条目与上一条目的相隔时间小于 1 秒且
                // 与会话中第一个条目的相隔时间小于 5 秒，那么将条目
                // 包含在当前会话中。否则，开始一个新会话。
                if (sessionValue &&
                    entry.startTime - lastSessionEntry.startTime < 1000 &&
                    entry.startTime - firstSessionEntry.startTime < 5000) {
                    sessionValue += entry.value;
                    sessionEntries.push(entry);
                }
                else {
                    sessionValue = entry.value;
                    sessionEntries = [entry];
                }
                // 如果当前会话值大于当前 CLS 值，
                // 那么更新 CLS 及其相关条目。
                if (sessionValue > clsValue) {
                    clsValue = sessionValue;
                    // clsEntries = sessionEntries;
                    observer.disconnect();
                    callback({
                        name: 'CLS',
                        value: clsValue,
                        rating: clsValue > 2500 ? 'poor' : 'good',
                    });
                }
            }
        }
    };
    var observer = new PerformanceObserver(entryHandler);
    observer.observe({ type: 'layout-shift', buffered: true });
}
function getTTFB(callback) {
    on$1(_global, 'load', function () {
        var _a = _global.performance.timing, responseStart = _a.responseStart, navigationStart = _a.navigationStart;
        var value = responseStart - navigationStart;
        callback({
            name: 'TTFB',
            value: value,
            rating: value > 100 ? 'poor' : 'good',
        });
    });
}
function getWebVitals(callback) {
    // web-vitals 不兼容safari浏览器
    if (isSafari()) {
        getFID(function (res) {
            callback(res);
        });
        getFCP(function (res) {
            callback(res);
        });
        getLCP(function (res) {
            callback(res);
        });
        getCLS(function (res) {
            callback(res);
        });
        getTTFB(function (res) {
            callback(res);
        });
    }
    else {
        J(function (res) {
            callback(res);
        });
        M(function (res) {
            callback(res);
        });
        b(function (res) {
            callback(res);
        });
        L(function (res) {
            callback(res);
        });
        Q(function (res) {
            callback(res);
        });
    }
    // 首屏加载时间
    observeFirstScreenPaint(function (res) {
        var data = {
            name: 'FSP',
            value: res,
            rating: res > 2500 ? 'poor' : 'good',
        };
        callback(data);
    });
}

/**
 * 检测页面是否白屏
 * @param {function} callback - 回到函数获取检测结果
 * @param {boolean} skeletonProject - 页面是否有骨架屏
 * @param {array} whiteBoxElements - 容器列表，默认值为['html', 'body', '#app', '#root']
 */
function openWhiteScreen(callback, _a) {
    var skeletonProject = _a.skeletonProject, whiteBoxElements = _a.whiteBoxElements;
    var _whiteLoopNum = 0;
    var _skeletonInitList = []; // 存储初次采样点
    var _skeletonNowList = []; // 存储当前采样点
    // 项目有骨架屏
    if (skeletonProject) {
        if (document.readyState != 'complete') {
            sampling();
        }
    }
    else {
        // 页面加载完毕
        if (document.readyState === 'complete') {
            sampling();
        }
        else {
            _global.addEventListener('load', sampling);
        }
    }
    // 选中dom点的名称
    function getSelector(element) {
        if (element.id) {
            return '#' + element.id;
        }
        else if (element.className) {
            // div home => div.home
            return ('.' +
                element.className
                    .split(' ')
                    .filter(function (item) { return !!item; })
                    .join('.'));
        }
        else {
            return element.nodeName.toLowerCase();
        }
    }
    // 判断采样点是否为容器节点
    function isContainer(element) {
        var selector = getSelector(element);
        if (skeletonProject) {
            _whiteLoopNum ? _skeletonNowList.push(selector) : _skeletonInitList.push(selector);
        }
        return (whiteBoxElements === null || whiteBoxElements === void 0 ? void 0 : whiteBoxElements.indexOf(selector)) != -1;
    }
    // 采样对比
    function sampling() {
        var emptyPoints = 0;
        for (var i = 1; i <= 9; i++) {
            var xElements = document.elementsFromPoint((_global.innerWidth * i) / 10, _global.innerHeight / 2);
            var yElements = document.elementsFromPoint(_global.innerWidth / 2, (_global.innerHeight * i) / 10);
            if (isContainer(xElements[0]))
                emptyPoints++;
            // 中心点只计算一次
            if (i != 5) {
                if (isContainer(yElements[0]))
                    emptyPoints++;
            }
        }
        // console.log('_skeletonInitList', _skeletonInitList);
        // console.log('_skeletonNowList', _skeletonNowList);
        // 页面正常渲染，停止轮训
        if (emptyPoints != 17) {
            if (skeletonProject) {
                // 第一次不比较
                if (!_whiteLoopNum)
                    return openWhiteLoop();
                // 比较前后dom是否一致
                if (_skeletonNowList.join() == _skeletonInitList.join())
                    return callback({
                        status: STATUS_CODE.ERROR,
                    });
            }
            if (_support._loopTimer) {
                clearTimeout(_support._loopTimer);
                _support._loopTimer = null;
            }
        }
        else {
            // 开启轮训
            if (!_support._loopTimer) {
                openWhiteLoop();
            }
        }
        // 17个点都是容器节点算作白屏
        callback({
            status: emptyPoints == 17 ? STATUS_CODE.ERROR : STATUS_CODE.OK,
        });
    }
    // 开启白屏轮训
    function openWhiteLoop() {
        if (_support._loopTimer)
            return;
        _support._loopTimer = setInterval(function () {
            if (skeletonProject) {
                _whiteLoopNum++;
                _skeletonNowList = [];
            }
            sampling();
        }, 1000);
    }
}

function init(options) {
    if (!options.dsn || !options.apikey) {
        return console.error("web-see \u7F3A\u5C11\u5FC5\u987B\u914D\u7F6E\u9879\uFF1A".concat(!options.dsn ? 'dsn' : 'apikey', " "));
    }
    if (!('fetch' in _global) || options.disabled)
        return;
    // 初始化配置
    handleOptions(options);
    setupReplace();
}
function install(Vue, options) {
    if (getFlag(EVENTTYPES.VUE))
        return;
    setFlag(EVENTTYPES.VUE, true);
    var handler = Vue.config.errorHandler;
    // vue项目在Vue.config.errorHandler中上报错误
    Vue.config.errorHandler = function (err, vm, info) {
        console.log(err);
        HandleEvents.handleError(err);
        if (handler)
            handler.apply(null, [err, vm, info]);
    };
    init(options);
}
// react项目在ErrorBoundary中上报错误
function errorBoundary(err) {
    if (getFlag(EVENTTYPES.REACT))
        return;
    setFlag(EVENTTYPES.REACT, true);
    HandleEvents.handleError(err);
}
var index = {
    SDK_VERSION: SDK_VERSION,
    SDK_NAME: SDK_NAME,
    init: init,
    install: install,
    errorBoundary: errorBoundary,
    log: log,
};

export { index as default };
//# sourceMappingURL=index.esm.js.map
