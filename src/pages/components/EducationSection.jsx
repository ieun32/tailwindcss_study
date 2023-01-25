import { Section } from "./Section"
import { SectionTitle } from "./SectionTitle"


export const EducationSection = props => {
    return (
        <Section>
            <SectionTitle color=''>
                Education
            </SectionTitle>
            <div>
                <div className="text-xl">
                    Physical Therapist, Care Mount Medical Center
                </div>
                <div className="flex">
                    <div>
                        Oct 2010 - Dec 2013
                    </div>
                    <div className="pl-6 text-gray-400">
                        I. Poughkeepsie
                    </div>
                </div>
                <div>
                    <ul className="py-4 list-disc pl-10 text-sm text-gray-400">
                        <li>Graduated at the top of my class.</li>
                    </ul>
                </div>
            </div>
        </Section>
    )
}