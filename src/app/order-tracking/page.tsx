import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const OrderTracking = () => {
  return (
    <div>
      <section className="container mx-auto pt-10 pb-20">
        <div className="flex flex-col gap-6">
          <h5 className="text-[14px] font-normal text-[#202435]">
            To track your order please enter your Order ID in the box below and
            press the "Track" button. This was given to you on your receipt and
            in the confirmation email you should have received.
          </h5>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="orderId">Order ID</label>
              <Input
                type="text"
                id="orderId"
                placeholder="Found in your order confirmation email"
                className="bg-[#f3f4f7] h-[45px] rounded-md pl-4 outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="billingEmail">Billing Email</label>
              <Input
                type="text"
                id="billingEmail"
                placeholder="Email you used during checkout"
                className="bg-[#f3f4f7] h-[45px] rounded-md pl-4 outline-none"
              />
            </div>
            <Button
              type="submit"
              className=" hover:bg-blue-800 hover:shadow-xxl bg-[#233a95] text-white w-[80px] h-[45px] rounded-md p-2 outline-none"
            >
              Track
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default OrderTracking;
