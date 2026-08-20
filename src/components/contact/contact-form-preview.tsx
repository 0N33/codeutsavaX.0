export function ContactFormPreview() {
    const fieldClassName =
        "mt-2 min-h-12 w-full border border-white/10 bg-black/20 px-4 py-3 text-sm text-zinc-400 disabled:cursor-not-allowed disabled:opacity-70";

    return (
        <section
            aria-labelledby="contact-form-title"
            className="border border-white/10 bg-white/[0.025] p-6 shadow-[10px_10px_0_rgba(255,62,165,0.05)] sm:p-8"
        >
            <p className="font-mono text-[0.68rem] tracking-[0.2em] text-pink-200 uppercase">
                Contact form / preview
            </p>
            <h2
                id="contact-form-title"
                className="mt-3 text-2xl font-bold text-white"
            >
                Direct inquiries
            </h2>
            <p
                id="contact-form-status"
                className="mt-3 text-sm leading-6 text-zinc-400"
            >
                This form is disabled until the team confirms its official
                inquiry workflow.
            </p>

            <form
                aria-describedby="contact-form-status"
                aria-labelledby="contact-form-title"
                className="mt-8"
            >
                <fieldset disabled className="space-y-5">
                    <legend className="sr-only">Contact details</legend>
                    <div className="grid gap-5 sm:grid-cols-2">
                        <label className="text-sm font-semibold text-zinc-200">
                            Full name
                            <input
                                className={fieldClassName}
                                type="text"
                                name="name"
                                autoComplete="name"
                                placeholder="Your name"
                            />
                        </label>
                        <label className="text-sm font-semibold text-zinc-200">
                            Email address
                            <input
                                className={fieldClassName}
                                type="email"
                                name="email"
                                autoComplete="email"
                                placeholder="you@example.com"
                            />
                        </label>
                    </div>
                    <label className="block text-sm font-semibold text-zinc-200">
                        Subject
                        <input
                            className={fieldClassName}
                            type="text"
                            name="subject"
                            placeholder="How can the team help?"
                        />
                    </label>
                    <label className="block text-sm font-semibold text-zinc-200">
                        Message
                        <textarea
                            className={`${fieldClassName} min-h-36 resize-y`}
                            name="message"
                            placeholder="Write your message"
                        />
                    </label>
                    <button
                        type="submit"
                        className="inline-flex min-h-12 w-full cursor-not-allowed items-center justify-center rounded-full bg-zinc-700 px-6 py-3 text-xs font-bold tracking-[0.14em] text-zinc-400 uppercase sm:w-auto"
                    >
                        Submission unavailable
                    </button>
                </fieldset>
            </form>
        </section>
    );
}
