import { Section } from "./Section"

export const InfoSection = props => {
    return (
        <Section>
            <div className="text-blue-500 text-2xl pb-4">
                info
            </div>

            <div className="py-2">
                <div className="font-bold">
                    Address
                </div>
                <div className="text-gray-400">
                    <div>20 Kimlin Court,</div>
                    <div>PoughKeepsie, 12603, United States</div>
                </div>
            </div>

            <div className="py-2">
                <div className="font-bold">
                    Phone
                </div>
                <div className="text-gray-400">
                    (000) 000-0000
                </div>
            </div>

            <div className="py-2">
                <div className="font-bold">
                    Email
                </div>
                <div className="text-gray-400">
                    abcde@gmail.com
                </div>
            </div>
        </Section>
    )
}