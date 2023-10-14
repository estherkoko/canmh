import { Abril_Fatface } from 'next/font/google'

const abril = Abril_Fatface({ weight: '400', subsets: ['latin']  })


export default function Page() {
    return (
      <>
        <div className="container-fluid bg-beige bg-people-discuss">
          <div className="container vh-100 container-min-height text-center py-5">
            <div>
              <h2 className={`${abril.className} display-2 pt-5`}>About Us</h2>
              <p>Coalition for the Advancement of Nigerian Mental Health emerged in light of the #EndSARS protests that began in Nigeria in October 2020.</p>
<p>As a result of this tragedy, Nigerians abroad and in the diaspora experienced unimaginable trauma, exhaustion, dejection, etc. At the realization of such distress within the Nigerian community, there was a felt urgency to bring mental health to the forefront. Damilola Kolade and Dr. Mercedes J. Okosi partnered to begin an initiative that addressed the mental health of Nigerians, fostered alongside Nigerian clinicians. </p>
<p> The long-term initiative has soon taken shape in the formal organization that is the Coalition for the Advancement of Nigerian Mental Health (CANMH). </p>
<p> The organization exists to foster the mental health of Nigerians in the diaspora and abroad through raising awareness, engaging in various issue areas, providing resources and support, as well as collaboration across diverse fields. </p>
            </div>
          </div>
        </div>
      </>
    )
  }