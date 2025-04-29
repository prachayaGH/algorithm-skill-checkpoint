function findProductPrice(products, name) {
  // Your code here
  let left = 0 
  let right = products.length-1
  while (left <= right) {
    let mid = Math.floor((left+right) / 2)
    // ถ้า mid === ค่าที่ต้องการให้ return ค่านั้นออกไป
    // ถ้า ค่านั้น น้อยกว่า mid ให้ เริ่มหาค่า mid ใหม่โดย right = mid - 1 , mid = (left + right) / 2 
    // ถ้า ค่านั้น มากกว่า mid ให้ เริ่มหาค่า mid ใหม่โดย left = mid + 1 , mid = (left + right) / 2 
    if (products[mid]["name"] === name) {
      return products[mid]["price"]
    } else if (name < products[mid]["name"]) {
      right = mid - 1
    } else if (name > products[mid]["name"]) {
      left = mid + 1
    }
  }
  return -1
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
];

console.log(products[1]["name"])
console.log(findProductPrice(products, "Banana")); // Output: 0.8
console.log(findProductPrice(products, "Durian")); // Output: -1
