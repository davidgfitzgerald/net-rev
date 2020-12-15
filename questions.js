const questions = [
  {
    "id": 1, "question": "Which of the following protocols are examples of TCP/IP transport layer protocols?",
    "choices": {
      "a": "Ethernet",
      "b": "HTTP",
      "c": "IP",
      "d": "UDP",
      "e": "SMTP",
      "f": "TCP"
    },
    "numCorrectAnswers": 2,
    "correctAnswers": ["d", "f"],
    "source": "ICND1 100-105, page 15, q1"
  },
  {
    "id": 2, "question": "Which of the following protocols are examples of TCP/IP data link protocols?",
    "choices": {
      "a": "Ethernet",
      "b": "HTTP",
      "c": "IP",
      "d": "UDP",
      "e": "SMTP",
      "f": "TCP",
      "g": "PPP"
    },
    "correctAnswers": ["a", "g"],
    "source": "ICND1 100-105, page 15, q2"
  },
  {
    "id": 3, "question": "The process of HTTP asking TCP to send some data and making sure that it is received correctly is an example of what?",
    "choices": {
      "a": "Same-layer interaction",
      "b": "Adjacent-layer interaction",
      "c": "OSI model",
      "d": "All of these answers are correct"
    },
    "correctAnswers": ["b"],
    "source": "ICND1 100-105, page 15, q3"
  }
]

export { questions }