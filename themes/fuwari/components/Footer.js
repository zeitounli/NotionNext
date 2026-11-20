import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import BeiAnSite from '@/components/BeiAnSite'
import { siteConfig } from '@/lib/config'
import AnalyticsBusuanzi from '@/components/AnalyticsBusuanzi'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const since = parseInt(siteConfig('SINCE') || currentYear, 10)
  const copyrightDate = since < currentYear ? `${since}-${currentYear}` : `${currentYear}`
  const author = siteConfig('AUTHOR') || siteConfig('TITLE') || 'TRIX'

  return (
    <footer className='fuwari-footer py-6 text-center text-sm text-[var(--fuwari-muted)]'>
      <div className='max-w-6xl mx-auto px-4'>
        <p>
          <i className='far fa-copyright mr-1' />
          {copyrightDate} {author}. تمامی حقوق محفوظ است.
        </p>
        <p className='mt-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs [&_a]:fuwari-link [&_br]:hidden'>
          <BeiAnSite />
          <BeiAnGongAn className='inline-flex items-center justify-center' />
          <AnalyticsBusuanzi />
        </p>
      </div>
    </footer>
  )
}

export default Footer
