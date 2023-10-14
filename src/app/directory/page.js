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
        name: 'She writes woman',
        cause: 'Mental Health (Women)',
        phone: '0817-491-3329',
        website: 'www.shewriteswoman.org',
        socialMedia: '@shewriteswoman',
      },
      {
        name: 'She writeswoman',
        cause: 'Mental Health (Women)',
        phone: '0817-491-3329',
        website: 'www.shewriteswoman.org',
        socialMedia: '@shewriteswoman',
      },
      {
        name: 'She writes woman',
        cause: 'Mental Health (Women)',
        phone: '0817-491-3329',
        website: 'www.shewriteswoman.org',
        socialMedia: '@shewriteswoman',
      },
      {
        name: 'She writeswoman',
        cause: 'Mental Health (Women)',
        phone: '0817-491-3329',
        website: 'www.shewriteswoman.org',
        socialMedia: '@shewriteswoman',
      },
      {
        name: 'She writes woman',
        cause: 'Mental Health (Women)',
        phone: '0817-491-3329',
        website: 'www.shewriteswoman.org',
        socialMedia: '@shewriteswoman',
      },
    ]
  },
  {
    name: 'South Africa',
    organizations: [
      {
        name: 'Shewriteswoman',
        cause: 'Mental Health (Women)',
        phone: '0817-491-3329',
        website: 'www.shewriteswoman.org',
        socialMedia: '@shewriteswoman',
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
                <table className='table table-striped my-5'>
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
                      <tr>
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