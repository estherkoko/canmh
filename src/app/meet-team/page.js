"use client";

import { Abril_Fatface } from 'next/font/google'
import { useState } from 'react'

const abril = Abril_Fatface({ weight: '400', subsets: ['latin']  })


export default function Page() {
    const [readMore, setReadMore] = useState({ dami: false, mercedes: false });
    const doReadMore = (teamMember) => {
      setReadMore((previousState) => ({...previousState, [teamMember]: !previousState[teamMember]}))
    }
    return (
      <>
        <div className="container-fluid bg-green">
          <div className="container min-vh-100 container-min-height text-center py-5">
            <div>
              <h2 className={`${abril.className} display-2 pt-5`}>Meet The Team</h2>
              <div className="row py-4">
                <div className="col-md-6 p-4">
                  <img src='/damilola.jpg' className='img-fluid rounded-circle' width='300' />
                  <h2 className={`${abril.className} py-2`}>Damilola Kolade</h2>
                  <p>Damilola Kolade, PsyM, received her B.A. in English Literature and Rhetoric from Binghamton University. She later completed her post-baccalaureate in psychology, while conducting suicide-focused research pertaining to Guyanese youths. </p>
                  {readMore.dami && (
                    <>
                      <p> She is currently working towards her doctorate in Clinical Psychology. Her clinical and research interests include community and minority mental health, trauma, and suicidology. In 2020, she co-founded the Coalition for the Advancement of Nigerian Mental Health (CANMH), which aims to promote the mental health of Nigerians in Nigeria and the diaspora. </p>
                      <p>She dabbles in playing the guitar and enjoys mentoring young people.</p>
                    </>
                  )}
                  <p className='cursor-pointer' onClick={() => doReadMore('dami')}><u>Read more</u></p>
                </div>
                <div className="col-md-6 p-4">
                  <img src='/dr_mercedes.JPG' className='img-fluid rounded-circle' width='300' />
                  <h2 className={`${abril.className} py-2`}>Dr. Mercedes Okosi</h2>
                  <p>Dr. Mercedes J. Okosi is a bilingual (English/Spanish) New York State licensed clinical psychologist. She completed her Bachelor's degree in Applied Psychology at New York University with a minor in Spanish. </p>
                  {readMore.mercedes && (
                    <>
                      <p>She earned her Doctor of Psychology (Psy.D.) at The Graduate School of Applied and Professional Psychology at Rutgers University with concentrations in Multicultural Psychology and Community Psychology.</p>
                      <p>Dr. Okosi is currently the Clinical Director of the Safe Mothers, Safe Children Program at New York University's McSilver Institute for Poverty Policy and Research. SMSC is a clinical research program for women involved in child welfare systems who have PTSD, and their children. The participants are almost all Black and Latina women living in poverty who have experienced chronic complex trauma. Dr. Okosi is also in independent private practice, where she sees adult patients presenting with trauma, depression and other mood disorders, anxiety, and more. </p> 
                      <p>Dr. Okosi has completed research at the intersection of trauma and race, and incorporates racial identity and social justice principles in her work. Her dissertation was a qualitative exploration of the impact of racial microaggressions in therapy.</p>
                    </>
                  )}
                  <p className='cursor-pointer' onClick={() => doReadMore('mercedes')}><u><br />Read more</u></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }