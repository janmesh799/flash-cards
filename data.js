const flashcards = [
  {
    "q": "What does the 'C' in CIA Triad stand for?",
    "a": "Confidentiality"
  },
  {
    "q": "What are the three components of the CIA Triad?",
    "a": "Confidentiality, Integrity, Availability"
  },
  {
    "q": "What is non-repudiation?",
    "a": "It ensures that an individual cannot deny the authenticity of their signature or data."
  },
  {
    "q": "Name the AAA in security.",
    "a": "Authentication, Authorization, Accounting"
  },
  {
    "q": "What is a Zero Trust model?",
    "a": "A model where no user or system is trusted by default, even if inside the network."
  },
  {
    "q": "Give an example of a technical control.",
    "a": "Firewall, encryption, antivirus software"
  },
  {
    "q": "What type of control is a security policy?",
    "a": "Managerial (or administrative) control"
  },
  {
    "q": "What does DLP stand for?",
    "a": "Data Loss Prevention"
  },
  {
    "q": "Which type of malware spreads without user action?",
    "a": "Worm"
  },
  {
    "q": "What is spear phishing?",
    "a": "A targeted phishing attack on a specific individual or group."
  },
  {
    "q": "What is the purpose of digital signatures?",
    "a": "To ensure integrity, authenticity, and non-repudiation."
  },
  {
    "q": "What is a rootkit designed to do?",
    "a": "Gain and maintain privileged access to a system while hiding its presence."
  },
  {
    "q": "What are honeypots used for?",
    "a": "To lure and monitor attackers, acting as decoys."
  },
  {
    "q": "Define MAC spoofing.",
    "a": "Changing a device's MAC address to bypass access controls."
  },
  {
    "q": "What is the primary role of a SIEM system?",
    "a": "To collect, analyze, and respond to security event data."
  },
  {
    "q": "What does the control plane do in Zero Trust?",
    "a": "It enforces policy-driven access decisions."
  },
  {
    "q": "What is the difference between piggybacking and tailgating?",
    "a": "Piggybacking is authorized access with consent; tailgating is unauthorized following without consent."
  },
  {
    "q": "What is a polymorphic virus?",
    "a": "A virus that changes its code upon each execution to evade detection."
  },
  {
    "q": "What is phishing over SMS called?",
    "a": "Smishing"
  },
  {
    "q": "Define social engineering.",
    "a": "Manipulating people into divulging confidential information."
  },
  {
    "q": "What does the 'C' in CIA Triad stand for?",
    "a": "Confidentiality"
  },
  {
    "q": "What are the three components of the CIA Triad?",
    "a": "Confidentiality, Integrity, Availability"
  },
  {
    "q": "What is non-repudiation?",
    "a": "It ensures that an individual cannot deny the authenticity of their signature or data."
  },
  {
    "q": "Name the AAA in security.",
    "a": "Authentication, Authorization, Accounting"
  },
  {
    "q": "What is a Zero Trust model?",
    "a": "A model where no user or system is trusted by default, even if inside the network."
  },
  {
    "q": "Give an example of a technical control.",
    "a": "Firewall, encryption, antivirus software"
  },
  {
    "q": "What type of control is a security policy?",
    "a": "Managerial (or administrative) control"
  },
  {
    "q": "What does DLP stand for?",
    "a": "Data Loss Prevention"
  },
  {
    "q": "Which type of malware spreads without user action?",
    "a": "Worm"
  },
  {
    "q": "What is spear phishing?",
    "a": "A targeted phishing attack on a specific individual or group."
  },
  {
    "q": "What is the purpose of digital signatures?",
    "a": "To ensure integrity, authenticity, and non-repudiation."
  },
  {
    "q": "What is a rootkit designed to do?",
    "a": "Gain and maintain privileged access to a system while hiding its presence."
  },
  {
    "q": "What are honeypots used for?",
    "a": "To lure and monitor attackers, acting as decoys."
  },
  {
    "q": "Define MAC spoofing.",
    "a": "Changing a device's MAC address to bypass access controls."
  },
  {
    "q": "What is the primary role of a SIEM system?",
    "a": "To collect, analyze, and respond to security event data."
  },
  {
    "q": "What does the control plane do in Zero Trust?",
    "a": "It enforces policy-driven access decisions."
  },
  {
    "q": "What is the difference between piggybacking and tailgating?",
    "a": "Piggybacking is authorized access with consent; tailgating is unauthorized following without consent."
  },
  {
    "q": "What is a polymorphic virus?",
    "a": "A virus that changes its code upon each execution to evade detection."
  },
  {
    "q": "What is phishing over SMS called?",
    "a": "Smishing"
  },
  {
    "q": "Define social engineering.",
    "a": "Manipulating people into divulging confidential information."
  },
  {
    "q": "What does the 'C' in CIA Triad stand for?",
    "a": "Confidentiality"
  },
  {
    "q": "What are the three components of the CIA Triad?",
    "a": "Confidentiality, Integrity, Availability"
  },
  {
    "q": "What is non-repudiation?",
    "a": "It ensures that an individual cannot deny the authenticity of their signature or data."
  },
  {
    "q": "Name the AAA in security.",
    "a": "Authentication, Authorization, Accounting"
  },
  {
    "q": "What is a Zero Trust model?",
    "a": "A model where no user or system is trusted by default, even if inside the network."
  },
  {
    "q": "Give an example of a technical control.",
    "a": "Firewall, encryption, antivirus software"
  },
  {
    "q": "What type of control is a security policy?",
    "a": "Managerial (or administrative) control"
  },
  {
    "q": "What does DLP stand for?",
    "a": "Data Loss Prevention"
  },
  {
    "q": "Which type of malware spreads without user action?",
    "a": "Worm"
  },
  {
    "q": "What is spear phishing?",
    "a": "A targeted phishing attack on a specific individual or group."
  },
  {
    "q": "What is the purpose of digital signatures?",
    "a": "To ensure integrity, authenticity, and non-repudiation."
  },
  {
    "q": "What is a rootkit designed to do?",
    "a": "Gain and maintain privileged access to a system while hiding its presence."
  },
  {
    "q": "What are honeypots used for?",
    "a": "To lure and monitor attackers, acting as decoys."
  },
  {
    "q": "Define MAC spoofing.",
    "a": "Changing a device's MAC address to bypass access controls."
  },
  {
    "q": "What is the primary role of a SIEM system?",
    "a": "To collect, analyze, and respond to security event data."
  },
  {
    "q": "What does the control plane do in Zero Trust?",
    "a": "It enforces policy-driven access decisions."
  },
  {
    "q": "What is the difference between piggybacking and tailgating?",
    "a": "Piggybacking is authorized access with consent; tailgating is unauthorized following without consent."
  },
  {
    "q": "What is a polymorphic virus?",
    "a": "A virus that changes its code upon each execution to evade detection."
  },
  {
    "q": "What is phishing over SMS called?",
    "a": "Smishing"
  },
  {
    "q": "Define social engineering.",
    "a": "Manipulating people into divulging confidential information."
  },
  {
    "q": "What does the 'C' in CIA Triad stand for?",
    "a": "Confidentiality"
  },
  {
    "q": "What are the three components of the CIA Triad?",
    "a": "Confidentiality, Integrity, Availability"
  },
  {
    "q": "What is non-repudiation?",
    "a": "It ensures that an individual cannot deny the authenticity of their signature or data."
  },
  {
    "q": "Name the AAA in security.",
    "a": "Authentication, Authorization, Accounting"
  },
  {
    "q": "What is a Zero Trust model?",
    "a": "A model where no user or system is trusted by default, even if inside the network."
  },
  {
    "q": "Give an example of a technical control.",
    "a": "Firewall, encryption, antivirus software"
  },
  {
    "q": "What type of control is a security policy?",
    "a": "Managerial (or administrative) control"
  },
  {
    "q": "What does DLP stand for?",
    "a": "Data Loss Prevention"
  },
  {
    "q": "Which type of malware spreads without user action?",
    "a": "Worm"
  },
  {
    "q": "What is spear phishing?",
    "a": "A targeted phishing attack on a specific individual or group."
  },
  {
    "q": "What is the purpose of digital signatures?",
    "a": "To ensure integrity, authenticity, and non-repudiation."
  },
  {
    "q": "What is a rootkit designed to do?",
    "a": "Gain and maintain privileged access to a system while hiding its presence."
  },
  {
    "q": "What are honeypots used for?",
    "a": "To lure and monitor attackers, acting as decoys."
  },
  {
    "q": "Define MAC spoofing.",
    "a": "Changing a device's MAC address to bypass access controls."
  },
  {
    "q": "What is the primary role of a SIEM system?",
    "a": "To collect, analyze, and respond to security event data."
  },
  {
    "q": "What does the control plane do in Zero Trust?",
    "a": "It enforces policy-driven access decisions."
  },
  {
    "q": "What is the difference between piggybacking and tailgating?",
    "a": "Piggybacking is authorized access with consent; tailgating is unauthorized following without consent."
  },
  {
    "q": "What is a polymorphic virus?",
    "a": "A virus that changes its code upon each execution to evade detection."
  },
  {
    "q": "What is phishing over SMS called?",
    "a": "Smishing"
  },
  {
    "q": "Define social engineering.",
    "a": "Manipulating people into divulging confidential information."
  },
  {
    "q": "What does the 'C' in CIA Triad stand for?",
    "a": "Confidentiality"
  },
  {
    "q": "What are the three components of the CIA Triad?",
    "a": "Confidentiality, Integrity, Availability"
  },
  {
    "q": "What is non-repudiation?",
    "a": "It ensures that an individual cannot deny the authenticity of their signature or data."
  },
  {
    "q": "Name the AAA in security.",
    "a": "Authentication, Authorization, Accounting"
  },
  {
    "q": "What is a Zero Trust model?",
    "a": "A model where no user or system is trusted by default, even if inside the network."
  },
  {
    "q": "Give an example of a technical control.",
    "a": "Firewall, encryption, antivirus software"
  },
  {
    "q": "What type of control is a security policy?",
    "a": "Managerial (or administrative) control"
  },
  {
    "q": "What does DLP stand for?",
    "a": "Data Loss Prevention"
  },
  {
    "q": "Which type of malware spreads without user action?",
    "a": "Worm"
  },
  {
    "q": "What is spear phishing?",
    "a": "A targeted phishing attack on a specific individual or group."
  },
  {
    "q": "What is the purpose of digital signatures?",
    "a": "To ensure integrity, authenticity, and non-repudiation."
  },
  {
    "q": "What is a rootkit designed to do?",
    "a": "Gain and maintain privileged access to a system while hiding its presence."
  },
  {
    "q": "What are honeypots used for?",
    "a": "To lure and monitor attackers, acting as decoys."
  },
  {
    "q": "Define MAC spoofing.",
    "a": "Changing a device's MAC address to bypass access controls."
  },
  {
    "q": "What is the primary role of a SIEM system?",
    "a": "To collect, analyze, and respond to security event data."
  },
  {
    "q": "What does the control plane do in Zero Trust?",
    "a": "It enforces policy-driven access decisions."
  },
  {
    "q": "What is the difference between piggybacking and tailgating?",
    "a": "Piggybacking is authorized access with consent; tailgating is unauthorized following without consent."
  },
  {
    "q": "What is a polymorphic virus?",
    "a": "A virus that changes its code upon each execution to evade detection."
  },
  {
    "q": "What is phishing over SMS called?",
    "a": "Smishing"
  },
  {
    "q": "Define social engineering.",
    "a": "Manipulating people into divulging confidential information."
  },
  {
    "q": "What does the 'C' in CIA Triad stand for?",
    "a": "Confidentiality"
  },
  {
    "q": "What are the three components of the CIA Triad?",
    "a": "Confidentiality, Integrity, Availability"
  },
  {
    "q": "What is non-repudiation?",
    "a": "It ensures that an individual cannot deny the authenticity of their signature or data."
  },
  {
    "q": "Name the AAA in security.",
    "a": "Authentication, Authorization, Accounting"
  },
  {
    "q": "What is a Zero Trust model?",
    "a": "A model where no user or system is trusted by default, even if inside the network."
  },
  {
    "q": "Give an example of a technical control.",
    "a": "Firewall, encryption, antivirus software"
  },
  {
    "q": "What type of control is a security policy?",
    "a": "Managerial (or administrative) control"
  },
  {
    "q": "What does DLP stand for?",
    "a": "Data Loss Prevention"
  },
  {
    "q": "Which type of malware spreads without user action?",
    "a": "Worm"
  },
  {
    "q": "What is spear phishing?",
    "a": "A targeted phishing attack on a specific individual or group."
  },
  {
    "q": "What is the purpose of digital signatures?",
    "a": "To ensure integrity, authenticity, and non-repudiation."
  },
  {
    "q": "What is a rootkit designed to do?",
    "a": "Gain and maintain privileged access to a system while hiding its presence."
  },
  {
    "q": "What are honeypots used for?",
    "a": "To lure and monitor attackers, acting as decoys."
  },
  {
    "q": "Define MAC spoofing.",
    "a": "Changing a device's MAC address to bypass access controls."
  },
  {
    "q": "What is the primary role of a SIEM system?",
    "a": "To collect, analyze, and respond to security event data."
  },
  {
    "q": "What does the control plane do in Zero Trust?",
    "a": "It enforces policy-driven access decisions."
  },
  {
    "q": "What is the difference between piggybacking and tailgating?",
    "a": "Piggybacking is authorized access with consent; tailgating is unauthorized following without consent."
  },
  {
    "q": "What is a polymorphic virus?",
    "a": "A virus that changes its code upon each execution to evade detection."
  },
  {
    "q": "What is phishing over SMS called?",
    "a": "Smishing"
  },
  {
    "q": "Define social engineering.",
    "a": "Manipulating people into divulging confidential information."
  },
  {
    "q": "What does the 'C' in CIA Triad stand for?",
    "a": "Confidentiality"
  },
  {
    "q": "What are the three components of the CIA Triad?",
    "a": "Confidentiality, Integrity, Availability"
  },
  {
    "q": "What is non-repudiation?",
    "a": "It ensures that an individual cannot deny the authenticity of their signature or data."
  },
  {
    "q": "Name the AAA in security.",
    "a": "Authentication, Authorization, Accounting"
  },
  {
    "q": "What is a Zero Trust model?",
    "a": "A model where no user or system is trusted by default, even if inside the network."
  },
  {
    "q": "Give an example of a technical control.",
    "a": "Firewall, encryption, antivirus software"
  },
  {
    "q": "What type of control is a security policy?",
    "a": "Managerial (or administrative) control"
  },
  {
    "q": "What does DLP stand for?",
    "a": "Data Loss Prevention"
  },
  {
    "q": "Which type of malware spreads without user action?",
    "a": "Worm"
  },
  {
    "q": "What is spear phishing?",
    "a": "A targeted phishing attack on a specific individual or group."
  },
  {
    "q": "What is the purpose of digital signatures?",
    "a": "To ensure integrity, authenticity, and non-repudiation."
  },
  {
    "q": "What is a rootkit designed to do?",
    "a": "Gain and maintain privileged access to a system while hiding its presence."
  },
  {
    "q": "What are honeypots used for?",
    "a": "To lure and monitor attackers, acting as decoys."
  },
  {
    "q": "Define MAC spoofing.",
    "a": "Changing a device's MAC address to bypass access controls."
  },
  {
    "q": "What is the primary role of a SIEM system?",
    "a": "To collect, analyze, and respond to security event data."
  },
  {
    "q": "What does the control plane do in Zero Trust?",
    "a": "It enforces policy-driven access decisions."
  },
  {
    "q": "What is the difference between piggybacking and tailgating?",
    "a": "Piggybacking is authorized access with consent; tailgating is unauthorized following without consent."
  },
  {
    "q": "What is a polymorphic virus?",
    "a": "A virus that changes its code upon each execution to evade detection."
  },
  {
    "q": "What is phishing over SMS called?",
    "a": "Smishing"
  },
  {
    "q": "Define social engineering.",
    "a": "Manipulating people into divulging confidential information."
  },
  {
    "q": "What does the 'C' in CIA Triad stand for?",
    "a": "Confidentiality"
  },
  {
    "q": "What are the three components of the CIA Triad?",
    "a": "Confidentiality, Integrity, Availability"
  },
  {
    "q": "What is non-repudiation?",
    "a": "It ensures that an individual cannot deny the authenticity of their signature or data."
  },
  {
    "q": "Name the AAA in security.",
    "a": "Authentication, Authorization, Accounting"
  },
  {
    "q": "What is a Zero Trust model?",
    "a": "A model where no user or system is trusted by default, even if inside the network."
  },
  {
    "q": "Give an example of a technical control.",
    "a": "Firewall, encryption, antivirus software"
  },
  {
    "q": "What type of control is a security policy?",
    "a": "Managerial (or administrative) control"
  },
  {
    "q": "What does DLP stand for?",
    "a": "Data Loss Prevention"
  },
  {
    "q": "Which type of malware spreads without user action?",
    "a": "Worm"
  },
  {
    "q": "What is spear phishing?",
    "a": "A targeted phishing attack on a specific individual or group."
  },
  {
    "q": "What is the purpose of digital signatures?",
    "a": "To ensure integrity, authenticity, and non-repudiation."
  },
  {
    "q": "What is a rootkit designed to do?",
    "a": "Gain and maintain privileged access to a system while hiding its presence."
  },
  {
    "q": "What are honeypots used for?",
    "a": "To lure and monitor attackers, acting as decoys."
  },
  {
    "q": "Define MAC spoofing.",
    "a": "Changing a device's MAC address to bypass access controls."
  },
  {
    "q": "What is the primary role of a SIEM system?",
    "a": "To collect, analyze, and respond to security event data."
  },
  {
    "q": "What does the control plane do in Zero Trust?",
    "a": "It enforces policy-driven access decisions."
  },
  {
    "q": "What is the difference between piggybacking and tailgating?",
    "a": "Piggybacking is authorized access with consent; tailgating is unauthorized following without consent."
  },
  {
    "q": "What is a polymorphic virus?",
    "a": "A virus that changes its code upon each execution to evade detection."
  },
  {
    "q": "What is phishing over SMS called?",
    "a": "Smishing"
  },
  {
    "q": "Define social engineering.",
    "a": "Manipulating people into divulging confidential information."
  },
  {
    "q": "What does the 'C' in CIA Triad stand for?",
    "a": "Confidentiality"
  },
  {
    "q": "What are the three components of the CIA Triad?",
    "a": "Confidentiality, Integrity, Availability"
  },
  {
    "q": "What is non-repudiation?",
    "a": "It ensures that an individual cannot deny the authenticity of their signature or data."
  },
  {
    "q": "Name the AAA in security.",
    "a": "Authentication, Authorization, Accounting"
  },
  {
    "q": "What is a Zero Trust model?",
    "a": "A model where no user or system is trusted by default, even if inside the network."
  },
  {
    "q": "Give an example of a technical control.",
    "a": "Firewall, encryption, antivirus software"
  },
  {
    "q": "What type of control is a security policy?",
    "a": "Managerial (or administrative) control"
  },
  {
    "q": "What does DLP stand for?",
    "a": "Data Loss Prevention"
  },
  {
    "q": "Which type of malware spreads without user action?",
    "a": "Worm"
  },
  {
    "q": "What is spear phishing?",
    "a": "A targeted phishing attack on a specific individual or group."
  },
  {
    "q": "What is the purpose of digital signatures?",
    "a": "To ensure integrity, authenticity, and non-repudiation."
  },
  {
    "q": "What is a rootkit designed to do?",
    "a": "Gain and maintain privileged access to a system while hiding its presence."
  },
  {
    "q": "What are honeypots used for?",
    "a": "To lure and monitor attackers, acting as decoys."
  },
  {
    "q": "Define MAC spoofing.",
    "a": "Changing a device's MAC address to bypass access controls."
  },
  {
    "q": "What is the primary role of a SIEM system?",
    "a": "To collect, analyze, and respond to security event data."
  },
  {
    "q": "What does the control plane do in Zero Trust?",
    "a": "It enforces policy-driven access decisions."
  },
  {
    "q": "What is the difference between piggybacking and tailgating?",
    "a": "Piggybacking is authorized access with consent; tailgating is unauthorized following without consent."
  },
  {
    "q": "What is a polymorphic virus?",
    "a": "A virus that changes its code upon each execution to evade detection."
  },
  {
    "q": "What is phishing over SMS called?",
    "a": "Smishing"
  },
  {
    "q": "Define social engineering.",
    "a": "Manipulating people into divulging confidential information."
  },
  {
    "q": "What does the 'C' in CIA Triad stand for?",
    "a": "Confidentiality"
  },
  {
    "q": "What are the three components of the CIA Triad?",
    "a": "Confidentiality, Integrity, Availability"
  },
  {
    "q": "What is non-repudiation?",
    "a": "It ensures that an individual cannot deny the authenticity of their signature or data."
  },
  {
    "q": "Name the AAA in security.",
    "a": "Authentication, Authorization, Accounting"
  },
  {
    "q": "What is a Zero Trust model?",
    "a": "A model where no user or system is trusted by default, even if inside the network."
  },
  {
    "q": "Give an example of a technical control.",
    "a": "Firewall, encryption, antivirus software"
  },
  {
    "q": "What type of control is a security policy?",
    "a": "Managerial (or administrative) control"
  },
  {
    "q": "What does DLP stand for?",
    "a": "Data Loss Prevention"
  },
  {
    "q": "Which type of malware spreads without user action?",
    "a": "Worm"
  },
  {
    "q": "What is spear phishing?",
    "a": "A targeted phishing attack on a specific individual or group."
  },
  {
    "q": "What is the purpose of digital signatures?",
    "a": "To ensure integrity, authenticity, and non-repudiation."
  },
  {
    "q": "What is a rootkit designed to do?",
    "a": "Gain and maintain privileged access to a system while hiding its presence."
  },
  {
    "q": "What are honeypots used for?",
    "a": "To lure and monitor attackers, acting as decoys."
  },
  {
    "q": "Define MAC spoofing.",
    "a": "Changing a device's MAC address to bypass access controls."
  },
  {
    "q": "What is the primary role of a SIEM system?",
    "a": "To collect, analyze, and respond to security event data."
  },
  {
    "q": "What does the control plane do in Zero Trust?",
    "a": "It enforces policy-driven access decisions."
  },
  {
    "q": "What is the difference between piggybacking and tailgating?",
    "a": "Piggybacking is authorized access with consent; tailgating is unauthorized following without consent."
  },
  {
    "q": "What is a polymorphic virus?",
    "a": "A virus that changes its code upon each execution to evade detection."
  },
  {
    "q": "What is phishing over SMS called?",
    "a": "Smishing"
  },
  {
    "q": "Define social engineering.",
    "a": "Manipulating people into divulging confidential information."
  },
  {
    "q": "What does the 'C' in CIA Triad stand for?",
    "a": "Confidentiality"
  },
  {
    "q": "What are the three components of the CIA Triad?",
    "a": "Confidentiality, Integrity, Availability"
  },
  {
    "q": "What is non-repudiation?",
    "a": "It ensures that an individual cannot deny the authenticity of their signature or data."
  },
  {
    "q": "Name the AAA in security.",
    "a": "Authentication, Authorization, Accounting"
  },
  {
    "q": "What is a Zero Trust model?",
    "a": "A model where no user or system is trusted by default, even if inside the network."
  },
  {
    "q": "Give an example of a technical control.",
    "a": "Firewall, encryption, antivirus software"
  },
  {
    "q": "What type of control is a security policy?",
    "a": "Managerial (or administrative) control"
  },
  {
    "q": "What does DLP stand for?",
    "a": "Data Loss Prevention"
  },
  {
    "q": "Which type of malware spreads without user action?",
    "a": "Worm"
  },
  {
    "q": "What is spear phishing?",
    "a": "A targeted phishing attack on a specific individual or group."
  },
  {
    "q": "What is the purpose of digital signatures?",
    "a": "To ensure integrity, authenticity, and non-repudiation."
  },
  {
    "q": "What is a rootkit designed to do?",
    "a": "Gain and maintain privileged access to a system while hiding its presence."
  },
  {
    "q": "What are honeypots used for?",
    "a": "To lure and monitor attackers, acting as decoys."
  },
  {
    "q": "Define MAC spoofing.",
    "a": "Changing a device's MAC address to bypass access controls."
  },
  {
    "q": "What is the primary role of a SIEM system?",
    "a": "To collect, analyze, and respond to security event data."
  },
  {
    "q": "What does the control plane do in Zero Trust?",
    "a": "It enforces policy-driven access decisions."
  },
  {
    "q": "What is the difference between piggybacking and tailgating?",
    "a": "Piggybacking is authorized access with consent; tailgating is unauthorized following without consent."
  },
  {
    "q": "What is a polymorphic virus?",
    "a": "A virus that changes its code upon each execution to evade detection."
  },
  {
    "q": "What is phishing over SMS called?",
    "a": "Smishing"
  },
  {
    "q": "Define social engineering.",
    "a": "Manipulating people into divulging confidential information."
  },
  {
    "q": "What does the 'C' in CIA Triad stand for?",
    "a": "Confidentiality"
  },
  {
    "q": "What are the three components of the CIA Triad?",
    "a": "Confidentiality, Integrity, Availability"
  },
  {
    "q": "What is non-repudiation?",
    "a": "It ensures that an individual cannot deny the authenticity of their signature or data."
  },
  {
    "q": "Name the AAA in security.",
    "a": "Authentication, Authorization, Accounting"
  },
  {
    "q": "What is a Zero Trust model?",
    "a": "A model where no user or system is trusted by default, even if inside the network."
  },
  {
    "q": "Give an example of a technical control.",
    "a": "Firewall, encryption, antivirus software"
  },
  {
    "q": "What type of control is a security policy?",
    "a": "Managerial (or administrative) control"
  },
  {
    "q": "What does DLP stand for?",
    "a": "Data Loss Prevention"
  },
  {
    "q": "Which type of malware spreads without user action?",
    "a": "Worm"
  },
  {
    "q": "What is spear phishing?",
    "a": "A targeted phishing attack on a specific individual or group."
  },
  {
    "q": "What is the purpose of digital signatures?",
    "a": "To ensure integrity, authenticity, and non-repudiation."
  },
  {
    "q": "What is a rootkit designed to do?",
    "a": "Gain and maintain privileged access to a system while hiding its presence."
  },
  {
    "q": "What are honeypots used for?",
    "a": "To lure and monitor attackers, acting as decoys."
  },
  {
    "q": "Define MAC spoofing.",
    "a": "Changing a device's MAC address to bypass access controls."
  },
  {
    "q": "What is the primary role of a SIEM system?",
    "a": "To collect, analyze, and respond to security event data."
  },
  {
    "q": "What does the control plane do in Zero Trust?",
    "a": "It enforces policy-driven access decisions."
  },
  {
    "q": "What is the difference between piggybacking and tailgating?",
    "a": "Piggybacking is authorized access with consent; tailgating is unauthorized following without consent."
  },
  {
    "q": "What is a polymorphic virus?",
    "a": "A virus that changes its code upon each execution to evade detection."
  },
  {
    "q": "What is phishing over SMS called?",
    "a": "Smishing"
  },
  {
    "q": "Define social engineering.",
    "a": "Manipulating people into divulging confidential information."
  },
  {
    "q": "What does the 'C' in CIA Triad stand for?",
    "a": "Confidentiality"
  },
  {
    "q": "What are the three components of the CIA Triad?",
    "a": "Confidentiality, Integrity, Availability"
  },
  {
    "q": "What is non-repudiation?",
    "a": "It ensures that an individual cannot deny the authenticity of their signature or data."
  },
  {
    "q": "Name the AAA in security.",
    "a": "Authentication, Authorization, Accounting"
  },
  {
    "q": "What is a Zero Trust model?",
    "a": "A model where no user or system is trusted by default, even if inside the network."
  },
  {
    "q": "Give an example of a technical control.",
    "a": "Firewall, encryption, antivirus software"
  },
  {
    "q": "What type of control is a security policy?",
    "a": "Managerial (or administrative) control"
  },
  {
    "q": "What does DLP stand for?",
    "a": "Data Loss Prevention"
  },
  {
    "q": "Which type of malware spreads without user action?",
    "a": "Worm"
  },
  {
    "q": "What is spear phishing?",
    "a": "A targeted phishing attack on a specific individual or group."
  },
  {
    "q": "What is the purpose of digital signatures?",
    "a": "To ensure integrity, authenticity, and non-repudiation."
  },
  {
    "q": "What is a rootkit designed to do?",
    "a": "Gain and maintain privileged access to a system while hiding its presence."
  },
  {
    "q": "What are honeypots used for?",
    "a": "To lure and monitor attackers, acting as decoys."
  },
  {
    "q": "Define MAC spoofing.",
    "a": "Changing a device's MAC address to bypass access controls."
  },
  {
    "q": "What is the primary role of a SIEM system?",
    "a": "To collect, analyze, and respond to security event data."
  },
  {
    "q": "What does the control plane do in Zero Trust?",
    "a": "It enforces policy-driven access decisions."
  },
  {
    "q": "What is the difference between piggybacking and tailgating?",
    "a": "Piggybacking is authorized access with consent; tailgating is unauthorized following without consent."
  },
  {
    "q": "What is a polymorphic virus?",
    "a": "A virus that changes its code upon each execution to evade detection."
  },
  {
    "q": "What is phishing over SMS called?",
    "a": "Smishing"
  },
  {
    "q": "Define social engineering.",
    "a": "Manipulating people into divulging confidential information."
  },
  {
    "q": "What does the 'C' in CIA Triad stand for?",
    "a": "Confidentiality"
  },
  {
    "q": "What are the three components of the CIA Triad?",
    "a": "Confidentiality, Integrity, Availability"
  },
  {
    "q": "What is non-repudiation?",
    "a": "It ensures that an individual cannot deny the authenticity of their signature or data."
  },
  {
    "q": "Name the AAA in security.",
    "a": "Authentication, Authorization, Accounting"
  },
  {
    "q": "What is a Zero Trust model?",
    "a": "A model where no user or system is trusted by default, even if inside the network."
  },
  {
    "q": "Give an example of a technical control.",
    "a": "Firewall, encryption, antivirus software"
  },
  {
    "q": "What type of control is a security policy?",
    "a": "Managerial (or administrative) control"
  },
  {
    "q": "What does DLP stand for?",
    "a": "Data Loss Prevention"
  },
  {
    "q": "Which type of malware spreads without user action?",
    "a": "Worm"
  },
  {
    "q": "What is spear phishing?",
    "a": "A targeted phishing attack on a specific individual or group."
  },
  {
    "q": "What is the purpose of digital signatures?",
    "a": "To ensure integrity, authenticity, and non-repudiation."
  },
  {
    "q": "What is a rootkit designed to do?",
    "a": "Gain and maintain privileged access to a system while hiding its presence."
  },
  {
    "q": "What are honeypots used for?",
    "a": "To lure and monitor attackers, acting as decoys."
  },
  {
    "q": "Define MAC spoofing.",
    "a": "Changing a device's MAC address to bypass access controls."
  },
  {
    "q": "What is the primary role of a SIEM system?",
    "a": "To collect, analyze, and respond to security event data."
  },
  {
    "q": "What does the control plane do in Zero Trust?",
    "a": "It enforces policy-driven access decisions."
  },
  {
    "q": "What is the difference between piggybacking and tailgating?",
    "a": "Piggybacking is authorized access with consent; tailgating is unauthorized following without consent."
  },
  {
    "q": "What is a polymorphic virus?",
    "a": "A virus that changes its code upon each execution to evade detection."
  },
  {
    "q": "What is phishing over SMS called?",
    "a": "Smishing"
  },
  {
    "q": "Define social engineering.",
    "a": "Manipulating people into divulging confidential information."
  },
  {
    "q": "What does the 'C' in CIA Triad stand for?",
    "a": "Confidentiality"
  },
  {
    "q": "What are the three components of the CIA Triad?",
    "a": "Confidentiality, Integrity, Availability"
  },
  {
    "q": "What is non-repudiation?",
    "a": "It ensures that an individual cannot deny the authenticity of their signature or data."
  },
  {
    "q": "Name the AAA in security.",
    "a": "Authentication, Authorization, Accounting"
  },
  {
    "q": "What is a Zero Trust model?",
    "a": "A model where no user or system is trusted by default, even if inside the network."
  },
  {
    "q": "Give an example of a technical control.",
    "a": "Firewall, encryption, antivirus software"
  },
  {
    "q": "What type of control is a security policy?",
    "a": "Managerial (or administrative) control"
  },
  {
    "q": "What does DLP stand for?",
    "a": "Data Loss Prevention"
  },
  {
    "q": "Which type of malware spreads without user action?",
    "a": "Worm"
  },
  {
    "q": "What is spear phishing?",
    "a": "A targeted phishing attack on a specific individual or group."
  },
  {
    "q": "What is the purpose of digital signatures?",
    "a": "To ensure integrity, authenticity, and non-repudiation."
  },
  {
    "q": "What is a rootkit designed to do?",
    "a": "Gain and maintain privileged access to a system while hiding its presence."
  },
  {
    "q": "What are honeypots used for?",
    "a": "To lure and monitor attackers, acting as decoys."
  },
  {
    "q": "Define MAC spoofing.",
    "a": "Changing a device's MAC address to bypass access controls."
  },
  {
    "q": "What is the primary role of a SIEM system?",
    "a": "To collect, analyze, and respond to security event data."
  },
  {
    "q": "What does the control plane do in Zero Trust?",
    "a": "It enforces policy-driven access decisions."
  },
  {
    "q": "What is the difference between piggybacking and tailgating?",
    "a": "Piggybacking is authorized access with consent; tailgating is unauthorized following without consent."
  },
  {
    "q": "What is a polymorphic virus?",
    "a": "A virus that changes its code upon each execution to evade detection."
  },
  {
    "q": "What is phishing over SMS called?",
    "a": "Smishing"
  },
  {
    "q": "Define social engineering.",
    "a": "Manipulating people into divulging confidential information."
  }
];