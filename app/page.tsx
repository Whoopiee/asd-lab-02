'use client'

import { useState } from 'react'
import { _Node, SingleLinkedList } from './src/services/SinglyLinkedList'
import { Formik, Field, Form } from 'formik';

export default function Home() {
  const [list, updateList] = useState(new SingleLinkedList(null));

  const submitListData = (data) => {
    if (list.head === null) {
      updateList(list.push(data));
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-900">
      <Formik
        initialValues={{
          data: null,
        }}
        onSubmit={() => console.log(false)}
      >
        <Form>
          <Field name="data" placeholder="data" />
          <button type="submit">Add</button>
        </Form>
      </Formik>

    </main>
  )
}
