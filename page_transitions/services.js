export const landingTransitions = {
    title: {
        initial: {
            y: '150%'
        },
        animate: {
            y: '0',
            transition: {
                duration: .75,
                type: 'spring'
            }
        }
    },
    info: {
        animate: {
            transition: {
                staggerChildren: .2
            }
        },
        children: {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            }
        }
    }
}

export const copyTransitions = {
    headerContainer: {
        animate: {
            transition: {
                staggerChildren: .2
            }
        }
    },
    headerText: {
        initial: {
            y: '100%'
        },
        animate: {
            y: 0,
            transition: {
                duration: 1
            }
        }
    },
    textboxVariant: {
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                ease: [.38, .25, 0, 1],
                duration: 1,
                when: 'beforeChildren'
            }
        },
        initial: {
            opacity: 0,
            y: 50
        }
    },
    ctaUnderlineVariant: {
        animate: {
            scaleX: 1,
            transition: {
                duration: .5
            }
        },
        initial: {
            scaleX: 0
        }
    },
    stagger: {
        animate: {
            transition: {
                staggerChildren: .1
            }
        }
    }
}

export const sectionTransitions = {
    headerVariant: {
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                ease: [.38, .25, 0, 1],
                duration: 1,
                when: 'beforeChildren'
            }
        },
        initial: {
            opacity: 0,
            y: 50
        }
    },
    emphUnderline: {
        animate: {
            scaleX: 1,
            transition: {
                duration: .5
            }
        },
        initial: {
            scaleX: 0
        }
    },
    stagger: {
        animate: {
            transition: {
                staggerChildren: .2
            }
        }
    },
    blockQuoteText: {
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1.5,
                ease: [.38, .25, 0, 1],
            }
        },
        initial: {
            opacity: 0,
            x: 100
        }
    },
    blockQuoteText_bars: {
        animate: {
            opacity: 1,
            x: 0,
            y: '-50%',
            zIndex: 1,
            transition: {
                duration: 1.5,
                ease: [.38, .25, 0, 1]
            }
        },
        initial: {
            opacity: 0,
            y: '-50%',
            x: 100
        }
    },
    mainImgScale: {
        animate: {
            scale: 1,
            transition: {
                duration: 3,
                ease: [.35, .25, 0, 1]
            }
        },
        initial: {
            scale: 1.15,
            transition: {
                duration: .5
            }
        }
    },
    opacity: {
        animate: {
            opacity: 1,
            transition: {
                ease: [.38, .25, 0, 1],
                duration: 1,
                delay: 1
            }
        },
        initial: {
            opacity: 0
        }
    }
}

export const spacerTransitions = {
    headerScale: {
        animate: {
            scale: 1,
            transition: {
                easing: [.38, .25, 0, 1],
                delay: .2,
                duration: .15
            }
        },
        initial: {
            scale: 1.1
        }
    }
}