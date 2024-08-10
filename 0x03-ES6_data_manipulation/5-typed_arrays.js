export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const arrInt8 = new Int8Array(buffer);
  if (position > arrInt8.length) {
    throw new Error('Position outside range');
  }
  arrInt8[position] = value;
  return new DataView(buffer);
}
