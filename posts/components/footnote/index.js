// @flow

import * as React from 'react'
import P from '../paragraph'

type FootNotesProps = {
  children?: React.Node
}

export const FootNotes = ( { children }: FootNotesProps ) => (
  <div>
    { children }
    <style jsx>{`
      div::before {
        width: 200px;
        content: ' ';
        margin: auto;
        border-top: 1px solid #ccc;
        padding-top: 40px;
        display: block;
        margin-top: 40px;
      }
    `}</style>
  </div>
)

FootNotes.defaultProps = { children : [] }

type RefProps = {
  id? : string
}

export const Ref = ( { id }: RefProps ) => (
  <a href={`#f${id}`} id={`s${id}`}>
    [{ id }]
    <style jsx>{`
      a {
        top: -5px;
        font-size: 10px;
        position: relative;
        text-decoration: none;
      }
    `}</style>
  </a>
)

Ref.defaultProps = { id : '' }

type NoteProps = {
  id?: string,
  children?: React.Node
}

export const Note = ( { id, children }: NoteProps ) => (
  <P>
    { id }.
    {' '}
    <a href={`#s${id}`} id={`f${id}`}>^</a>
    {' '}
    { children }
    <style jsx>{`
      a { // $FlowFixMe
        text-decoration: none;
      }
    `}</style>
  </P>
)

Note.defaultProps = {
  id        : '',
  children  : [],
}
