import { H1 } from "@/components/ui/typography/h1";
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";


export default function Page() {
    return (
        <div className="pb-4">
            <H1 className="my-3">Frequently Asked Questions</H1>
            <Accordion>
                <AccordionPanel>
                    <AccordionTitle>Why is the cost of the new school $80 million ?</AccordionTitle>
                    <AccordionContent>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Typically, the cost of a 400 student school ranges between $40 to $50 Million Dollars. We are building a school that will have a capacity of 1,700 children (more than 3X the size of a typical school).
                        </p>
                    </AccordionContent>
                </AccordionPanel>
                <AccordionPanel>
                    <AccordionTitle>Have alternatives to building been explored?</AccordionTitle>
                    <AccordionContent>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Yes! the Edmonton Public School Board does not release surplus schools to independent authorities like ours. Building a new school tailored to our community’s children needs is a requirement and is not found elsewhere. Our new school will be a pioneer in 21st century learning and will be intentionally built to face towards the Qibla.
                        </p>
                    </AccordionContent>
                </AccordionPanel>
                <AccordionPanel>
                    <AccordionTitle>Why is the construction of this school a priority?</AccordionTitle>
                    <AccordionContent>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Meeting the demand for a secure environment offering Islamic and academic education is paramount within our Muslim community for our children. Over 1200 children are on the waitlist and the demand is steadily increasing. Providing a nurturing environment aligned with Islamic principles is essential for our children&apos;s well-being and future.
                        </p>
                    </AccordionContent>
                </AccordionPanel>
                <AccordionPanel>
                    <AccordionTitle>When is the planned opening of the new school?</AccordionTitle>
                    <AccordionContent>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                        With your support, we aim to open the new school by September 2026, Insha&apos;Allah.
                        </p>
                    </AccordionContent>
                </AccordionPanel>
                <AccordionPanel>
                    <AccordionTitle>How does the quality of education of EIA compare to other schools?</AccordionTitle>
                    <AccordionContent>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                        The EIA is highly esteemed, recognized as one of the top K-12 School by the Fraser Institute. Top 2 in Edmonton and 7th in the province. Our commitment to academic excellence and character development is evident. The new facility will continue this tradition, providing high-quality faith based education while fostering leadership, interfaith understanding, and technology integration.
                        </p>
                    </AccordionContent>
                </AccordionPanel>
                <AccordionPanel>
                    <AccordionTitle>Are donations tax deductible?</AccordionTitle>
                    <AccordionContent>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Yes! donations to the EIA are tax deductible, supporting our mission to provide top-quality Islamic education rooted in our values.
                        </p>
                    </AccordionContent>
                </AccordionPanel>
                <AccordionPanel>
                    <AccordionTitle>Am I able to give my zakat to the New School?</AccordionTitle>
                    <AccordionContent>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Yes! Per the guidance of our scholar’s - there are 8 recipients of Zakat. Giving it to the school falls under In the Cause of Allah (Fi Sabilillah) - Individuals engaged in activities that benefit the broader Muslim community, such as scholars, educators, and those defending the Muslim community.
                        </p>
                    </AccordionContent>
                </AccordionPanel>
                <AccordionPanel>
                    <AccordionTitle>Can I participate in Qard-Al Hasan (good loan)?</AccordionTitle>
                    <AccordionContent>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Yes! which allows you to provide an interest-free loan towards the construction of the new campus. This loan will be returned to you on demand - 100% guaranteed.
                        </p>
                    </AccordionContent>
                </AccordionPanel>
            </Accordion>
        </div>

    );
}
