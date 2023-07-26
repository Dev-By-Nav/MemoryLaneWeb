import React from 'react';
import { Accordion, AccordionHeader, AccordionBody, AccordionList } from "@tremor/react";

function ClientInfo() {
  return (
    <div className="flex justify-center my-10">
      {/* Center the accordion horizontally */}
      <div className="w-3/4 md:2/3 my"> {/* Set the accordion to 50% width */}
        <AccordionList className="">
          <Accordion>
            <AccordionHeader>Are there any restrictions to where the booth can be set-up ?</AccordionHeader>
            <AccordionBody>
            Nope! We just need to have a space that is approx 15ft x 15ft
            </AccordionBody>
          </Accordion>
          <Accordion>
            <AccordionHeader>Do you provide on-site support for the photo booth during an event ?</AccordionHeader>
            <AccordionBody>
            Yes. We provide 1 or 2 attendants, depending on the event size. They will set-up the booth, run it & interact with guests.
            </AccordionBody>
          </Accordion>
          <Accordion>
            <AccordionHeader>Are there any additional fees for delivery or set-up ?</AccordionHeader>
            <AccordionBody>
              Nope. All our packages include free delivery, set-up & take-down. All you have to do is show up and strike a pose!
            </AccordionBody>
          </Accordion>
          <Accordion>
            <AccordionHeader>Do you require a deposit & when do we pay ?</AccordionHeader>
            <AccordionBody>
              Yes. We require a 50% non-refundable deposit at the time of booking to reserve your date. The remainder 50% is paid on the day of the event.
            </AccordionBody>
          </Accordion>
          <Accordion>
            <AccordionHeader>Can we choose the layout & design for our photo strips ?</AccordionHeader>
            <AccordionBody>
              Yes. All our packages include layouts & designs you can choose from for free, or get a cutom one made for only $20.
            </AccordionBody>
          </Accordion>
          <Accordion>
            <AccordionHeader>What is your cancellation policy ?</AccordionHeader>
            <AccordionBody>
              We understand that unexpected events can occur. You can cancel at any time, with no extra charge. However, the deposit is non-refundable.
            </AccordionBody>
          </Accordion>
          <Accordion>
            <AccordionHeader>Do you offer discounted rates for multi-event rentals ?</AccordionHeader>
            <AccordionBody>
              If you book with us for multiple events, we will be flexible with providing you with discounts. Mention this when sending us a message
            </AccordionBody>
          </Accordion>
        </AccordionList>
      </div>
    </div>
  );
}

export default ClientInfo;