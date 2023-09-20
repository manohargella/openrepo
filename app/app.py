# Import necessary modules
import datetime

# Define a Product class
class Product:
    def __init__(self, product_id, name, price):
        self.product_id = product_id
        self.name = name
        self.price = price

# Define a Customer class
class Customer:
    def __init__(self, customer_id, name, email):
        self.customer_id = customer_id
        self.name = name
        self.email = email

# Define an Order class
class Order:
    def __init__(self, order_id, customer, products):
        self.order_id = order_id
        self.customer = customer
        self.products = products
        self.order_date = datetime.datetime.now()

    def calculate_total(self):
        total = sum(product.price for product in self.products)
        return total

# Create some sample products
product1 = Product(1, "Laptop", 899.99)
product2 = Product(2, "Mouse", 19.99)
product3 = Product(3, "Keyboard", 49.99)
product4 = Product(4, "Monitor", 249.99)

# Create some sample customers
customer1 = Customer(101, "John Doe", "john@example.com")
customer2 = Customer(102, "Jane Smith", "jane@example.com")

# Create sample orders
order1 = Order(201, customer1, [product1, product2])
order2 = Order(202, customer2, [product3, product4])

# Display order information
print("Order ID:", order1.order_id)
print("Customer:", order1.customer.name)
print("Products:")
for product in order1.products:
    print(f" - {product.name}: ${product.price}")
print("Total:", order1.calculate_total())
print("Order Date:", order1.order_date)

# Repeat the above for order2

# Additional functionality can be added here for managing orders, customers, and products.

# End of sample code
# Define lists to store products, customers, and orders
products = []
customers = []
orders = []

# Function to add a new product
def add_product(product_id, name, price):
    product = Product(product_id, name, price)
    products.append(product)
    print(f"Product '{name}' added successfully!")

# Function to list all products
def list_products():
    print("Products:")
    for product in products:
        print(f" - {product.name}: ${product.price}")

# Function to add a new customer
def add_customer(customer_id, name, email):
    customer = Customer(customer_id, name, email)
    customers.append(customer)
    print(f"Customer '{name}' added successfully!")

# Function to list all customers
def list_customers():
    print("Customers:")
    for customer in customers:
        print(f" - {customer.name}: {customer.email}")

# Function to create a new order
def create_order(order_id, customer_id, product_ids):
    customer = next((c for c in customers if c.customer_id == customer_id), None)
    if customer is None:
        print("Customer not found.")
        return

    order_products = [p for p in products if p.product_id in product_ids]
    if len(order_products) != len(product_ids):
        print("Some products not found.")
        return

    order = Order(order_id, customer, order_products)
    orders.append(order)
    print(f"Order {order_id} created successfully!")

# Function to list all orders
def list_orders():
    print("Orders:")
    for order in orders:
        print(f"Order ID: {order.order_id}")
        print(f"Customer: {order.customer.name}")
        print("Products:")
        for product in order.products:
            print(f" - {product.name}: ${product.price}")
        print(f"Total: ${order.calculate_total()}")
        print(f"Order Date: {order.order_date}")
        print()

# Example usage of the functions
add_product(5, "Tablet", 349.99)
add_customer(103, "Alice Johnson", "alice@example.com")
create_order(203, 103, [1, 3])

list_products()
list_customers()
list_orders()

# Function to search for a customer by name or email
def search_customer(query):
    matching_customers = [customer for customer in customers if query.lower() in customer.name.lower() or query.lower() in customer.email.lower()]
    if matching_customers:
        print("Matching Customers:")
        for customer in matching_customers:
            print(f" - {customer.name}: {customer.email}")
    else:
        print("No matching customers found.")

# Function to search for a product by name
def search_product(query):
    matching_products = [product for product in products if query.lower() in product.name.lower()]
    if matching_products:
        print("Matching Products:")
        for product in matching_products:
            print(f" - {product.name}: ${product.price}")
    else:
        print("No matching products found.")

# Function to display order history for a specific customer
def order_history(customer_id):
    customer = next((c for c in customers if c.customer_id == customer_id), None)
    if customer is None:
        print("Customer not found.")
        return

    customer_orders = [order for order in orders if order.customer.customer_id == customer_id]
    if customer_orders:
        print(f"Order History for {customer.name}:")
        for order in customer_orders:
            print(f" - Order ID: {order.order_id}, Total: ${order.calculate_total()}, Order Date: {order.order_date}")
    else:
        print(f"No order history found for {customer.name}.")

# Example usage of the new functions
search_customer("john")
search_product("laptop")

order_history(102)  # Display order history for Jane Smith
