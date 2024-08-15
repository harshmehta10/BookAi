import React, { useEffect, useRef } from "react";

const Price = () => {
  const pricingRef = useRef();
  const overviewRef = useRef();
  const authRef = useRef();
  const endpointRef = useRef();
  const tutorialRef = useRef();
  const codeRef = useRef();

  // component did mount
  useEffect(() => {
    pricingRef.current?.scrollIntoView();
    // const sub = service.subscribe((data) => setData(data))

    // return () => {
    //   sub.unsubscribe();
    // }
  }, []);

  return (
    <div className="bg-[#0f172a]">
      <header>
        <h1 className="text-center text-3xl font-bold p-7 bg-blue-800 text-white">
          Book Generator API
        </h1>
        <nav className="bg-[#1e293b] p-4 text-white">
          <ul className="flex justify-center space-x-10 text-sm font-medium">
            <li
              onClick={() => {
                overviewRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:text-blue-500 cursor-pointer"
            >
              OVERVIEW
            </li>
            <li
              onClick={() => {
                authRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:text-blue-500 cursor-pointer"
            >
              AUTHENTICATION
            </li>
            <li
              onClick={() => {
                endpointRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:text-blue-500 cursor-pointer"
            >
              ENDPOINTS
            </li>
            <li
              onClick={() => {
                tutorialRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:text-blue-500 cursor-pointer"
            >
              TUTORIAL
            </li>
            <li
              onClick={() => {
                codeRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:text-blue-500 cursor-pointer"
            >
              CODE EXAMPLES
            </li>
            <li
              className="hover:text-blue-500 cursor-pointer"
              onClick={() => {
                pricingRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              PRICING
            </li>
          </ul>
        </nav>
        <div ref={pricingRef}></div>
      </header>

      <div className="container mx-auto p-6 bg-{#0f172a}">
        {/* Section: Overview */}
        <section ref={overviewRef} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#a5b4fc]">
            Overview
          </h2>
          <p className="text-lg leading-relaxed text-white">
            The Book Generator API allows you to generate books
            programmatically. You can create, edit, and retrieve information
            about books in various formats, including ePub, PDF, and MOBI. This
            API is perfect for developers who need to automate book generation
            processes.
          </p>
        </section>

        {/* Section: Authentication */}
        <section ref={authRef} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#a5b4fc]">
            Authentication
          </h2>
          <p className="text-lg leading-relaxed text-[#e2e8f0]">
            To access the API, you need to authenticate using an API key. You
            can obtain an API key by signing up on our platform and generating a
            new key in your account settings. All API requests must include this
            key in the header.
          </p>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <code>
              {`curl -X GET "https://api.bookgenerator.com/books" \\
-H "Authorization: Bearer YOUR_API_KEY"`}
            </code>
          </pre>
        </section>

        {/* Section: Endpoints */}
        <section ref={endpointRef} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#a5b4fc]">
            Endpoints
          </h2>
          <p className="text-lg leading-relaxed mb-4 text-white">
            The API provides several endpoints to manage books:
          </p>
          <ul className="list-disc list-inside text-lg leading-relaxed">
            <li>
              <strong>GET /books</strong> - Retrieves a list of books.
            </li>
            <li>
              <strong>POST /books</strong> - Creates a new book.
            </li>
            <li>
              <strong>GET /books/{"{id}"}</strong> - Retrieves details of a
              specific book.
            </li>
            <li>
              <strong>PUT /books/{"{id}"}</strong> - Updates an existing book.
            </li>
            <li>
              <strong>DELETE /books/{"{id}"}</strong> - Deletes a book.
            </li>
          </ul>
        </section>

        {/* Section: Tutorial */}
        <section ref={tutorialRef} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#a5b4fc]">
            Tutorial
          </h2>
          <p className="text-lg leading-relaxed text-white">
            This tutorial will guide you through the process of creating a book
            using our API. We'll start by generating an API key, then move on to
            creating a book, and finally, retrieving the book's information.
          </p>
        </section>

        {/* Section: Code Examples */}
        <section ref={codeRef} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-[#a5b4fc]">
            Code Examples
          </h2>
          <p className="text-lg leading-relaxed mb-4 text-white">
            Below are some code examples to help you get started with the API:
          </p>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <code>
              {`// Example: Creating a new book
const createBook = async () => {
  const response = await fetch('https://api.bookgenerator.com/books', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_API_KEY',
    },
    body: JSON.stringify({
      title: 'New Book',
      author: 'John Doe',
      content: 'Lorem ipsum...',
    }),
  });
  const data = await response.json();
  console.log(data);
};`}
            </code>
          </pre>
        </section>

        {/* Section: Pricing */}
        <section
          ref={pricingRef}
          className="py-12 px-6 bg-gray-50 bg-[#334155]"
        >
          {/* Pricing Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-[#a5b4fc]">
              API Pricing
            </h1>
            <p className="text-lg text-white">
              Our API pricing is based on the model used and the number of
              tokens processed. Here's a breakdown of the costs:
            </p>

            {/* Pricing Table */}
            <div className="flex justify-center space-x-12 text-white ">
              <div>
                <ul className="text-left">
                  <li className="font-bold text-lg mb-4 bg-[#6366f1]">API</li>
                  <li className="mb-2">OpenAI</li>
                  <li className="mb-2">OpenAI</li>
                  <li className="mb-2">Together AI</li>
                  <li className="mb-2">Together AI</li>
                </ul>
              </div>
              <div>
                <ul className="text-left">
                  <li className="font-bold text-lg mb-4 bg-[#6366f1]">MODEL</li>
                  <li className="mb-2">GPT-3.5</li>
                  <li className="mb-2">GPT-4</li>
                  <li className="mb-2">Llama-2-70b</li>
                  <li className="mb-2">Llama-2-13b</li>
                </ul>
              </div>
              <div>
                <ul className="text-left">
                  <li className="font-bold text-lg mb-4 bg-[#6366f1]">
                    Price per 1K tokens
                  </li>
                  <li className="mb-2">$0.002</li>
                  <li className="mb-2">$0.03</li>
                  <li className="mb-2">$0.0008</li>
                  <li className="mb-2">$0.0006</li>
                </ul>
              </div>
            </div>

            {/* Token Estimation */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-4">Token Estimation</h3>
              <p className="text-lg text-gray-600">
                On average, 1 token is approximately 4 characters or 0.75 words.
                For precise pricing, we recommend using our token calculator
                tool.
              </p>
            </div>

            {/* Billing */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-4">Billing</h3>
              <p className="text-lg text-gray-600">
                You will only be charged for the tokens used in generating the
                book. The API tracks token usage and bills accordingly. Detailed
                usage reports are available in your account dashboard.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Price;
