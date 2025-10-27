import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const resources = {
  Ingles: {
    translation: {
      header: {
        music: "Music",
        reports: "Reports",
        support: "Support",
        account: "My Account",
        register: "Register",
        login: "Login",
        languages: {
          es: "Spanish",
          en: "English",
          po: "Portuguese",
          ca: "Catalan",
          it: "Italian",
          fr: "French",
        },
      },
      footer: {
        copy: "All rights reserved.",
        description:
          "Your professional music platform for distribution and release management.",
      },
      navigation: "Navigation",
      help: "Help",
      // Dashboard/Home top-level keys
      dashboard: "Dashboard",
      dashboard_subtitle: "Manage your music releases",
      create_new_version: "Create New",
      total_releases: "Total Releases",
      published: "Published",
      total_streams: "Total Streams",
      revenue: "Revenue",
      your_releases: "Your Releases",
      view_reports: "View Reports",
      no_releases: "No releases",
      create_first_release:
        "Create your first release to start distributing your music across all digital platforms.",
      // Index (landing) page keys
      index: {
        new_music_era: "New Music Era",
        hero_title_prefix: "Distribute your music",
        hero_title_suffix: "worldwide",
        hero_subtitle:
          "The most advanced platform for independent artists. Upload, manage and distribute your music to 150+ platforms with professional tools and detailed analytics.",
        start_now: "Start Now",
        create_release: "Create Release",
        stat_platforms_label: "Platforms",
        stat_artists_label: "Artists",
        stat_songs_label: "Songs",
        why_choose_platform: "Why choose our platform?",
        features_subtitle:
          "Professional tools designed for the success of your music",
        feature_distribution_title: "Global Distribution",
        feature_distribution_desc:
          "Reach audiences worldwide with distribution to Spotify, Apple Music, YouTube Music and 150+ platforms.",
        feature_analytics_title: "Advanced Analytics",
        feature_analytics_desc:
          "Get detailed insights about your audience, plays, revenue, and growth trends.",
        feature_revenue_title: "Maximum Revenue",
        feature_revenue_desc:
          "Keep 100% of your rights and receive transparent payments with no hidden fees.",
        feature_fast_title: "Fast Release",
        feature_fast_desc:
          "Publish your music to all platforms in under 24 hours with our automated system.",
        feature_creative_title: "Creative Tools",
        feature_creative_desc:
          "Metadata editor, UPC/ISRC generator, and integrated promotion tools.",
        feature_protection_title: "Total Protection",
        feature_protection_desc:
          "Your music is protected with blockchain technology and enterprise-grade security.",
        cta_title: "Ready to take your music to the next level?",
        cta_subtitle:
          "Join thousands of artists who already trust our platform to distribute their music",
        cta_create_account: "Create Free Account",
        cta_support: "Talk to Support",
      },
      home: {
        title: ["Upload your", "Music"],
        subtitle: "Share your musical talent with the world.",
        titleReleaseCreate: "Create Release",
        buttonReleaseCreate: "Create New",
        titleSectionRelease: ["My", "Catalogs"],
        typeCard: "by: ",
        butonAddMusics: "Edit Songs",
        noReleases: "No releases available",
      },
      createRelease: {
        title: "Create a Release",
        subtitlePrimary: "New Album",
        subtitleSecondary: "Upload album cover",
        subtitleTertiary: "Additional Information",
        titleRelease: "Title of album, EP, or single",
        addArtist: "Enter artist",
        addGenres: "Enter genre",
        addDate: "Enter release date",
        addTime: "Enter release time",
        messageImage: `Your cover must be:
          Size: 3000 - 3000 pixels (in square format) Format:
          JPG, TIFF, or PNG (max. 36 MB; RGB mode) You must own
          the rights to the design and to every image or visual element
          it contains. The design information must be coherent
          with all the information entered in the release metadata.
          Stores will reject blurry, low-quality images or those
          containing any URL, email address, phone number,
          barcode, price, or trademarks logos.
          Furthermore, the cover should not contain any explicit
          or offensive material, such as pornography or hate speech.
          Any design that does not meet the store's requirements will be rejected.`,
        addUrlSpotify: "Enter your Spotify profile URL",
        addUrlAppleMusic: "Enter your Apple Music profile URL",
        addRecordLabel: "Enter record label",
        addTypeLaunch: {
          label: "Enter the type of launch.",
          optionPrimary: "Select one",
          optionSecondary: "Single",
          optionTertiary: "EP",
          optionQuarter: "Album",
        },
        addCodeUPC: "Enter UPC/EAN code",
        buttonNext: "Next",
      },
      editRelease: {
        title: "Edit Release",
        button: "Save",
      },
      deleteRelease: {
        alert: "Are you sure you want to delete this release?",
      },
      createMusic: {
        typeRelease: "Release Type:",
        artist: "Main Artist:",
        genreRelease: "Genre of the ",
        dateLaunch: "Release Date:",
        timeLaunch: "Release Time:",
        recordLabel: "Record Label:",
        urlSpotify: "Spotify URL:",
        urlAppleMusic: "Apple Music URL:",
        codeUPC: "UPC Code:",
        noMusic: "No music added",
        artistMusicSecu: "Supporting artist:",
        typeMusic: "Type:",
        deleteMusic: "Are you sure to delete this music?",
        titleCreateMusic: "Add the music",
        titleEditMusic: "Edit the song",
        titleMusic: "Song title",
        releaseMusic: "Song version",
        addArtistSecondary: "Add the supporting artist",
        addMusic: "Upload your audio '.wav' here!",
        typeContent: {
          label: "Enter the content type",
          explicit: "Explicit",
          clean: "Clean",
        },
        timeTokTokMusic: "Enter the time to appear on tiktok",
        wasInStores: {
          label: "Was this song in stores?",
          yes: "Yes",
          no: "No",
        },
        codeISRC: "Add the ISRC code",
        dateLaunchMusic: "Enter the date the song came out",
        buttonSave: "Save",
        buttonCancel: "Cancel",
      },
      support: {
        subject: "Subject",
        message: "Problem description",
        image: "Upload file",
        audio: "Upload audio",
        send: "Send ticket",
      },
      reports: {
        total_streams: "Total Streams",
        total_revenue: "Total Revenue",
        total_plays: "Total Plays",
        unique_listeners: "Unique Listeners",
        change_prev_month_pos: "+% change vs previous month",
        streams_per_day: "Streams per Day",
        distribution_by_platform: "Distribution by Platform",
        top_tracks: "Top Tracks",
      },
      account: {
        actions: { change_photo: "📷 Change Photo" },
        stats: { releases: "Releases", streams: "Streams", months: "Months" },
        fields: {
          name: "Full Name",
          email: "Email",
          phone: "Phone",
          country: "Country",
          city: "City",
          website: "Website",
        },
        messages: {
          profile_updated: "Profile updated successfully",
          passwords_not_match: "Passwords do not match",
          password_updated: "Password updated successfully",
          logout_confirm: "Are you sure you want to log out?",
          logout_success: "Logged out successfully",
          delete_confirm: "Are you COMPLETELY sure? This cannot be undone.",
          delete_success: "Account deleted. We're sorry to see you go.",
        },
      },
    },
  },
  Español: {
    translation: {
      header: {
        music: "Música",
        reports: "Informes",
        support: "Soporte",
        account: "Mi Cuenta",
        register: "Registrarse",
        login: "Iniciar Sesión",
        languages: {
          es: "Español",
          en: "Ingles",
          po: "Portugues",
          ca: "Catalan",
          it: "Italiano",
          fr: "Frances",
        },
      },
      footer: {
        copy: "Todos los derechos reservados.",
        description:
          "Tu plataforma de música profesional para distribución y gestión de lanzamientos.",
      },
      navigation: "Navegación",
      help: "Ayuda",
      // Dashboard/Home top-level keys
      dashboard: "Panel",
      dashboard_subtitle: "Gestiona tus lanzamientos musicales",
      create_new_version: "Crear Nuevo",
      total_releases: "Total Lanzamientos",
      published: "Publicados",
      total_streams: "Total Streams",
      revenue: "Ingresos",
      your_releases: "Tus Lanzamientos",
      view_reports: "Ver Reportes",
      no_releases: "No hay lanzamientos",
      create_first_release:
        "Crea tu primer lanzamiento para comenzar a distribuir tu música en todas las plataformas digitales.",
      // Index (landing) page keys
      index: {
        new_music_era: "Nueva Era Musical",
        hero_title_prefix: "Distribuye tu música",
        hero_title_suffix: "en todo el mundo",
        hero_subtitle:
          "La plataforma más avanzada para artistas independientes. Sube, gestiona y distribuye tu música en más de 150 plataformas digitales con herramientas profesionales y análisis detallados.",
        start_now: "Comenzar Ahora",
        create_release: "Crear Lanzamiento",
        stat_platforms_label: "Plataformas",
        stat_artists_label: "Artistas",
        stat_songs_label: "Canciones",
        why_choose_platform: "¿Por qué elegir nuestra plataforma?",
        features_subtitle:
          "Herramientas profesionales diseñadas para el éxito de tu música",
        feature_distribution_title: "Distribución Global",
        feature_distribution_desc:
          "Llega a audiencias de todo el mundo con distribución en Spotify, Apple Music, YouTube Music y más de 150 plataformas.",
        feature_analytics_title: "Analytics Avanzados",
        feature_analytics_desc:
          "Obtén insights detallados sobre tu audiencia, reproducciones, ingresos y tendencias de crecimiento.",
        feature_revenue_title: "Máximos Ingresos",
        feature_revenue_desc:
          "Mantén el 100% de tus derechos y recibe pagos transparentes sin comisiones ocultas.",
        feature_fast_title: "Lanzamiento Rápido",
        feature_fast_desc:
          "Publica tu música en todas las plataformas en menos de 24 horas con nuestro sistema automatizado.",
        feature_creative_title: "Herramientas Creativas",
        feature_creative_desc:
          "Editor de metadatos, generador de códigos UPC/ISRC y herramientas de promoción integradas.",
        feature_protection_title: "Protección Total",
        feature_protection_desc:
          "Tu música está protegida con tecnología blockchain y sistemas de seguridad de nivel empresarial.",
        cta_title: "¿Listo para llevar tu música al siguiente nivel?",
        cta_subtitle:
          "Únete a miles de artistas que ya confían en nuestra plataforma para distribuir su música",
        cta_create_account: "Crear Cuenta Gratis",
        cta_support: "Hablar con Soporte",
      },
      home: {
        title: ["Sube tu", "Música"],
        subtitle: "Comparte tu talento musical con el mundo.",
        titleReleaseCreate: "Crear Versión",
        buttonReleaseCreate: "Crear Nuevo",
        titleSectionRelease: ["Mis", "Catálogos"],
        typeCard: "por: ",
        butonAddMusics: "Editar músicas",
        noReleases: "No tiene versiones",
      },
      createRelease: {
        title: "Crear una versión",
        subtitlePrimary: "Nuevo Album",
        subtitleSecondary: "Subir carátula del album",
        subtitleTertiary: "Información adicional",
        titleRelease: "Título del álbum, EP o sencillo",
        addArtist: "Ingrese el artista",
        addGenres: "Ingrese el genero",
        addDate: "Ingrese la fecha de lanzamiento",
        addTime: "Ingrese el horario de lanzamiento",
        messageImage: `Tu portada debe ser:
          Tamaño: 3000 - 3000 píxeles (en formato cuadrado) Formato:
          JPG, TIFF o PNG (máx. 36 MB; modo RGB) Debes ser propietario
          de los derechos del diseño y de cada imagen o elemento visual
          que éste contenga. La información del diseño debe ser
          coherente con toda la información ingresada en los metadatos
          del lanzamiento.
          Las tiendas rechazarán imágenes borrosas, de baja calidad o si
          contienen alguna URL, correo electrónico, número de teléfono,
          código de barras, precio o logotipos de marcas registradas.
          Además, la portada no debe contener ningún material explícito
          o indignante, como pornografía o discursos de odio. Cualquier
          diseño que no cumpla con los requisitos de las tiendas será
          rechazado.`,
        addUrlSpotify: "Ingrese la url de su perfil de Spotify",
        addUrlAppleMusic: "Ingrese la url de su perfil de Apple Music",
        addRecordLabel: "Ingrese el sello discográfico",
        addTypeLaunch: {
          label: "Ingrese el tipo de lanzamiento",
          optionPrimary: "Seleccione uno",
          optionSecondary: "Sencillo",
          optionTertiary: "EP",
          optionQuarter: "Album",
        },
        addCodeUPC: "Ingrese el código UPC/EAN",
        buttonNext: "Siguiente",
      },
      editRelease: {
        title: "Editar Versión",
        button: "Guardar",
      },
      deleteRelease: {
        alert: "¿Estás seguro de borrar esta versión?",
      },
      createMusic: {
        typeRelease: "Tipo de la versión:",
        artist: "Artista Principal:",
        genreRelease: "Genero del",
        dateLaunch: "Fecha de lanzamiento:",
        timeLaunch: "Hora de lanzamiento:",
        recordLabel: "Sello discografico:",
        urlSpotify: "Url del Spotify:",
        urlAppleMusic: "Url del Apple Music:",
        codeUPC: "Codigo UPC:",
        noMusic: "No hay músicas agregadas",
        artistMusicSecu: "Artista secundario:",
        typeMusic: "Tipo:",
        deleteMusic: "¿Estás seguro de eliminar esta canción?",
        titleCreateMusic: "Agregar la canción",
        titleEditMusic: "Editar la canción",
        titleMusic: "Título de la canción",
        releaseMusic: "Versión de la canción",
        addArtistSecondary: "Agregar el artista de apoyo",
        addMusic: "Carga tu archivo de audio '.wav' aquí",
        typeContent: {
          label: "Ingresa el tipo de contenido",
          explicit: "Explícito",
          clean: "Limpio",
        },
        timeTokTokMusic: "Ingresa el tiempo para aparecer en TikTok",
        wasInStores: {
          label: "¿Esta canción estuvo en tiendas?",
          yes: "Sí",
          no: "No",
        },
        codeISRC: "Agregar el código ISRC",
        dateLaunchMusic: "Ingresa la fecha de lanzamiento de la canción",
        buttonSave: "Guardar",
        buttonCancel: "Cancelar",
      },
      support: {
        subject: "Sujeto",
        message: "Descripción del problema",
        image: "Carga de archivo",
        audio: "Carga de audio",
        send: "Enviar ticket",
      },
      reports: {
        total_streams: "Reproducciones Totales",
        total_revenue: "Ingresos Totales",
        total_plays: "Reproducciones",
        unique_listeners: "Oyentes Únicos",
        change_prev_month_pos: "+% vs mes anterior",
        streams_per_day: "Streams por Día",
        distribution_by_platform: "Distribución por Plataforma",
        top_tracks: "Top Canciones",
      },
      account: {
        actions: { change_photo: "📷 Cambiar Foto" },
        stats: { releases: "Releases", streams: "Streams", months: "Meses" },
        fields: {
          name: "Nombre Completo",
          email: "Email",
          phone: "Teléfono",
          country: "País",
          city: "Ciudad",
          website: "Sitio Web",
        },
        messages: {
          profile_updated: "Perfil actualizado exitosamente",
          passwords_not_match: "Las contraseñas no coinciden",
          password_updated: "Contraseña actualizada exitosamente",
          logout_confirm: "¿Estás seguro de que quieres cerrar sesión?",
          logout_success: "Sesión cerrada exitosamente",
          delete_confirm:
            "¿Estás COMPLETAMENTE seguro? Esta acción no se puede deshacer.",
          delete_success: "Cuenta eliminada. Lamentamos verte partir.",
        },
      },
    },
  },
  Portugues: {
    translation: {
      header: {
        music: "Música",
        reports: "Relatórios",
        support: "Suporte",
        account: "Minha Conta",
        register: "Registro",
        login: "Entrar",
        languages: {
          es: "Espanhol",
          en: "Inglês",
          po: "Português",
          ca: "Catalão",
          it: "Italiano",
          fr: "Francês",
        },
      },
      footer: {
        copy: "Todos os direitos reservados.",
        description:
          "Sua plataforma profissional de música para distribuição e gestão de lançamentos.",
      },
      navigation: "Navegação",
      help: "Ajuda",
      // Dashboard/Home top-level keys
      dashboard: "Painel",
      dashboard_subtitle: "Gerencie seus lançamentos musicais",
      create_new_version: "Criar Novo",
      total_releases: "Total de Lançamentos",
      published: "Publicados",
      total_streams: "Streams Totais",
      revenue: "Receita",
      your_releases: "Seus Lançamentos",
      view_reports: "Ver Relatórios",
      no_releases: "Sem lançamentos",
      create_first_release:
        "Crie seu primeiro lançamento para começar a distribuir sua música em todas as plataformas digitais.",
      // Index (landing) page keys
      index: {
        new_music_era: "Nova Era Musical",
        hero_title_prefix: "Distribua sua música",
        hero_title_suffix: "em todo o mundo",
        hero_subtitle:
          "A plataforma mais avançada para artistas independentes. Faça upload, gerencie e distribua sua música para mais de 150 plataformas com ferramentas profissionais e análises detalhadas.",
        start_now: "Começar Agora",
        create_release: "Criar Lançamento",
        stat_platforms_label: "Plataformas",
        stat_artists_label: "Artistas",
        stat_songs_label: "Canções",
        why_choose_platform: "Por que escolher nossa plataforma?",
        features_subtitle:
          "Ferramentas profissionais projetadas para o sucesso de sua música",
        feature_distribution_title: "Distribuição Global",
        feature_distribution_desc:
          "Alcance audiências em todo o mundo com distribuição para Spotify, Apple Music, YouTube Music e mais de 150 plataformas.",
        feature_analytics_title: "Analytics Avançados",
        feature_analytics_desc:
          "Obtenha insights detalhados sobre sua audiência, reproduções, receita e tendências de crescimento.",
        feature_revenue_title: "Máxima Receita",
        feature_revenue_desc:
          "Mantenha 100% de seus direitos e receba pagamentos transparentes sem taxas ocultas.",
        feature_fast_title: "Lançamento Rápido",
        feature_fast_desc:
          "Publique sua música em todas as plataformas em menos de 24 horas com nosso sistema automatizado.",
        feature_creative_title: "Ferramentas Criativas",
        feature_creative_desc:
          "Editor de metadados, gerador de códigos UPC/ISRC e ferramentas de promoção integradas.",
        feature_protection_title: "Proteção Total",
        feature_protection_desc:
          "Sua música é protegida com tecnologia blockchain e segurança de nível empresarial.",
        cta_title: "Pronto para levar sua música ao próximo nível?",
        cta_subtitle:
          "Junte-se a milhares de artistas que já confiam em nossa plataforma para distribuir sua música",
        cta_create_account: "Criar Conta Gratuita",
        cta_support: "Falar com o Suporte",
      },
      home: {
        title: ["Carregue o seu", "Música"],
        subtitle: "Compartilhe o seu talento musical com o mundo.",
        titleReleaseCreate: "Criar Versão",
        buttonReleaseCreate: "Criar Novo",
        titleSectionRelease: ["Minhas", "Catálogos"],
        typeCard: "por: ",
        butonAddMusics: "Editar músicas",
        noReleases: "Não possui versões",
      },
      createRelease: {
        title: "Criar uma versão",
        subtitlePrimary: "Novo Álbum",
        subtitleSecondary: "Carregar capa do álbum",
        subtitleTertiary: "Informações adicionais",
        titleRelease: "Título do álbum, EP ou single",
        addArtist: "Digite o artista",
        addGenres: "Digite o gênero",
        addDate: "Digite a data de lançamento",
        addTime: "Digite o horário de lançamento",
        messageImage: `A sua capa deve ter:
          Tamanho: 3000 - 3000 pixels (em formato quadrado) Formato:
          JPG, TIFF ou PNG (máx. 36 MB; modo RGB) Você deve possuir
          os direitos do design e de cada imagem ou elemento visual
          que ele contém. A informação do design deve ser coerente
          com todas as informações inseridas nos metadados da versão.
          As lojas rejeitarão imagens borradas, de baixa qualidade ou aquelas
          que contenham qualquer URL, endereço de email, número de telefone,
          código de barras, preço ou logotipos de marcas registradas.
          Além disso, a capa não deve conter material explícito
          ou ofensivo, como pornografia ou discursos de ódio. Qualquer
          design que não atenda aos requisitos da loja será rejeitado.`,
        addUrlSpotify: "Digite a URL do seu perfil de Spotify",
        addUrlAppleMusic: "Digite a URL do seu perfil de Apple Music",
        addRecordLabel: "Digite a gravadora",
        addTypeLaunch: {
          label: "Digite o tipo de lançamento.",
          optionPrimary: "Selecione um",
          optionSecondary: "Sencillo",
          optionTertiary: "EP",
          optionQuarter: "Álbum",
        },
        addCodeUPC: "Digite o código UPC/EAN",
        buttonNext: "Próximo",
      },
      editRelease: {
        title: "Editar Versão",
        button: "Salvar",
      },
      deleteRelease: {
        alert: "Tem certeza de que deseja excluir esta versão?",
      },
      createMusic: {
        typeRelease: "Tipo de Versão:",
        artist: "Artista Principal:",
        genreRelease: "Gênero da Versão:",
        dateLaunch: "Data de Lançamento:",
        timeLaunch: "Hora de Lançamento:",
        recordLabel: "Gravadora:",
        urlSpotify: "URL do Spotify:",
        urlAppleMusic: "URL do Apple Music:",
        codeUPC: "Código UPC:",
        noMusic: "Nenhuma música adicionada",
        artistMusicSecu: "Artista coadjuvante:",
        typeMusic: "Tipo:",
        deleteMusic: "Tem certeza de que deseja excluir esta música?",
        titleCreateMusic: "Adicionar a música",
        titleEditMusic: "Editar a música",
        titleMusic: "Título da música",
        releaseMusic: "Versão da música",
        addArtistSecondary: "Adicionar o artista de apoio",
        addMusic: "Carregue o seu arquivo de áudio '.wav' aqui!",
        typeContent: {
          label: "Digite o tipo de conteúdo",
          explicit: "Explícito",
          clean: "Limpo",
        },
        timeTokTokMusic: "Digite o tempo para aparecer no TikTok",
        wasInStores: {
          label: "Essa música estava nas lojas?",
          yes: "Sim",
          no: "Não",
        },
        codeISRC: "Adicione o código ISRC",
        dateLaunchMusic: "Digite a data de lançamento da música",
        buttonSave: "Salvar",
        buttonCancel: "Cancelar",
      },
      support: {
        subject: "Sujeito",
        message: "Descrição do problema",
        image: "Carregar arquivo",
        audio: "Carregar áudio",
        send: "Enviar ticket",
      },
      reports: {
        total_streams: "Streams Totais",
        total_revenue: "Receita Total",
        total_plays: "Reproduções",
        unique_listeners: "Ouvintes Únicos",
        change_prev_month_pos: "+% vs mês anterior",
        streams_per_day: "Streams por Dia",
        distribution_by_platform: "Distribuição por Plataforma",
        top_tracks: "Top Músicas",
      },
      account: {
        actions: { change_photo: "📷 Alterar Foto" },
        stats: { releases: "Lançamentos", streams: "Streams", months: "Meses" },
        fields: {
          name: "Nome Completo",
          email: "Email",
          phone: "Telefone",
          country: "País",
          city: "Cidade",
          website: "Site",
        },
        messages: {
          profile_updated: "Perfil atualizado com sucesso",
          passwords_not_match: "As senhas não coincidem",
          password_updated: "Senha atualizada com sucesso",
          logout_confirm: "Tem certeza de que deseja sair?",
          logout_success: "Sessão encerrada com sucesso",
          delete_confirm: "Tem CERTEZA? Esta ação não pode ser desfeita.",
          delete_success: "Conta excluída. Lamentamos ver você partir.",
        },
      },
    },
  },
  Catalan: {
    translation: {
      header: {
        music: "Música",
        reports: "Informes",
        support: "Suport",
        account: "El Meu Compte",
        register: "Registrar-se",
        login: "Iniciar Sessió",
        languages: {
          es: "Espanyol",
          en: "Anglès",
          po: "Portuguès",
          ca: "Català",
          it: "Italiano",
          fr: "Francès",
        },
      },
      footer: {
        copy: "Tots els drets reservats.",
        description:
          "La teva plataforma de música professional per a distribució i gestió de llançaments.",
      },
      navigation: "Navegació",
      help: "Ajuda",
      // Dashboard/Home top-level keys
      dashboard: "Tauler",
      dashboard_subtitle: "Gestiona els teus llançaments musicals",
      create_new_version: "Crear Nou",
      total_releases: "Total Llançaments",
      published: "Publicats",
      total_streams: "Reproduccions Totals",
      revenue: "Ingressos",
      your_releases: "Els Teus Llançaments",
      view_reports: "Veure Informes",
      no_releases: "Sense llançaments",
      create_first_release:
        "Crea el teu primer llançament per començar a distribuir la teva música a totes les plataformes digitals.",
      // Index (landing) page keys
      index: {
        new_music_era: "Nova Era Musical",
        hero_title_prefix: "Distribueix la teva música",
        hero_title_suffix: "a tot el món",
        hero_subtitle:
          "La plataforma més avançada per a artistes independents. Puja, gestiona i distribueix la teva música a més de 150 plataformes amb eines professionals i anàlisis detallades.",
        start_now: "Començar Ara",
        create_release: "Crear Llançament",
        stat_platforms_label: "Plataformes",
        stat_artists_label: "Artistes",
        stat_songs_label: "Cançons",
        why_choose_platform: "Per què escollir la nostra plataforma?",
        features_subtitle:
          "Eines professionals dissenyades per a l'èxit de la teva música",
        feature_distribution_title: "Distribució Global",
        feature_distribution_desc:
          "Arriba a audiències d'arreu del món amb distribució a Spotify, Apple Music, YouTube Music i més de 150 plataformes.",
        feature_analytics_title: "Analytics Avançats",
        feature_analytics_desc:
          "Obté insights detallats sobre la teva audiència, reproduccions, ingressos i tendències de creixement.",
        feature_revenue_title: "Ingressos Màxims",
        feature_revenue_desc:
          "Mantén el 100% dels teus drets i rep pagaments transparents sense comissions ocultes.",
        feature_fast_title: "Llançament Ràpid",
        feature_fast_desc:
          "Publica la teva música a totes les plataformes en menys de 24 hores amb el nostre sistema automatitzat.",
        feature_creative_title: "Eines Creatives",
        feature_creative_desc:
          "Editor de metadades, generador de codis UPC/ISRC i eines de promoció integrades.",
        feature_protection_title: "Protecció Total",
        feature_protection_desc:
          "La teva música està protegida amb tecnologia blockchain i sistemes de seguretat d'empresa.",
        cta_title: "Preparat per portar la teva música al següent nivell?",
        cta_subtitle:
          "Uneix-te a milers d'artistes que ja confien en la nostra plataforma per distribuir la seva música",
        cta_create_account: "Crear Compte Gratis",
        cta_support: "Parlar amb Suport",
      },
      home: {
        title: ["Puja el teu", "Música"],
        subtitle: "Comparteix el teu talent musical amb el món.",
        titleReleaseCreate: "Crear Versió",
        buttonReleaseCreate: "Crear Nou",
        titleSectionRelease: ["Les Meves", "Catàlegs"],
        typeCard: "per: ",
        butonAddMusics: "Editar músiques",
        noReleases: "No té versions",
      },
      createRelease: {
        title: "Crear una versió",
        subtitlePrimary: "Nou àlbum",
        subtitleSecondary: "Puja la portada de l'àlbum",
        subtitleTertiary: "Informació addicional",
        titleRelease: "Títol de l'àlbum, EP o senzill",
        addArtist: "Introdueixi l'artista",
        addGenres: "Introdueixi el gènere",
        addDate: "Introdueixi la data de llançament",
        addTime: "Introdueixi l'hora de llançament",
        messageImage: `La vostra portada ha de tenir:
          Mida: 3000 - 3000 píxels (en format quadrat) Format:
          JPG, TIFF o PNG (màx. 36 MB; mode RGB) Heu de ser
          propietari dels drets del disseny i de cada imatge o element visual
          que aquest contingui. La informació del disseny ha de ser coherent
          amb tota la informació introduïda en les metadades de la versió.
          Les botigues rebutjaran imatges desenfocades, de baixa qualitat o aquelles
          que continguin qualsevol URL, adreça de correu electrònic, número de telèfon,
          codi de barres, preu o logotips de marques registrades.
          A més, la portada no ha de contenir material explícit
          ni ofensiu, com pornografia o discursos de l'odi. Qualsevol
          disseny que no compleixi amb els requisits de la botiga serà rebutjat.`,
        addUrlSpotify: "Introdueixi l'URL del seu perfil de Spotify",
        addUrlAppleMusic: "Introdueixi l'URL del seu perfil de Apple Music",
        addRecordLabel: "Introdueixi la discogràfica",
        addTypeLaunch: {
          label: "Introdueix el tipus de llançament.",
          optionPrimary: "Seleccioneu un",
          optionSecondary: "Senzill",
          optionTertiary: "EP",
          optionQuarter: "Àlbum",
        },
        addCodeUPC: "Introdueixi el codi UPC/EAN",
        buttonNext: "Següent",
      },
      editRelease: {
        title: "Editar Versió",
        button: "Guardar",
      },
      deleteRelease: {
        alert: "Esteu segur que voleu esborrar aquesta versió?",
      },
      createMusic: {
        typeRelease: "Tipus de Versió:",
        artist: "Artista Principal:",
        genreRelease: "Gènere de la Versió:",
        dateLaunch: "Data de Llançament:",
        timeLaunch: "Hora de Llançament:",
        recordLabel: "Discogràfica:",
        urlSpotify: "URL del Spotify:",
        urlAppleMusic: "URL del Apple Music:",
        codeUPC: "Codi UPC:",
        noMusic: "Cap música afegida",
        artistMusicSecu: "Artista secundari:",
        typeMusic: "Tipus:",
        deleteMusic: "Esteu segur que voleu esborrar aquesta música?",
        titleCreateMusic: "Afegir la música",
        titleEditMusic: "Editar la cançó",
        titleMusic: "Títol de la música",
        releaseMusic: "Versió de la música",
        addArtistSecondary: "Afegir l'artista de suport",
        addMusic: "Carregueu el vostre arxiu d'àudio '.wav' aquí!",
        typeContent: {
          label: "Introduïu el tipus de contingut",
          explicit: "Explícit",
          clean: "Net",
        },
        timeTokTokMusic: "Introduïu el temps per aparèixer a TikTok",
        wasInStores: {
          label: "Aquesta música estava a les botigues?",
          yes: "Sí",
          no: "No",
        },
        codeISRC: "Afegiu el codi ISRC",
        dateLaunchMusic: "Introduïu la data de llançament de la música",
        buttonSave: "Guardar",
        buttonCancel: "Cancel·lar",
      },
      support: {
        subject: "Subjecte",
        message: "Descripció del problema",
        image: "Puja de fitxer",
        audio: "Puja d'àudio",
        send: "Enviar tiquet",
      },
      reports: {
        total_streams: "Reproduccions Totals",
        total_revenue: "Ingressos Totals",
        total_plays: "Reproduccions",
        unique_listeners: "Oients Únics",
        change_prev_month_pos: "+% vs mes anterior",
        streams_per_day: "Reproduccions per Dia",
        distribution_by_platform: "Distribució per Plataforma",
        top_tracks: "Millors Cançons",
      },
      account: {
        actions: { change_photo: "📷 Canviar Foto" },
        stats: {
          releases: "Llançaments",
          streams: "Reproduccions",
          months: "Mesos",
        },
        fields: {
          name: "Nom Complet",
          email: "Email",
          phone: "Telèfon",
          country: "País",
          city: "Ciutat",
          website: "Lloc Web",
        },
        messages: {
          profile_updated: "Perfil actualitzat correctament",
          passwords_not_match: "Les contrasenyes no coincideixen",
          password_updated: "Contrasenya actualitzada correctament",
          logout_confirm: "Estàs segur que vols tancar sessió?",
          logout_success: "Sessió tancada correctament",
          delete_confirm:
            "Estàs COMPLETAMENT segur? Aquesta acció no es pot desfer.",
          delete_success: "Compte eliminat. Ens sap greu veure't marxar.",
        },
      },
    },
  },
  Italiano: {
    translation: {
      header: {
        music: "Musica",
        reports: "Report",
        support: "Supporto",
        account: "Il Mio Account",
        register: "Registrati",
        login: "Accedi",
        languages: {
          es: "Spagnolo",
          en: "Inglese",
          po: "Portoghese",
          ca: "Catalano",
          it: "Italiano",
          fr: "Francese",
        },
      },
      footer: {
        copy: "Tutti i diritti riservati.",
        description:
          "La tua piattaforma musicale professionale per distribuzione e gestione delle pubblicazioni.",
      },
      navigation: "Navigazione",
      help: "Aiuto",
      // Dashboard/Home top-level keys
      dashboard: "Dashboard",
      dashboard_subtitle: "Gestisci le tue pubblicazioni musicali",
      create_new_version: "Crea Nuova",
      total_releases: "Pubblicazioni Totali",
      published: "Pubblicati",
      total_streams: "Stream Totali",
      revenue: "Entrate",
      your_releases: "Le Tue Pubblicazioni",
      view_reports: "Vedi Report",
      no_releases: "Nessuna pubblicazione",
      create_first_release:
        "Crea la tua prima pubblicazione per iniziare a distribuire la tua musica su tutte le piattaforme digitali.",
      // Index (landing) page keys
      index: {
        new_music_era: "Nuova Era Musicale",
        hero_title_prefix: "Distribuisci la tua musica",
        hero_title_suffix: "in tutto il mondo",
        hero_subtitle:
          "La piattaforma più avanzata per artisti indipendenti. Carica, gestisci e distribuisci la tua musica su oltre 150 piattaforme con strumenti professionali e analisi dettagliate.",
        start_now: "Inizia Ora",
        create_release: "Crea Pubblicazione",
        stat_platforms_label: "Piattaforme",
        stat_artists_label: "Artisti",
        stat_songs_label: "Canzoni",
        why_choose_platform: "Perché scegliere la nostra piattaforma?",
        features_subtitle:
          "Strumenti professionali progettati per il successo della tua musica",
        feature_distribution_title: "Distribuzione Globale",
        feature_distribution_desc:
          "Raggiungi pubblici in tutto il mondo con distribuzione su Spotify, Apple Music, YouTube Music e oltre 150 piattaforme.",
        feature_analytics_title: "Analytics Avanzati",
        feature_analytics_desc:
          "Ottieni approfondimenti dettagliati sul tuo pubblico, riproduzioni, entrate e tendenze di crescita.",
        feature_revenue_title: "Entrate Massime",
        feature_revenue_desc:
          "Mantieni il 100% dei tuoi diritti e ricevi pagamenti trasparenti senza commissioni nascoste.",
        feature_fast_title: "Pubblicazione Rapida",
        feature_fast_desc:
          "Pubblica la tua musica su tutte le piattaforme in meno di 24 ore con il nostro sistema automatizzato.",
        feature_creative_title: "Strumenti Creativi",
        feature_creative_desc:
          "Editor di metadati, generatore di codici UPC/ISRC e strumenti di promozione integrati.",
        feature_protection_title: "Protezione Totale",
        feature_protection_desc:
          "La tua musica è protetta con tecnologia blockchain e sicurezza di livello aziendale.",
        cta_title: "Pronto a portare la tua musica al livello successivo?",
        cta_subtitle:
          "Unisciti a migliaia di artisti che già si affidano alla nostra piattaforma per distribuire la loro musica",
        cta_create_account: "Crea Account Gratuito",
        cta_support: "Parla con il Supporto",
      },
      home: {
        title: ["Carica il tuo", "Musica"],
        subtitle: "Condividi il tuo talento musicale con il mondo.",
        titleReleaseCreate: "Crea Versione",
        buttonReleaseCreate: "Crea Nuova",
        titleSectionRelease: ["Le Mie", "Cataloghi"],
        typeCard: "per: ",
        butonAddMusics: "Modifica brani",
        noReleases: "Nessuna versione presente",
      },
      createRelease: {
        title: "Crea una versione",
        subtitlePrimary: "Nuovo Album",
        subtitleSecondary: "Carica copertina dell'album",
        subtitleTertiary: "Informazioni aggiuntive",
        titleRelease: "Titolo dell'album, EP o singolo",
        addArtist: "Inserisci l'artista",
        addGenres: "Inserisci il genere",
        addDate: "Inserisci la data di pubblicazione",
        addTime: "Inserisci l'orario di pubblicazione",
        messageImage: `La tua copertina deve avere:
          Dimensioni: 3000 - 3000 pixel (in formato quadrato) Formato:
          JPG, TIFF o PNG (max 36 MB; modalità RGB) Devi possedere
          i diritti del design e di ogni immagine o elemento visivo
          che essa contiene. Le informazioni sul design devono essere coerenti
          con tutte le informazioni inserite nei metadati della versione.
          I negozi respingeranno immagini sfocate, di bassa qualità o quelle
          che contengono URL, indirizzi email, numeri di telefono,
          codici a barre, prezzi o loghi di marchi registrati.
          Inoltre, la copertina non deve contenere materiale esplicito
          o offensivo, come pornografia o discorsi d'odio. Qualsiasi
          design che non rispetti i requisiti del negozio verrà respinto.`,
        addUrlSpotify: "Inserisci l'URL del tuo profilo Spotify",
        addUrlAppleMusic: "Inserisci l'URL del tuo profilo Apple Music",
        addRecordLabel: "Inserisci l'etichetta discografica",
        addTypeLaunch: {
          label: "Inserisci il tipo di lancio.",
          optionPrimary: "Seleziona uno",
          optionSecondary: "Singolo",
          optionTertiary: "EP",
          optionQuarter: "Album",
        },
        addCodeUPC: "Inserisci il codice UPC/EAN",
        buttonNext: "Avanti",
      },
      editRelease: {
        title: "Modifica Versione",
        button: "Salva",
      },
      deleteRelease: {
        alert: "Sei sicuro di voler eliminare questa versione?",
      },
      createMusic: {
        typeRelease: "Tipo di Versione:",
        artist: "Artista Principale:",
        genreRelease: "Genere della Versione:",
        dateLaunch: "Data di Pubblicazione:",
        timeLaunch: "Ora di Pubblicazione:",
        recordLabel: "Etichetta Discografica:",
        urlSpotify: "URL di Spotify:",
        urlAppleMusic: "URL di Apple Music:",
        codeUPC: "Codice UPC:",
        noMusic: "Nessuna musica aggiunta",
        artistMusicSecu: "Artista sostenitore:",
        typeMusic: "Tipo:",
        deleteMusic: "Sei sicuro di voler eliminare questa musica?",
        titleCreateMusic: "Aggiungi la musica",
        titleEditMusic: "Modifica il brano",
        titleMusic: "Titolo della musica",
        releaseMusic: "Versione della musica",
        addArtistSecondary: "Aggiungi artista di supporto",
        addMusic: "Carica il tuo file audio '.wav' qui!",
        typeContent: {
          label: "Inserisci il tipo di contenuto",
          explicit: "Esplicito",
          clean: "Pulito",
        },
        timeTokTokMusic: "Inserisci il tempo per apparire su TikTok",
        wasInStores: {
          label: "Questa musica era nei negozi?",
          yes: "Sì",
          no: "No",
        },
        codeISRC: "Aggiungi il codice ISRC",
        dateLaunchMusic: "Inserisci la data di pubblicazione della musica",
        buttonSave: "Salva",
        buttonCancel: "Annulla",
      },
      support: {
        subject: "Soggetto",
        message: "Descrizione del problema",
        image: "Carica file",
        audio: "Carica audio",
        send: "Invia ticket",
      },
      reports: {
        total_streams: "Stream Totali",
        total_revenue: "Entrate Totali",
        total_plays: "Riproduzioni",
        unique_listeners: "Ascoltatori Unici",
        change_prev_month_pos: "+% vs mese precedente",
        streams_per_day: "Stream per Giorno",
        distribution_by_platform: "Distribuzione per Piattaforma",
        top_tracks: "Brani Top",
      },
      account: {
        actions: { change_photo: "📷 Cambia Foto" },
        stats: { releases: "Pubblicazioni", streams: "Stream", months: "Mesi" },
        fields: {
          name: "Nome Completo",
          email: "Email",
          phone: "Telefono",
          country: "Paese",
          city: "Città",
          website: "Sito Web",
        },
        messages: {
          profile_updated: "Profilo aggiornato con successo",
          passwords_not_match: "Le password non coincidono",
          password_updated: "Password aggiornata con successo",
          logout_confirm: "Sei sicuro di voler uscire?",
          logout_success: "Disconnessione riuscita",
          delete_confirm:
            "Sei COMPLETAMENTE sicuro? Questa azione è irrevocabile.",
          delete_success: "Account eliminato. Ci dispiace vederti andare.",
        },
      },
    },
  },
  Frances: {
    translation: {
      header: {
        music: "Musique",
        reports: "Rapports",
        support: "Support",
        account: "Mon Compte",
        register: "S'inscrire",
        login: "Se Connecter",
        languages: {
          es: "Espagnol",
          en: "Anglais",
          po: "Portugais",
          ca: "Catalan",
          it: "Italien",
          fr: "Français",
        },
      },
      footer: {
        copy: "Tous droits réservés.",
        description:
          "Ta plateforme musicale professionnelle pour la distribution et la gestion des sorties.",
      },
      navigation: "Navigation",
      help: "Aide",
      // Dashboard/Home top-level keys
      dashboard: "Tableau de bord",
      dashboard_subtitle: "Gérez vos sorties musicales",
      create_new_version: "Créer Nouveau",
      total_releases: "Sorties Totales",
      published: "Publiés",
      total_streams: "Flux Totaux",
      revenue: "Revenus",
      your_releases: "Vos Sorties",
      view_reports: "Voir Rapports",
      no_releases: "Aucune sortie",
      create_first_release:
        "Crée ta première sortie pour commencer à distribuer ta musique sur toutes les plateformes numériques.",
      // Index (landing) page keys
      index: {
        new_music_era: "Nouvelle Ère Musicale",
        hero_title_prefix: "Distribue ta musique",
        hero_title_suffix: "dans le monde entier",
        hero_subtitle:
          "La plateforme la plus avancée pour les artistes indépendants. Téléverse, gère et distribue ta musique sur plus de 150 plateformes avec des outils professionnels et des analyses détaillées.",
        start_now: "Commencer Maintenant",
        create_release: "Créer Sortie",
        stat_platforms_label: "Plateformes",
        stat_artists_label: "Artistes",
        stat_songs_label: "Chansons",
        why_choose_platform: "Pourquoi choisir notre plateforme ?",
        features_subtitle:
          "Des outils professionnels conçus pour le succès de ta musique",
        feature_distribution_title: "Distribution Globale",
        feature_distribution_desc:
          "Atteins des publics du monde entier avec une distribution sur Spotify, Apple Music, YouTube Music et plus de 150 plateformes.",
        feature_analytics_title: "Analyses Avancées",
        feature_analytics_desc:
          "Obtiens des informations détaillées sur ton audience, tes écoutes, tes revenus et tes tendances de croissance.",
        feature_revenue_title: "Revenus Maximaux",
        feature_revenue_desc:
          "Conserve 100% de tes droits et reçois des paiements transparents sans frais cachés.",
        feature_fast_title: "Sortie Rapide",
        feature_fast_desc:
          "Publie ta musique sur toutes les plateformes en moins de 24 heures grâce à notre système automatisé.",
        feature_creative_title: "Outils Créatifs",
        feature_creative_desc:
          "Éditeur de métadonnées, générateur de codes UPC/ISRC et outils de promotion intégrés.",
        feature_protection_title: "Protection Totale",
        feature_protection_desc:
          "Ta musique est protégée par la technologie blockchain et une sécurité de niveau entreprise.",
        cta_title: "Prêt à porter ta musique au niveau supérieur ?",
        cta_subtitle:
          "Rejoins des milliers d'artistes qui font déjà confiance à notre plateforme pour distribuer leur musique",
        cta_create_account: "Créer un Compte Gratuit",
        cta_support: "Parler au Support",
      },
      home: {
        title: ["Téléchargez votre", "Musique"],
        subtitle: "Partagez votre talent musical avec le monde.",
        titleReleaseCreate: "Créer Version",
        buttonReleaseCreate: "Créer Nouveau",
        titleSectionRelease: ["Mes", "Catalogues"],
        typeCard: "par : ",
        butonAddMusics: "Modifier les morceaux",
        noReleases: "Aucune version ajoutée",
      },
      createRelease: {
        title: "Créer une version",
        subtitlePrimary: "Nouvel Album",
        subtitleSecondary: "Télécharger la couverture de l'album",
        subtitleTertiary: "Informations supplémentaires",
        titleRelease: "Titre de l'album, de l'EP ou du single",
        addArtist: "Ajoutez l'artiste",
        addGenres: "Ajoutez le genre",
        addDate: "Ajoutez la date de sortie",
        addTime: "Ajoutez l'heure de sortie",
        messageImage: `Ta pochette doit respecter les critères suivants :
          Dimensions : 3000 x 3000 pixels (format carré) Format :
          JPG, TIFF ou PNG (maximum 36 Mo ; mode RVB) Tu dois posséder
          les droits sur le design et sur chaque image ou élément visuel
          qu'elle contient. Les informations du design doivent être cohérentes
          avec toutes les informations ajoutées aux métadonnées de la version.
          Les boutiques refuseront les images floues, de mauvaise qualité ou celles
          qui contiennent des URL, des adresses e-mail, des numéros de téléphone,
          des codes-barres, des prix ou des logos de marques déposées.
          De plus, la pochette ne doit pas contenir de contenu explicite
          ou offensant, comme de la pornographie ou des discours haineux. Tout
          design ne respectant pas les exigences de la boutique sera refusé.`,
        addUrlSpotify: "Ajoutez l'URL de ton profil Spotify",
        addUrlAppleMusic: "Ajoutez l'URL de ton profil Apple Music",
        addRecordLabel: "Ajoutez le label de la maison de disques",
        addTypeLaunch: {
          label: "Entrez le type de lancement.",
          optionPrimary: "Sélectionne une",
          optionSecondary: "Single",
          optionTertiary: "EP",
          optionQuarter: "Album",
        },
        addCodeUPC: "Ajoutez le code UPC/EAN",
        buttonNext: "Suivant",
      },
      editRelease: {
        title: "Modifier Version",
        button: "Enregistrer",
      },
      deleteRelease: {
        alert: "Es-tu sûr de vouloir supprimer cette version ?",
      },
      createMusic: {
        typeRelease: "Type de Version :",
        artist: "Artiste Principal :",
        genreRelease: "Genre de la Version :",
        dateLaunch: "Date de Sortie :",
        timeLaunch: "Heure de Sortie :",
        recordLabel: "Label de la Maison de Disques :",
        urlSpotify: "URL de Spotify :",
        urlAppleMusic: "URL d'Apple Music :",
        codeUPC: "Code UPC :",
        noMusic: "Aucune musique ajoutée",
        artistMusicSecu: "Artiste de soutien:",
        typeMusic: "Type :",
        deleteMusic: "Es-tu sûr de vouloir supprimer cette musique ?",
        titleCreateMusic: "Ajouter la musique",
        titleEditMusic: "Modifier la chanson",
        titleMusic: "Titre de la musique",
        releaseMusic: "Version de la musique",
        addArtistSecondary: "Ajoutez l'artiste de soutien",
        addMusic: "Charge ton fichier audio '.wav' ici !",
        typeContent: {
          label: "Saisis le type de contenu",
          explicit: "Explicite",
          clean: "Propre",
        },
        timeTokTokMusic: "Saisis le temps d'apparition sur TikTok",
        wasInStores: {
          label: "Cette musique était-elle en vente dans les boutiques ?",
          yes: "Oui",
          no: "Non",
        },
        codeISRC: "Ajoutez le code ISRC",
        dateLaunchMusic: "Saisis la date de sortie de la musique",
        buttonSave: "Enregistrer",
        buttonCancel: "Annuler",
      },
      support: {
        subject: "Sujet",
        message: "Description du problème",
        image: "Télécharger le fichier",
        audio: "Télécharger l'audio",
        send: "Envoyer le ticket",
      },
      reports: {
        total_streams: "Flux Totaux",
        total_revenue: "Revenus Totaux",
        total_plays: "Lectures",
        unique_listeners: "Auditeurs Uniques",
        change_prev_month_pos: "+% par rapport au mois précédent",
        streams_per_day: "Flux par Jour",
        distribution_by_platform: "Répartition par Plateforme",
        top_tracks: "Meilleurs Titres",
      },
      account: {
        actions: { change_photo: "📷 Changer la Photo" },
        stats: { releases: "Sorties", streams: "Flux", months: "Mois" },
        fields: {
          name: "Nom Complet",
          email: "Email",
          phone: "Téléphone",
          country: "Pays",
          city: "Ville",
          website: "Site Web",
        },
        messages: {
          profile_updated: "Profil mis à jour avec succès",
          passwords_not_match: "Les mots de passe ne correspondent pas",
          password_updated: "Mot de passe mis à jour avec succès",
          logout_confirm: "Êtes-vous sûr de vouloir vous déconnecter ?",
          logout_success: "Déconnecté avec succès",
          delete_confirm: "Êtes-vous CERTAIN ? Cette action est irréversible.",
          delete_success: "Compte supprimé. Désolé de vous voir partir.",
        },
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
