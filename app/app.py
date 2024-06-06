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

# Function to update customer information
def update_customer(customer_id, name=None, email=None):
    customer = next((c for c in customers if c.customer_id == customer_id), None)
    if customer is None:
        print("Customer not found.")
        return

    if name:
        customer.name = name
    if email:
        customer.email = email

    print(f"Customer {customer_id} information updated successfully!")

# Function to remove a product by ID
def remove_product(product_id):
    product = next((p for p in products if p.product_id == product_id), None)
    if product is None:
        print("Product not found.")
        return

    products.remove(product)
    print(f"Product '{product.name}' removed successfully!")

# Function to view details of a specific order
def view_order(order_id):
    order = next((o for o in orders if o.order_id == order_id), None)
    if order is None:
        print("Order not found.")
        return

    print(f"Order ID: {order.order_id}")
    print(f"Customer: {order.customer.name}")
    print("Products:")
    for product in order.products:
        print(f" - {product.name}: ${product.price}")
    print(f"Total: ${order.calculate_total()}")
    print(f"Order Date: {order.order_date}")

# Example usage of the new functions
update_customer(101, name="John M. Doe", email="john.doe@example.com")

remove_product(5)  # Remove the 'Tablet' product

view_order(201)  # View details of Order ID 201

# Function to process an order by deducting products from inventory
def process_order(order_id):
    order = next((o for o in orders if o.order_id == order_id), None)
    if order is None:
        print("Order not found.")
        return

    for product in order.products:
        product_in_inventory = next((p for p in products if p.product_id == product.product_id), None)
        if product_in_inventory is None:
            print(f"Product '{product.name}' is out of stock.")
        else:
            if product_in_inventory in products:
                products.remove(product_in_inventory)
    
    print(f"Order {order_id} processed successfully!")

# Function to calculate order total including tax
def calculate_order_total(order_id, tax_rate=0.08):
    order = next((o for o in orders if o.order_id == order_id), None)
    if order is None:
        print("Order not found.")
        return

    subtotal = sum(product.price for product in order.products)
    tax = subtotal * tax_rate
    total = subtotal + tax

    print(f"Order ID: {order_id}")
    print(f"Subtotal: ${subtotal:.2f}")
    print(f"Tax ({tax_rate * 100}%): ${tax:.2f}")
    print(f"Total: ${total:.2f}")

# Example usage of the new functions
process_order(201)  # Process Order ID 201 (deduct products from inventory)

calculate_order_total(201)  # Calculate the total for Order ID 201 with default tax rate

# Define a User class for managing accounts
class User:
    def __init__(self, username, password):
        self.username = username
        self.password = password

# Create a dictionary to store user accounts
user_accounts = {}

# Function to create a new user account
def create_user_account(username, password):
    if username in user_accounts:
        print("Username already exists. Please choose another.")
        return
    user = User(username, password)
    user_accounts[username] = user
    print(f"User account '{username}' created successfully!")

# Function to authenticate a user
def authenticate_user(username, password):
    user = user_accounts.get(username)
    if user and user.password == password:
        return True
    return False

# Function to simulate basic payment processing
def process_payment(order_id, amount):
    # In a real application, this function would interact with payment gateways and banks.
    print(f"Payment of ${amount:.2f} for Order ID {order_id} processed successfully!")

# Example usage of the new functions
create_user_account("user123", "password123")  # Create a new user account

# Simulate user login and order processing
if authenticate_user("user123", "password123"):
    print("User authenticated.")
    create_order(203, 103, [2, 4])  # Create a new order for the authenticated user
    process_payment(203, 269.98)  # Process payment for the order
else:
    print("Authentication failed. Please check your username and password.")

# Define an OrderStatus enum to track order status
from enum import Enum

class OrderStatus(Enum):
    PENDING = "Pending"
    PROCESSING = "Processing"
    SHIPPED = "Shipped"
    DELIVERED = "Delivered"

# Add order status and shipping address to the Order class
class Order:
    def __init__(self, order_id, customer, products, shipping_address):
        self.order_id = order_id
        self.customer = customer
        self.products = products
        self.shipping_address = shipping_address
        self.order_date = datetime.datetime.now()
        self.status = OrderStatus.PENDING

    # Add a method to update order status
    def update_status(self, new_status):
        self.status = new_status

# Function to update the order status
def update_order_status(order_id, new_status):
    order = next((o for o in orders if o.order_id == order_id), None)
    if order is None:
        print("Order not found.")
        return

    order.update_status(new_status)
    print(f"Order ID {order_id} status updated to {new_status}.")

# Function to display order history for a specific customer, including order status
def order_history_with_status(customer_id):
    customer = next((c for c in customers if c.customer_id == customer_id), None)
    if customer is None:
        print("Customer not found.")
        return

    customer_orders = [order for order in orders if order.customer.customer_id == customer_id]
    if customer_orders:
        print(f"Order History for {customer.name}:")
        for order in customer_orders:
            print(f" - Order ID: {order.order_id}, Status: {order.status.value}, Total: ${order.calculate_total()}, Order Date: {order.order_date}")
    else:
        print(f"No order history found for {customer.name}.")

# Example usage of the new functions
shipping_address = "123 Main St, City, Country"

order3 = Order(203, customer2, [product2, product4], shipping_address)
order4 = Order(204, customer1, [product1, product3], shipping_address)

update_order_status(203, OrderStatus.PROCESSING)  # Update the status of Order ID 203
update_order_status(204, OrderStatus.SHIPPED)  # Update the status of Order ID 204

order_history_with_status(101)  # Display order history for John M. Doe

# Define an Invoice class to generate order invoices
class Invoice:
    def __init__(self, order):
        self.order = order

    def generate_invoice(self):
        invoice_filename = f"Invoice_{self.order.order_id}.txt"
        with open(invoice_filename, "w") as invoice_file:
            invoice_file.write(f"Order Invoice - Order ID: {self.order.order_id}\n")
            invoice_file.write(f"Customer: {self.order.customer.name}\n")
            invoice_file.write("Products:\n")
            for product in self.order.products:
                invoice_file.write(f" - {product.name}: ${product.price}\n")
            invoice_file.write(f"Total: ${self.order.calculate_total()}\n")
            invoice_file.write(f"Order Date: {self.order.order_date}\n")
            invoice_file.write(f"Shipping Address: {self.order.shipping_address}\n")
            invoice_file.write(f"Order Status: {self.order.status.value}\n")
        print(f"Invoice for Order ID {self.order.order_id} generated successfully!")

# Function to process a return request
def process_return(order_id):
    order = next((o for o in orders if o.order_id == order_id), None)
    if order is None:
        print("Order not found.")
        return

    if order.status == OrderStatus.DELIVERED:
        order.update_status(OrderStatus.PENDING)
        print(f"Return request for Order ID {order_id} processed successfully.")
    else:
        print(f"Return request for Order ID {order_id} cannot be processed as the order is not delivered yet.")

# Basic text-based user interface
while True:
    print("\nE-commerce Management System")
    print("1. Process Return")
    print("2. Generate Invoice")
    print("3. Exit")
    choice = input("Select an option (1/2/3): ")

    if choice == "1":
        order_id = int(input("Enter the Order ID for return processing: "))
        process_return(order_id)
    elif choice == "2":
        order_id = int(input("Enter the Order ID for invoice generation: "))
        order = next((o for o in orders if o.order_id == order_id), None)
        if order is None:
            print("Order not found.")
        else:
            invoice = Invoice(order)
            invoice.generate_invoice()
    elif choice == "3":
        break
    else:
        print("Invalid option. Please select a valid option.")

# End of the code
