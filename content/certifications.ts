export type Certification = {
  id: string
  title: string
  issuer: string
  issuedOn: string // ISO: YYYY-MM-DD
  expiresOn?: string // ISO: YYYY-MM-DD (optional)
  badgeUrl: string
  certificateImageUrl: string
  verifyUrl?: string
}

export const certifications: Certification[] = [
  {
    id: 'snowpro-core',
    title: 'SnowPro Core Certified',
    issuer: 'Snowflake',
    issuedOn: '2024-03-08', // <-- replace with your real issued date
    expiresOn: '2028-02-28', // <-- replace with your real expiry date (or remove if none)
    badgeUrl:
      'https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/97370539',
    certificateImageUrl:
      'https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/97370539',
  },
  {
    id: 'snowpro-advanced-architect',
    title: 'SnowPro Advanced: Architect',
    issuer: 'Snowflake',
    issuedOn: '2026-02-28', // <-- replace with your real issued date
    expiresOn: '2028-02-28', // <-- replace with your real expiry date (or remove if none)
    badgeUrl:
      'https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/175790576',
    certificateImageUrl:
      'https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/175790576',
  },
]
