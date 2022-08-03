// ২৫. আসকে আমার মন ভালো নেই -- এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও।
console.log("আসকে আমার মন ভালো নেই -- এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও।");
console.log("\n");
let monValona = "আসকে আমার মন ভালো নেই";
for (let i = 01; i <= 40; i++) {
  console.log(monValona + " " + i);
}
console.log("\n");
// ২৬. while লুপ কিভাবে কাজ করে

// ২৭. for লুপ কিভাবে কাজ করে

// ২৮. while লুপ এর মধ্যে লুপ ভেরিয়েবল চেইঞ্জ না করলে কি সমস্যা হয়।

// ২৯. একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও
console.log("একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও\n");
for (let i = 58; i <= 98; i++) {
  console.log(i);
}
console.log("\n");

// ৩০.একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও
console.log(
  "একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও\n"
);
for (let i = 412; i <= 456; i += 2) {
  console.log(i);
}
console.log("\n");
// ৩১. একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও
console.log(
  "একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও\n"
);
for (let i = 581; i <= 623; i += 2) {
  console.log(i);
}
// ৩২.while আর for loop এর মধ্যে পার্থক্য কি

// ৩৩ তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও।
console.log(
  "তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও।\n"
);
const haveLearned = [
  "Variable",
  "Variable types",
  "Data Types",
  "Mathematical Operators",
  "Shorthand Operators",
  "String Concatanation",
  ".toFixed Method",
  "access Array using index",
  "find array using value",
  "comparision Operators",
  "conditional",
  "Logical Operators",
  "while loop",
  "for loop",
];
for (let i = 0; i < haveLearned.length; i++) {
  console.log(i + " " + haveLearned[i]);
}
// ৩৪. তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও
console.log(
  "তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও\n"
);
const usedPhones = [
  "Nokia 7610",
  "Nokia 3300",
  "Nokia Express music 5310",
  "Siemense C75",
  "Xiaomi A2 Lite",
  "Redmi Note 8",
];
for (let i = 0; i < usedPhones.length; i++) {
  console.log(i + " " + usedPhones[i]);
}
// ৩৫. একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও
console.log(
  "একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও\n"
);
for (let i = 30; i <= 86; i++) {
  console.log(i);
  if (i == 44) {
    break;
  }
}
// ৩৬. তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা।
const bookPrices = [
  112, 412, 325, 24, 156, 122, 147, 985, 456, 210, 200, 143, 165,
];
for (let i = 0; i < bookPrices.length; i++) {
  if (bookPrices[i] > 200) {
    continue;
  }
  console.log(i + " " + bookPrices[i]);
}
