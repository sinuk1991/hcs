import Head from 'next/head'
import React, { useEffect, useState } from 'react';

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector('title');
    htmlTitle.innerText = title;
  }
  useEffect(updateTitle, [title]);
  return setTitle;
}

function usePageTitle(pageTitle) {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater(pageTitle), 500);
}

export default usePageTitle;