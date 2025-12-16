'use client'
import { useState } from 'react'
import { questions } from '../../data/questions'
import styles from '../../styles/Quiz.module.css'
import Link from 'next/link'

export default function QuizPage() {
  const [current, setCurrent] = useState(0)

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1)
      setSelectedAnswer(null) // ← nollställer färgerna för nästa fråga
    }
  }

  const question = questions[current]

  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)

  const handleAnswerClick = (answer: string) => {
    if (selectedAnswer) return
    setSelectedAnswer(answer)
  }

  return (
    <>
      <Link href="/">
        <button className="homeButton">Hem</button>
      </Link>
      <main className={styles.quizWrapper}>
        <div className={styles.quizContainer}>
          {/* Bild till vänster */}
          <div className={styles.imageContainer}>
            <img
              src={question.image}
              alt="Frågebild"
              className={styles.image}
            />
          </div>

          <div className={styles.optionsWrapper}>
            <h2 className={styles.questionText}>{question.text}</h2>

            <div className={styles.options}>
              {question.options.map((option) => {
                let className = styles.optionBtn

                if (selectedAnswer) {
                  if (option === question.correctAnswer) {
                    className += ` ${styles.correct}`
                  } else if (option === selectedAnswer) {
                    className += ` ${styles.wrong}`
                  }
                }

                return (
                  <button
                    key={option}
                    className={className}
                    onClick={() => handleAnswerClick(option)}
                    disabled={!!selectedAnswer}
                  >
                    {option}
                  </button>
                )
              })}
            </div>
            {current < questions.length - 1 && (
              <button className={styles.nextBtn} onClick={handleNext}>
                Nästa
              </button>
            )}
          </div>
        </div>
      </main>
    </>
  )
}
