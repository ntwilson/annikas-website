import { useEffect, useRef, useState } from 'react'
import styles from "@/styles/Home.module.css"

function trackIsVisible(options = {}): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.unobserve(entry.target)
      }
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [options])

  return [ref, isVisible]
}

type DivIsVisibleProps = {
  className: (isVisible: boolean) => string;
  children: React.ReactNode;
}

export function DivIsVisible(props: DivIsVisibleProps) {
  const [ref, isVisible] = trackIsVisible({ threshold: 0.1 });

  return (
    <div ref={ref} className={props.className(isVisible)}>
      {props.children}
    </div>
  )
}

export function DivFadeIn(props: { children: React.ReactNode }) {
  return (
    <DivIsVisible className={(isVisible: boolean) => isVisible ? ` ${styles['fade-in']}` : ` ${styles['pre-fade-in']}`}>
      {props.children}
    </DivIsVisible>
  )
}