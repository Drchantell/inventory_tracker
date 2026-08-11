                                        Critical Thinking

How does TypeScript enforce type safety in this object-oriented program?

I am still getting used to TypeScript, but I understand that it uses types like string and number to make sure the correct kind of data is being used. For example, the product name should be a string and the price should be a number. If I use the wrong type, TypeScript can show an error. I think this helps catch mistakes before the program runs.

1. How did inheritance reduce code duplication for PhysicalProduct and DigitalProduct?

Inheritance was a little confusing to me at first. What I understand is that PhysicalProduct and DigitalProduct can both use the information already created in the Product class. Since they both need a name, SKU, and price, I only had to write that code once in Product. This helped keep me from repeating the same code.

2. What are the benefits of encapsulation and access modifiers (public, private, protected)?

I am still learning the difference between public, private, and protected. I understand that they control who can use or change certain information in a class. public can be used from anywhere, private stays inside the class, and protected can be used by the class and classes that extend it. I think this helps protect the data and keeps the code more organized.

3. If you had to add a new type of product, like a SubscriptionProduct, how would polymorphism make this easier?

Polymorphism is still one of the harder concepts for me, but I think it means that different product classes can use the same method name in their own way. If I added a SubscriptionProduct, it could extend Product and have its own version of something like getPriceWithTax(). Then I could still add it to the same product list and use the same loop without rewriting everything.
