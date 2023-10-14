import { Abril_Fatface } from 'next/font/google'

const abril = Abril_Fatface({ weight: '400', subsets: ['latin']  })

const countries = [
  {
    name: 'Nigeria',
    organizations: [
      {
        name: 'She writeswoman',
        cause: 'Mental Health (Women)',
        phone: '0817-491-3329',
        website: 'www.shewriteswoman.org',
        socialMedia: '@shewriteswoman',
      },
      {
        name: 'MANI (Mentally Aware Nigeria Initiative)	',
        cause: 'Mental Health',
        phone: '0809-119-6263',
        website: 'www.menatllyaware.org',
        socialMedia: '@mentallyawareng',
      },
      {
        name: 'DSVRT (Domestic, Sexual Violence Response Team) Lagos State',
        cause: 'Domestic Violence & Sexual Abuse',
        phone: '0813-796-0048, 112, *6820#',
        website: 'www.dsvrtlagos.org',
        socialMedia: '',
      },
      {
        name: 'WarifNG (Women at Risk International Foundation)',
        cause: 'Sexual Abuse (Women & Girls)',
        phone: '0809-210-0009',
        website: 'www.warifng.org',
        socialMedia: '@warif_ng',
      },
      {
        name: '	S.T.E.R (Stand to End Rape)',
        cause: 'Sexual Abuse',
        phone: '',
        website: '',
        socialMedia: '@standtoendrape',
      },
    ]
  },
  {
    name: 'South Africa',
    organizations: [
      {
        name: 'SADAG (South African Depression & Anxiety Group)',
        cause: 'Mental Health',
        phone: '0800 567 567, SMS 31393',
        website: '',
        socialMedia: '@TheSADAG',
      },
      {
        name: 'Akeso Psychiatric Response Team',
        cause: 'Mental Health (Women)',
        phone: '0816 435 787',
        website: 'www.shewriteswoman.org',
        socialMedia: '@shewriteswoman',
      },
      {
        name: 'SADAG Mental Health Line',
        cause: '',
        phone: '011 234 4837',
        website: '',
        socialMedia: '',
      },
      {
        name: 'OUT',
        cause: '',
        phone: '0860 688 688',
        website: '',
        socialMedia: '',
      },
      {
        name: 'Adcock Ingram Depression and Anxiety Helpline',
        cause: '',
        phone: '0800 70 80 90',
        website: '',
        socialMedia: '',
      },
      {
        name: 'Destiny Helpline for Youth & Students	',
        cause: '',
        phone: '0800 41 42 43, SMS 31393',
        website: 'www.destinyconnect.com',
        socialMedia: '',
      },
      {
        name: 'Befrenders: Bloemfontein	',
        cause: '',
        phone: '0027 51 444 5000	',
        website: 'www.befrienders.org',
        socialMedia: '',
      },
      {
        name: 'Befrenders: South Africa	',
        cause: '',
        phone: '0027 51 444 5691',
        website: 'www.befrienders.org',
        socialMedia: '',
      },
    ]
  },
  {
    name: 'United States of America',
    organizations: [
      {
        name: 'National Suicide Hotline',
        cause: 'Mental Health',
        phone: '800-273-8255, 630-482-9696 | Text line 741741',
        website: '',
        socialMedia: '',
      },
      {
        name: 'Trevor Project',
        cause: '',
        phone: '866-488-7386 Trevor to 202-304-1200',
        website: '',
        socialMedia: '',
      },
      {
        name: 'Safe Horizon',
        cause: '',
        phone: '866-621-HOPE (4673)',
        website: '',
        socialMedia: '',
      },
      {
        name: 'RAINN (Rape, Abuse, Inscest)',
        cause: '',
        phone: '800-656-HOPE (4673)	',
        website: '',
        socialMedia: '',
      },
      {
        name: 'Suicide Prevention Services',
        cause: 'Depression',
        phone: '630-482-9696',
        website: '',
        socialMedia: '',
      },
      {
        name: 'Suicide Prevention Services',
        cause: 'Crisis',
        phone: '800-784-2433',
        website: '',
        socialMedia: '',
      },
      {
        name: 'NDMDA',
        cause: '',
        phone: '800-826-3632',
        website: '',
        socialMedia: '',
      },
    ]
  },
  {
    name: 'Kenya',
    organizations: [
      {
        name: 'Befrienders',
        cause: '00254 722 178 177',
        phone: '',
        website: 'www.befrienderskenya.org',
        socialMedia: '',
      },
    ]
  },
  {
    name: 'Ghana',
    organizations: [
      {
        name: 'Samaritans Purse',
        cause: '',
        phone: '233 244 846 701',
        website: 'Samaritans.org',
        socialMedia: '',
      },
    ]
  },
  {
    name: 'United Kingdowm',
    organizations: [
      {
        name: 'Samaritans',
        cause: 'Mental Health',
        phone: '116, 122',
        website: 'www.samatitans.org',
        socialMedia: '',
      },
      {
        name: 'CALM (Campaign Aganist Living Miserably)',
        cause: 'Mental Health',
        phone: '0808 58 58 58, 0808 802 58 58',
        website: 'www.thecalmzone.net',
        socialMedia: '',
      },
    ]
  }
]

export default function Page() {
    return (
      <>
        <div className="container-fluid bg-beige py-5">
          <div className="container min-vh-100 container-min-height text-center py-4">
            <div>
              <h2 className={`${abril.className} display-2 pt-5`}>DIRECTORY</h2>
              <p className="py-1">Below are some helpful resources. </p>
              {countries.map((country) => (
                <table className='table table-striped my-5' key={country.name}>
                  <tr className='bg-dark-green text-white'>
                    <td colSpan="3">{country.name}</td>
                  </tr>
                  <tbody>
                    <tr>
                      <th>Organization</th>
                      <th className='d-none d-sm-block'>Cause</th>
                      <th>Contact</th>
                    </tr>
                    {country.organizations.map((organization) => (
                      <tr key={organization.name}>
                        <td>{organization.name}</td>
                        <td className='d-none d-sm-block'>{organization.cause}</td>
                        <td>{organization.phone} {organization.website} {organization.socialMedia}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ))}
            </div>
          </div>
        </div>
      </>
    )
  }