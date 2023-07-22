const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
const nums3 = nums1.concat(nums2, [7, 8, 9], 'Pilar');
console.log(nums3);

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = [...a1, ...a2, ...[7, 8, 9], 'Pilar'];
console.log(a3);