import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import React from 'react'


import styles from './Comment.module.css'

export function Comment({ content }) {

    

  return (
    <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/diego3g.png" />

        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Diego Fernandes</strong>
                        <time title="11 de maio de 2022 às 08:14:30" dateTime="2022-05-11 08:14:30">Cerca de 1h atrás</time>

                    </div>

                    <button title="Deletar comentário">
                        <Trash size={24} />
                    </button>
                </header>
                <p>{content}</p>
            </div>

            <footer>
                <button>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                </button>
            </footer>
        </div>
    </div>
  )
}
