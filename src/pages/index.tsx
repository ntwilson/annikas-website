import Head from "next/head"
import { Geist, Geist_Mono } from "next/font/google"
import styles from "@/styles/Home.module.css"
import { FaHeadSideCough, FaRunning, FaHamburger, FaTransgenderAlt, FaClipboardList } from "react-icons/fa";
import { RiChatVoiceFill, RiParentFill } from "react-icons/ri";
import { useRef } from "react"
import { IoLanguage } from "react-icons/io5";
import { DivFadeIn } from "@/animate-on-visible"
import metadata from "@/site-metadata.json"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})


export default function Home() {
  const contentsRef = useRef(null)
  return (
    <>
      <Head>
        <title>Annika Wilson - Voice + Speech, LLC</title>
        <meta name="description" content="Annika Wilson, MS, CCC-SLP. Voice therapy and speech therapy services. Serving telehealth patients in North Carolina and in-person visits in the Raleigh + Durham area." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="4xUgWqIO9Jvu3TLpPeVBEQXlG0waZ3QEtZUO6PYWzQQ" />

        {/* Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(metadata) }}
        />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main ref={contentsRef} className={styles.main}>
          <div className={styles['title-bar']}>
            <div className={styles.name}>Annika Wilson</div>
            <div className={styles.company}>
              <span> Voice and Speech LLC </span>
              {/* <img
                src="/pride-flag-71x40.png"
                alt="Pride Flag"
              /> */}
            </div>
          </div>
          <div className={`${styles['content-container']} ${styles['about-me-container']}`}>
            <h1>About Me</h1>
            <div className={styles['about-me-contents']}>
              <DivFadeIn options={{ root: contentsRef.current, threshold: 0.2 }} >
                <img
                  src="/headshot.jpg"
                  alt="Headshot of Annika Wilson"
                />
              </DivFadeIn>
              <DivFadeIn options={{ root: contentsRef.current, threshold: 0.2 }} >
                <p>
                  I was inspired to be a speech pathologist because human connection is intensely meaningful and communication is a significant part of forming this connection. I am passionate about both voice rehabilitation and voice habilitation. Rehabilitation is powerful because it helps people heal, restore, and access their best voice. Habilitation is meaningful because it can share and implement positive voice practices before an injury occurs. Our voices help reflect who we are, and I want to help you use your voice to express your true self. Working together, we can explore your speech concerns, evaluate problems, and develop a therapy plan to put you on the road to recovery. The uniqueness of each person plays a significant role in my vision of patient care. I desire to give you research-based tools that are relevant to you in order to use your best voice to do your work, express your needs, and feel confident and proud of yourself. As a seasoned outpatient clinician, I will use my skills as a speech-language pathologist to aid in your evaluation, education, and healing.
                </p>
              </DivFadeIn>
            </div>
          </div>
          <div className={`${styles['content-container']} ${styles['services-container']}`}>
            <DivFadeIn options={{ root: contentsRef.current, threshold: 0.2 }} >
              <h1>Services</h1>
            </DivFadeIn>

            <div className={styles['services-cards-container']}>
              <DivFadeIn options={{ root: contentsRef.current, threshold: 0.2 }} >
                <div className={styles['services-card']}>
                  <FaClipboardList />
                  <h2>Evaluation</h2>
                  <p>
                    Pediatric and Adult - SLP Evaluation<sup id="services-footnote-source-1">[<a href="#services-footnote-1">1</a>]</sup> and Treatment<sup id="services-footnote-source-2">[<a href="#services-footnote-2">2</a>]</sup> via Telehealth
                    (in-person sessions coming soon)
                  </p>
                </div>
              </DivFadeIn>


              <DivFadeIn options={{ root: contentsRef.current, threshold: 0.2 }} >
                <div className={styles['services-card']}>
                  <RiChatVoiceFill />
                  <h2>Voice Therapy</h2>
                  <p>
                    Voice (dysphonia)<sup id="services-footnote-source-3">[<a href="#services-footnote-3">3</a>]</sup> including diagnosis:  vocal cord edema, vocal cord atrophy, sulcus of the vocal cord, Muscle Tension Dysphonia
                  </p>
                </div>
              </DivFadeIn>

              <DivFadeIn options={{ root: contentsRef.current, threshold: 0.2 }} >
                <div className={styles['services-card']}>
                  <FaRunning />
                  <h2>Vocal Cord Dysfunction</h2>
                  <p>
                    Vocal Cord Dysfunction (VCD)/ Exercise Induced Laryngeal Obstruction (EILO)
                  </p>
                </div>
              </DivFadeIn>

              <DivFadeIn options={{ root: contentsRef.current, threshold: 0.2 }} >
                <div className={styles['services-card']}>
                  <FaHeadSideCough />
                  <h2>Cough</h2>
                  <p>
                    Chronic Cough/ Irritable Larynx<sup>[<a href="#services-footnote-3">3</a>]</sup>
                  </p>
                </div>
              </DivFadeIn>

              <DivFadeIn options={{ root: contentsRef.current, threshold: 0.2 }} >
                <div className={styles['services-card']}>
                  <FaHamburger />
                  <h2>Muscle Tension Dysphagia<sup>[<a href="#services-footnote-3">3</a>]</sup></h2>
                </div>
              </DivFadeIn>

              <DivFadeIn options={{ root: contentsRef.current, threshold: 0.2 }} >
                <div className={styles['services-card']}>
                  <FaTransgenderAlt />
                  <h2>Gender Affirming Voice</h2>
                  <p>
                    Other voice and resonance disorders (gender dysphoria/ gender affirming voice)<sup id="services-footnote-source-4">[<a href="#services-footnote-4">4</a>]</sup>
                  </p>
                </div>
              </DivFadeIn>

              <DivFadeIn options={{ root: contentsRef.current, threshold: 0.2 }} >
                <div className={styles['services-card']}>
                  <RiParentFill />
                  <h2>Articulation Disorders</h2>
                </div>
              </DivFadeIn>

              <DivFadeIn options={{ root: contentsRef.current, threshold: 0.2 }} >
                <div className={styles['services-card']}>
                  <IoLanguage />
                  <h2>Accent Modification</h2>
                </div>
              </DivFadeIn>
            </div>

            <DivFadeIn options={{ root: contentsRef.current, threshold: 0.2 }} >
              <h3>Disclaimers:</h3>
              <ol>
                <li id="services-footnote-1">This will be a "non-instrumental" evaluation. Insurance jargon for this is a "behavioral evaluation" which means I will ask relevant questions to assess your symptoms, have you complete written assessments (e.g. VHI, LCQ) and perform other perceptual evaluations (e.g. CAPE-V).</li>
                <li id="services-footnote-2">All initial visits will be considered an evaluation unless otherwise specified by the clinician prior to beginning the session.</li>
                <li id="services-footnote-3">AN INSTRUMENTAL (laryngoscopy) PHOTO or VIDEO MUST BE PROVIDED TO THE CLINICIAN  VIA THE TELEHEALTH PORTAL AT LEAST 7 DAYS PRIOR TO YOUR EVALUATION DATE. This is typically completed by an ENT or Otolaryngologist. I recommend seeing an otolaryngologist who will perform videolaryngostroboscopy vs. laryngoscopy. Please feel free to reach out with any questions.</li>
                <li id="services-footnote-4">AN SLP- ADMINISTERED SWALLOW STUDY MUST BE PROVIDED TO THE CLINICIAN  VIA THE TELEHEALTH PORTAL AT LEAST 7 DAYS PRIOR TO YOUR EVALUATION DATE.</li>
              </ol>
            </DivFadeIn>
          </div>
          <div className={`${styles['content-container']} ${styles['pricing-container']}`}>
            <DivFadeIn options={{ root: contentsRef.current, threshold: 0.2 }} >
              <h1>Pricing <span style={{ fontStyle: 'italic', paddingLeft: "2rem", fontSize: "x-large" }}> Coming soon!</span></h1>
            </DivFadeIn>
            <DivFadeIn options={{ root: contentsRef.current, threshold: 0.2 }} >
              <p>I am working on submitting required paperwork to be able to bill insurance. Please reach out via email if you have questions or would like to discuss rates prior to this being complete. </p>
            </DivFadeIn>

          </div>
          <table className={styles.credentials}>
            <tbody>
              <tr>
                <td>NPI</td>
                <td>1891306171</td>
              </tr>
              <tr>
                <td>ASHA</td>
                <td>14287724</td>
              </tr>
              <tr>
                <td>NC-BOE</td>
                <td>14380</td>
              </tr>
            </tbody>
          </table>
        </main >
        <footer className={styles.footer}>
          <address>
            Email
            <a
              href="mailto:annika.wilson@voiceslp.com"
            >
              annika.wilson@voiceslp.com
            </a>
          </address>
          <a className={styles["contact-button"]} href="https://annika-wilson.clientsecure.me/contact-widget">Access Client Portal</a>
        </footer>
      </div >
    </>
  )
}
