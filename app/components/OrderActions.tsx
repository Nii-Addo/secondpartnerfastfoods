import React from "react";

const OrderActions = () => {
  return (
    <div className="pt-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-2">How to Order</h2>
      <p className="text-gray-700 mb-4">
        We offer several convenient options for ordering our delicious meals:
      </p>
      <ul className="list-disc pl-4 mb-4">
        <li className="mb-2">
          To order food, simply send a WhatsApp message to our dedicated
          ordering line (check the Phone card) with your name, address, and your
          preferred dishes. Our team will get back to you shortly to confirm
          your order and provide an estimated delivery time.
        </li>
        <li className="mb-2">
          You can also order our delicious meals through Bolt Foods or Glovo
          app. Simply search for &quot;SecondPartner Fast Foods&quot; and select
          your dishes from our menu. Our delivery partners will take care of the
          rest and bring your food straight to your doorstep.
        </li>
        <li className="mb-2">
          If you prefer to order for someone else, you can give us the details
          at number provided on the phone card and place your order. We&apos;ll
          make sure your food is prepared fresh and delivered to them as quickly
          as possible.
        </li>
      </ul>
    </div>
  );
};

export default OrderActions;
