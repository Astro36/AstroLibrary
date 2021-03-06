/**
 * @file ModPE integrated library
 * @author Astro <astr36@naver.com>
 * @version 2.1
 * @license LGPL-3.0
 */

/**
 * @namespace me
 */
let me = this.me || {};

(($, astro) => {
    /**
     * @memberOf me
     * @namespace astro
     */
    "use strict";

    const DownloadManager_ = android.app.DownloadManager,
        Context_ = android.content.Context,
        Intent_ = android.content.Intent,
        PackageManager_ = android.content.pm.PackageManager,
        Bitmap_ = android.graphics.Bitmap,
        BitmapFactory_ = android.graphics.BitmapFactory,
        Canvas_ = android.graphics.Canvas,
        Color_ = android.graphics.Color,
        LinearGradient_ = android.graphics.LinearGradient,
        Paint_ = android.graphics.Paint,
        PorterDuff_ = android.graphics.PorterDuff,
        PorterDuffColorFilter_ = android.graphics.PorterDuffColorFilter,
        PorterDuffXfermode_ = android.graphics.PorterDuffXfermode,
        Shader_ = android.graphics.Shader,
        BitmapDrawable_ = android.graphics.drawable.BitmapDrawable,
        ColorDrawable_ = android.graphics.drawable.ColorDrawable,
        GradientDrawable_ = android.graphics.drawable.GradientDrawable,
        LayerDrawable_ = android.graphics.drawable.LayerDrawable,
        ShapeDrawable_ = android.graphics.drawable.ShapeDrawable,
        OvalShape_ = android.graphics.drawable.shapes.OvalShape,
        ConnectivityManager_ = android.net.ConnectivityManager,
        AndroidHttpClient_ = android.net.http.AndroidHttpClient,
        Uri_ = android.net.Uri,
        Build_ = android.os.Build,
        Environment_ = android.os.Environment,
        StrictMode_ = android.os.StrictMode,
        Allocation_ = android.renderscript.Allocation,
        Element_ = android.renderscript.Element,
        RenderScript_ = android.renderscript.RenderScript,
        ScriptIntrinsicBlur_ = android.renderscript.ScriptIntrinsicBlur,
        Base64_ = android.util.Base64,
        Patterns_ = android.util.Patterns,
        Gravity_ = android.view.Gravity,
        MotionEvent_ = android.view.MotionEvent,
        View_ = android.view.View,
        AlphaAnimation_ = android.view.animation.AlphaAnimation,
        DecelerateInterpolator_ = android.view.animation.DecelerateInterpolator,
        TranslateAnimation_ = android.view.animation.TranslateAnimation,
        WebView_ = android.webkit.WebView,
        CompoundButton_ = android.widget.CompoundButton,
        EditText_ = android.widget.EditText,
        FrameLayout_ = android.widget.FrameLayout,
        LinearLayout_ = android.widget.LinearLayout,
        PopupWindow_ = android.widget.PopupWindow,
        ScrollView_ = android.widget.ScrollView,
        TextView_ = android.widget.TextView,
        Toast_ = android.widget.Toast,
        ToggleButton_ = android.widget.ToggleButton,
        MainActivity_ = com.mojang.minecraftpe.MainActivity,
        BufferedReader_ = java.io.BufferedReader,
        ByteArrayOutputStream_ = java.io.ByteArrayOutputStream,
        DataOutputStream_ = java.io.DataOutputStream,
        File_ = java.io.File,
        FileInputStream_ = java.io.FileInputStream,
        FileOutputStream_ = java.io.FileOutputStream,
        InputStreamReader_ = java.io.InputStreamReader,
        Byte_ = java.lang.Byte,
        String_ = java.lang.String,
        Thread_ = java.lang.Thread,
        Array_ = java.lang.reflect.Array,
        DatagramSocket_ = java.net.DatagramSocket,
        DatagramPacket_ = java.net.DatagramPacket,
        InetSocketAddress_ = java.net.InetSocketAddress,
        URL_ = java.net.URL,
        ByteBuffer_ = java.nio.ByteBuffer,
        ZipInputStream_ = java.util.zip.ZipInputStream,
        ScriptManager_ = net.zhuoweizhang.mcpelauncher.ScriptManager,
        HttpGet_ = org.apache.http.client.methods.HttpGet,
        ScriptableObject_ = org.mozilla.javascript.ScriptableObject,
        CONTEXT = MainActivity_.currentMainActivity.get(),
        DP = CONTEXT.getResources().getDisplayMetrics().density,
        RESOURCE = CONTEXT.getResources(),
        SCREEN = CONTEXT.getWindow().getDecorView(),
        GITHUB_URL = "https://github.com/Astro36/AstroLibrary/raw/master/",
        NAME = "Astro Library",
        NAME_CODE = "me_astro_library",
        VERSION = "2.1",
        ACCOUNT_URL = "http://minedev.dothome.co.kr/deneb/server.php",
        NOTICE_URL = "http://minedev.dothome.co.kr/deneb/notice.txt",
        DEVELOPER = "Astro",
        PATH = Environment_.getExternalStorageDirectory().getAbsolutePath() + "/games/me.astro/library/",
        DEVICE_WIDTH = CONTEXT.getScreenWidth(),
        DEVICE_HEIGHT = CONTEXT.getScreenHeight(),
        DEVICE_MODEL = Build_.MODEL,
        DEVICE_VERSION = Build_.VERSION.RELEASE,
        TRANSLATION_TEXT = "Cannot connect to the server.\n- 서버 오류. 이 오류를 발견한다면 즉시 개발자에게 알려주세요.\n\nCan not find player.\n- 맵 안에서만 사용 가능한 기능입니다.\n\nCannot find the user.\n- 서버에 올바르지 않은 계정 아이디가 입력되었습니다.\n\nIncompatible version. (Library version ≥ {version})\n- 라이브러리의 버전이 호환되지 않습니다. 최신 버전으로 업데이트해주세요.\n\nInvalid format.\n- 유효하지 않은 형식입니다.\n    ID & Password: 4~12자리의 영어, 숫자, 언더바(_)만 사용 가능합니다.\n    Name: 1~20자리의 영어, 숫자, 언더바(_)만 사용 가능합니다.\n    E-mail: 네이버 E-mail만 사용 가능합니다.\n\nInvalid number.\n- 유효하지 않은 숫자입니다. 정수를 입력해주세요.\n\nInvalid parameters.\n- 스크립트 오류. 해당 스크립트 개발자에게 문의하세요.\n\nInvalid version format.\n- 유효하지 않은 버전 형식입니다. 1.0과 같은 형식으로 입력해주세요.\n\nNo Internet.\n- 인터넷에 연결해주세요.\n\nThe password is incorrect.\n- 비밀번호가 올바르지 않습니다.\n\nThis e-mail is already used.\n-이미 사용중인 E-mail입니다. 다른 E-mail를 입력하세요.\n\nThis ID is already used.\n- 이미 사용중인 아이디입니다. 다른 아이디를 입력하세요.\n\nThis ID is not accepted.\n- 아이디가 아직 승인되지 않았습니다. 개발자가 아이디를 사용 허가할 때까지 기다려주세요.\n\nThis ID is not signed up the server.\n- 서버에 가입하지 않은 아이디입니다. 서버에 가입해주세요.",
        SHARE_TEXT = "Hello world",
        LICENSE_TEXT = "AstroLibrary is licensed under the GNU Lesser General Public License, Version 3 (LGPL-3.0).";

    let hasLevel = false,
        notificationWindowInstance,
        preference,
        notificationWindow,
        verticalWindow,
        notice = "Error: No Internet.",
        user;



    /**
     * Contains classes for creating drawables and colors.
     * @memberOf me.astro
     * @namespace design
     */

    /**
     * Class representing a bitmap.
     * @since 2016-05-03
     * @class
     * @memberOf me.astro.design
     */
    function Bitmap() {}

    /**
     * Creates a blurred bitmap.
     * @since 2017-01-10
     * @param {android.graphics.Bitmap} bitmap Original bitmap
     * @param {Number} radius Blurred radius
     * @returns {android.graphics.Bitmap} Blurred bitmap
     */
    Bitmap.blur = function (bitmap, radius) {
        if (Build_.VERSION.SDK_INT >= Build_.VERSION_CODES.JELLY_BEAN_MR1) {
            let renderScript = RenderScript_.create(CONTEXT),
                input = Allocation_.createFromBitmap(renderScript, bitmap),
                output = Allocation_.createTyped(renderScript, input.getType()),
                script = ScriptIntrinsicBlur_.create(renderScript, Element_.U8_4(renderScript));
            script.setRadius(radius);
            script.setInput(input);
            script.forEach(output);
            output.copyTo(bitmap);
            return bitmap;
        }
        return bitmap;
    };

    /**
     * Creates a bitmap from a image.
     * @since 2016-05-03
     * @param {String} path Image path
     * @param {Number} [width=36] Width of bitmap
     * @param {Number} [height=36] Height of bitmap
     * @returns {android.graphics.Bitmap} Bitmap
     */
    Bitmap.createBitmap = function (path, width, height) {
        return Bitmap.resizeBitmap(BitmapFactory_.decodeFile(path), width || 36, height || 36);
    };

    /**
     * Creates a bitmap from a Base64 string.
     * @since 2017-01-22
     * @param {String} res Base64 string
     * @returns {android.graphics.Bitmap} Bitmap
     */
    Bitmap.decodeBase64 = function (res) {
        let bytes = Base64_.decode(res, 0);
        return BitmapFactory_.decodeByteArray(bytes, 0, bytes.length);
    };

    /**
     * Resizes a bitmap.
     * @since 2016-05-03
     * @param {android.graphics.Bitmap} bitmap Bitmap to be resized
     * @param {Number} width Width of bitmap
     * @param {Number} height Height of bitmap
     * @returns {android.graphics.Bitmap} Bitmap
     */
    Bitmap.resizeBitmap = function (bitmap, width, height) {
        return Bitmap_.createScaledBitmap(bitmap, DP * width, DP * height, false);
    };



    /**
     * Contains color constants.
     * @since 2016-05-03
     * @memberOf me.astro.design
     * @enum {Number}
     * @readonly
     */
    const Color = {
        RED: -769226,
        RED_DARK: -2937041,
        RED_ACCENT: -44462,
        PINK: -1499549,
        PINK_DARK: -4056997,
        PINK_ACCENT: -49023,
        PURPLE: -6543440,
        PURPLE_DARK: -8708190,
        PURPLE_ACCENT: -2080517,
        DEEP_PURPLE: -10011977,
        DEEP_PURPLE_DARK: -11457112,
        DEEP_PURPLE_ACCENT: -8630785,
        INDIGO: -12627531,
        INDIGO_DARK: -13615201,
        INDIGO_ACCENT: -11309570,
        BLUE: -14575885,
        BLUE_DARK: -15108398,
        BLUE_ACCENT: -12285185,
        LIGHT_BLUE: -16537100,
        LIGHT_BLUE_DARK: -16611119,
        LIGHT_BLUE_ACCENT: -12532481,
        CYAN: -16728876,
        CYAN_DARK: -16738393,
        CYAN_ACCENT: -15138817,
        TEAL: -16738680,
        TEAL_DARK: -16746133,
        TEAL_ACCENT: -10158118,
        GREEN: -11751600,
        GREEN_DARK: -13070788,
        GREEN_ACCENT: -9834322,
        LIGHT_GREEN: -7617718,
        LIGHT_GREEN_DARK: -9920712,
        LIGHT_GREEN_ACCENT: -5046439,
        LIME: -3285959,
        LIME_DARK: -5262293,
        LIME_ACCENT: -1114303,
        YELLOW: -5317,
        YELLOW_DARK: -278483,
        YELLOW_ACCENT: -256,
        AMBER: -16121,
        AMBER_DARK: -24576,
        AMBER_ACCENT: -10432,
        ORANGE: -26624,
        ORANGE_DARK: -689152,
        ORANGE_ACCENT: -21696,
        DEEP_ORANGE: -43230,
        DEEP_ORANGE_DARK: -1684967,
        DEEP_ORANGE_ACCENT: -37312,
        BROWN: -8825528,
        BROWN_DARK: -10665929,
        BROWN_800: -11652050,
        GREY: -6381922,
        GREY_DARK: -10395295,
        BLUE_GREY: -10453621,
        BLUE_GREY_DARK: -12232092,
        BLACK: -16777216,
        WHITE: -1,
        TRANSPARENT: 0
    };
    Object.freeze(Color);



    /**
     * Class representing color utils.
     * @since 2017-01-22
     * @class
     * @memberOf me.astro.design
     */
    function ColorUtils() {}

    /**
     * Blends the colors
     * @since 2017-01-22
     * @param {Array.<Number>} colors Colors
     * @returns {Number} Color
     */
    ColorUtils.blendColors = function (colors) {
        let len = colors.length,
            r = 0,
            g = 0,
            b = 0,
            a = 0;
        for (let i = len; i--;) {
            let color = colors[i];
            r += Color_.red(color);
            g += Color_.green(color);
            b += Color_.blue(color);
            a += Color_.alpha(color);
        }
        return Color_.argb(Math.floor(a / len), Math.floor(r / len), Math.floor(g / len), Math.floor(b / len));
    };

    /**
     * Sets alpha component of the color.
     * @since 2017-01-27
     * @param {Number} color Color
     * @param {Number} alpha Alpha component
     * @returns {Number} Color
     */
    ColorUtils.setAlpha = function (color, alpha) {
        return Color_.argb(alpha, Color_.red(color), Color_.green(color), Color_.blue(color));
    };



    /**
     * Class representing a drawable.
     * @since 2016-05-03
     * @class
     * @memberOf me.astro.design
     */
    function Drawable() {}

    /**
     * Tints color on the drawable.
     * @since 2016-05-03
     * @param {android.graphics.drawable.Drawable} drawable Drawable
     * @param {Number} color Color
     */
    Drawable.setTint = function (drawable, color) {
        drawable.getPaint().setColorFilter(new PorterDuffColorFilter_(color, PorterDuff_.Mode.SRC_ATOP));
        return drawable;
    };



    /**
     * Class representing a drawable which has a shadow.
     * @since 2016-05-03
     * @class
     * @extends me.astro.design.Drawable
     * @memberOf me.astro.design
     */
    function ShadowDrawable() {}

    /**
     * A drawable which has a shadow (for copying).
     * @type {android.graphics.drawable.Drawable}
     */
    ShadowDrawable.RESOURCE = RESOURCE.getDrawable(17301521);

    /**
     * Creates a drawable which has a shadow.
     * @since 2016-05-03
     * @returns {android.graphics.drawable.LayerDrawable} A drawable which has a shadow.
     */
    ShadowDrawable.create = function () {
        let shadowDrawable = new LayerDrawable_([ShadowDrawable.RESOURCE]);
        shadowDrawable.setLayerInset(0, DP * 3, DP * 6, DP * 3, DP * 3);
        return shadowDrawable;
    };



    /**
     * Contains color constants.
     * @since 2016-07-04
     * @memberOf me.astro.design
     * @enum {Number}
     * @readonly
     */
    const Shape = {
        RECT: 0,
        CIRCLE: 1
    };
    Object.freeze(Shape);



    /**
     * Class representing a squircle drawable.
     * @since 2017-01-25
     * @class
     * @extends me.astro.design.Drawable
     * @memberOf me.astro.design
     */
    function SquircleDrawable() {}

    /**
     * A drawable to be copied.
     * @type {android.graphics.drawable.BitmapDrawable}
     */
    SquircleDrawable.RESOURCE = (() => {
        let bytes = Base64_.decode("iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAMAAABlApw1AAAC91BMVEUAAAD09PTw8PD+/v6lpaVvb28UFBT///8HBwcEBAQJCQkAAAABAQECAgIjIyNISEhiYmJ2dnZ4eHiLi4uWlpagoKCmpqarq6v///+wsLDFxcXQ0NDa2trh4eHh4eHo6Ojq6urs7Ozw8PDy8vLy8vL19fXz8/P09PT19fX39/f39/f4+Pj5+fm9vb3Q0NDa2trl5eXw8PD6+vr9/f36+voDAwOUlJTIyMjo6Oju7u76+vr5+fn5+fkRERFfX1+2trbY2NiwsLDn5+dfX18jIyPExMT39/fIyMgAAABMTEzLy8uDg4Pr6+ugoKDh4eHLy8vy8vLg4OBERES5ubnExMSKioqlpaW3t7f19fWCgoJxcXHl5eX////T09Ph4eHx8fG1tbX29vaampoBAQHm5uavr68dHR3q6uqnp6dxcXGOjo7Z2dlQUFC9vb2Kioqfn5/R0dH///9TU1PJycmhoaECAgJjY2P19fXAwMDg4OAEBATp6env7++Kiorz8/PKysrX19cgICDp6ens7Ox2dnbu7u7x8fHw8PCgoKCurq7z8/O0tLS+vr709PTHx8fOzs7Z2dnc3NwAAADc3Nzf39/g4ODh4eHj4+MKCgrl5eXl5eUuLi7l5eU9PT3m5ubd3d3U1NTPz8/Kysq2trapqant7e3v7++QkJDs7Ox5eXnp6enn5+c1NTXr6+vl5eXm5uZra2vf39/Y2Nj///+9vb2lpaXU1NTDw8Pj4+PX19fHx8eoqKjh4eHU1NQ9PT26urqCgoLh4eFjY2Po6Oh6enrf39/Ozs6goKDT09OwsLDx8fHY2Njq6uqzs7PT09OpqalDQ0PNzc2QkJDb29u2trZkZGTOzs6JiYnX19elpaXd3d3n5+fCwsLCwsLAwMC1tbXZ2dmpqanJycm3t7fU1NTHx8ezs7PLy8uTk5PBwcHS0tJXV1fKysra2trQ0NAlJSWysrLExMS+vr5qamqTk5O7u7sFBQU7OzucnJyurq6/v7/Kysqrq6u9MN/NAAAA/XRSTlMAAQIDAwICBQcMDhMbHyUnMDY7QEhMU1cHXGt/ip2ttsbQ2uDm6/P3+vv9//9bd5Ww3f///gk6Xq3P/Pz9BCdRhEW/BR5T/wQRHmop3j67evG0B152BwVx/QUf2Q+sA+sHClYWzWob1mkTUqgwfA1gmRc3jg8hQf+EyCPi9lD9nrYq5/NG/P//Y3H/f5D/mKPCyRjQ09rf4Sfl6S3tMe7Wvreqhnr+/V3+T//3Mf39/Uvu1xuZdM+n/uS4gvzaCaFd/wz9WP/UhO6g/Pb8pvmVK+Nx/7k352f/kv/8ydPEr/+K4Kn/zYzSZ7T0Q8X/6TOSxKtRcLMsPH6UvduXYnXzxAAADjJJREFUeNrtXXtcU+Ub35XtjBFefz+8pWkoO+eU+e6sy3ZOqauBeYmWzC2BIszUTLsIlNXUClYopZiKlaWGAwmmdp1SGCKphJpiOkeZpWZpSmamWX/83nM2dsFxk9t5fx+fDwLCYft+z/d5zvOc814egaBDTBjCBDw2oVAkEovFEmlYWJNI4S/DwqQSeKhIxANGEDYL2gNEJJNjinBlxHWR3br36NmzV6/e/4H2X2js1969evXs2aN7t8jICGW4ApPLRJ5XYMl0CRWhWCyVsl+jFMrI7r379O3Xf8D1AwfdMHjIjdFDh8WocIJsYASuihk2NPrGIYNvGDTw+gH9+/Xt07t7pFIRxaKXSiGNTsMuEofBz/LwyJ433Tz8lkEjomMIEkBTq9XcP49RDcz744CDSCImesSgW4bffFPPyHA5xB/W8SyEYkmYQKhR3npb/9vviMYB8KHVarU6LUXT8MNrJO0//fA/9cYeAw/Van2cAMCj77i9/223KjVCQZhELOw49IxAgN1518iBQ1SkB7dOq9P50AL4AUjQjLHHsId6OengS3iYkKohA0fedScmEDAdwUEK0TPKUSNHRxMe6F7kVCiETcJvYJSXh4cGET165CglfCuxtF3hM3qh7O57Bgw2eLAHIiebP+lN8SEDeXhYGAYPuOdumVDPtBv8WEYQN2r4CLIePNV25KF5UPUkyBHDR8UJmNj2OfsMM+beQSqgpjjwLHqSbDfsASy4F6U4EpQaqAbdOwa+dZvhy5iwsf0Gk2rgPfUdAT2YhlcIoCYH9xsbxsjaBD+MkY7pNwSotbpOQR/EQadVgyH9xkiZsLZ4j6LvOKD2nPzOQe/jwMmgBuP6Kq7aj8LkzPgJBIRPQsfvRPT1gU1RJKRATBjPyMOuzn2w++LVWhY+2enwPTKwFLTq+Puwq3Ejhhl7P4ChC7oIvpcCgOEM7h/bejcyMqPGcacfdBl8ryOxIowbxRhbi/+BeDV3+kEXGyeCOv6B1jEwyifiapz1QQC6ngFF4mrVRHkrGCQwEwkA3YcH8D0USBoQE5mEluI3ySYRFB/cJ9CNKGKSzNQy/HpZHzOv8HsZmPvI9C2rPcfHAx2gAa+MhpDix7ekPhVaHpys1gEK8MwooFNPftDS/L1aQmKSWkfxDj9baOvUSYnNBnJs7CSg5SF8joIWTIptxolEyWMfonjoQF4noh4amyxqksDDKUlqnuL3hEFSysNNCiB7hKR4Ct8TB+QjsqYksKROAbwVgJMATEm1NI4/WfIo0PJbAS14VJLceA0x9THIkdemA49NbbSiSBZNI3V8FoBLBuQ0UWMSJEyfArSA56YFU6Y3ks2EshkExW8BuKf2xAxZ6ILClPI43yPAEwWPp4SOgtiZ8bwXgJMgfmbIekIsmwR0FP8VgJXOJJk4VBJLHM3/EPaE8ehES6jxlx7DEPAgzoeG9QgxhiMWP4GEB3E+9IT4Sh8yzZqAwjXIcx2aMMsU6hoEKDQUoECI65BQPJugaTQUoGli9hVBkBz1JNCSaBAgteDJqIb1kP6pKYjEMBfFU55q+IhI9vRQQKOiAA2GPi1rOAEChgABEDEIdXaDaRXJsmcoVEKADQLqGVlwEJjmTGBHYxAxWkdNmBOcCZi0cUCLjgtpwbi04EEncfpQmkbHhWh6aHpQMSESzc7QEggR0GXMFomCYvhZAp0YZn2IeDYoimNTkmAeRkcBmIuTUgLLIdP050iUFIBgn5seeBli5j5PUSgRoKjn5zJBhcQLgEaJAA1eCComxC9aabQUoK0vigMfaU0z69BSQGeeFnBLAK+iBoTSADtnVmsIvI4mR80zoKaAYV7APY0kcT6BUBrgEgExP1ESMDDDpgECKQLkcwFDNfq0ySRSChAQ7uQ0/12lZMFLBIWWC1HESwskAXnsZQKlNMAmAuJlfyYTil/JpFFTgM58xZ8IxDOydKgpoLPNEPsVeNWqA2gRADrrqz4FROLXstFTIPs1scg3wWBhNnoKZC/0TToQyxfloEcgZ5G8PghiNa9noEcg43VNrI/AGxkq9Ai84SegSMKRUwDHkxT1BEyK+Qb0XAif7yMgiVts0KJGQGtYHCfxVdNLcAQVWOKrpy25S3H0FMCX5tYTYJRvouhCbyrrnwwxEctQVGBZhI/A3OUGCjUClGH5XD+BFSgqsMJPIG8ljp4C+Mo8H4EFb2WgRyBj5YIAAigq8JafwNtoEnjbT+AdFAm84yew6l0UCby7yk8ATQX+nwgg70LXYuCaC7VVARRLiQAF0M/ESBZzAQQWrMygUSNAB1ajeSuRLKf99wN5K1BUYEVewD1xDo7co8WcgHvitGUoKrAszf9Y5T0Uxwfe8z1W0SuXojg+sFSp9z1aXIKiAkt8jxYt4YtRJLA43OJ7vL4axUG+1b7H6ybFGhQJrPENcMRia7NxgNZUA4Bnr8X8g3zzspAb5FNlzfMP8kUtsqGngG1RVKxvFeX7NqgAQjO2CKiA7X3fikqRLN9mRk0Bsy1f5p8rMW2dikSLAKmyT/MREMoKCs0ArXmjwFxY4F/YLV5fZKbRUoA2F633zz1m0j/IQY1Azgfp/unrTPE7OUjdEMDbgZy3iv0ETHnLs3VoKaDLXp7nXwFhmboUrWKILYWWTvXP3LWEr7ailIrZRGxdHe4nIMHW2lRoKaCyrcX8M3eTNYtsZgolBSizbZHGP/1exOSzqRidpYgwEa/LZ/wr4YRMQVE2hdBKPoLKLilgAhbkMumObBolF6KzN2wMXIZlKt7ETj4mkbkI6aybigMXwukjPszCUVIAz/rwo8BV9abENTYVhY4ClMq2JjFQgdioj9ehU1CzxfS6j6Nig5bjflISQ6FyHSVIKqbkk6DluELZekcWjchNGduQIcuxPnifKlnxJhsyBTUspm2bioM3ltB/9KkdR0cB3P7pR8Fbe5iwzwrNiAQBDAFz4WdY8LYMyfL8IiuJxmUIwrQW5cuDN8YQ6jc6EYliLoadG/UN9ufR5222IbIQiF2CtTmv4e42FsWWQhUSqQwGqqpwi6IhgWR5aZGVRiAKIETaWlQqv2LDSMvGz20ECpmABITt841XbjRnTPuiUEWhoAClKvwi7cqd5E1lW4tiELithLeTMUVby67cpk2k/7LcjkA1AesIe/mX+hA7B8sXbEbAhzgP2rxAHmq/121bK6y89yHoQdaKrdtC7fkqMm6vzCT4vjkDSROZlduNIfeeNqZ9VcTelvGYAusg5qKv0kJ3szCV7XDaaX5v1kbQtN25o6yRjZs1q3aW8LucYMuIkp2rNI1t27xtl6OK5nMYwzKiyrFrW2NNCERR6V9X4zy+ksJrKF79dXpUo9vHJ8zZ7ayCcc7PdAaLIJq0O3fPabwLhEiT/nUFN2JM8hE/OzpcsSdd08T+/Qmz9sJcwFMngg4Ec8DeWU214RBqvtnnsEIn4l8ygCmAJq2Ofd9ommyEYkrYX1NhAPxzIq5tp6GiZr+xmXZAZakH2IKC4BkDCIdgi4gDqWXNdQAt+/ZgeRbHgGcBQBNZ5Qe/LWu2Y6gx5ZDLkcOzMOACIMfhOpTSgp5eZYmH3bVmNhvwxYtItgYizbXuw4llzeOHTpR7wF2BkzTJEwYsDprEa90Hcsta1HI2DIv8zsOAF5Hs6QWMV7i/i8Ra2ByRwbp9767FSV5ci7jrD3v+v++Gtbg1olEDGTjMvq7JXRm93Pk3OyB+TSua8hkV3Y7UOK0cg64UgWsnDROws+ZIN0Wr2iIyisgfjlZmGuiuFMFz+mlDZuXRHyIVrWytyWC5P+5x1+Z4RSC7BD53+nNq3Xt+zMVa3RqUweIKfqopzzRQXULBC58yZJbX/FQQh11Fh1ypBpt57LjbWUV0PoV6+ESVw3382ExMc3UtxxksvOCEy70hi6NAArKzGixzbwXhZ21wu04UhGNX3ehapMGuK93nqnRUGdgev52hg+c92M6+hipHpWtf6XWYRtSWDuOYYtXPB11uZ4mZ9nDoQCG8L86ip80lTrfr4M+rFFhb+4wbNYrihSddNZUb7Hg9Bw+R9gbvNYgez9xQWeM6ubBYoTEK2mxSI6bI++XXUyyHdTkERQW8W3skOTLg5QBFETnrWPSnfv0lT4EZpYL2MCmjwVJPl/52ynXG7aywZ3ubfpEB1nomZPDfexp1ZdsrnO4zrlO/lZ5OxTRM+8D3xEKZBlOm52856zpT4y6vLakyG2hv1xoytAVTIhs9DHDYaYO5qqS23F1zxnV2S366EtOUMYL2NakecsitK/j93FnXUZaFo6KwKhsnaKoRXyabglxvFE3g2VWFFQ4W+1HX2XO/F9TlQvR6qaADTKo3ajQKZd320j9O7nRBLWrcleXO2uoSe5XVrDIQbDf7ZjvBUGwHesKgMlur7CXVtc7ySncNPO+unSf/KN1ep1RoNMaOQR9IQhMXUXf+z70XTuw75WLlgOZmuTgdGyoqqqtLSgozM+12exX8gMZ9Y8/MLCwpqa6uqNjgcLKo3exfwZPuOrXvxIW9f56vi4jTdDR4X36zJMjhmynCI/66eP7Qpb+PXT7xz8Gde45DMtDOcIS85nZ7kHrtzBn2CJfr+J6dB/85cfnY35cOnb/4V0Q4PO8aeYJFJOhEE0r1CWXwfTWYIi43Iq/u4unz2w/tv7Tj8L+7dh+7cOHy5SNHzn3ntXNHjly+fOHCsd27/j2849L+Q9vPn75YlxeRG6fA2Fcos+ilQkEXmVAkMVmMRlYRzjBMoYiLCw9PTc3NVfosNzc1NTw8Lk6hwLD6I+VGo8UkEXUZ8iuYCIWiZInEBC2BMyNrZdC4bzw/Y38rkSSL4MGCa3bNrtk1Y+1/kVFqJX5x+88AAAAASUVORK5CYII=", 0);
        return new BitmapDrawable_(BitmapFactory_.decodeByteArray(bytes, 0, bytes.length));
    })();

    /**
     * Creates a squircle drawable.
     * @since 2017-01-25
     * @param {Number} [color] Drawable color
     * @returns {android.graphics.drawable.BitmapDrawable} Squircle drawable
     */
    SquircleDrawable.create = function (color) {
        let drawable = SquircleDrawable.RESOURCE;
        if (color) {
            drawable.getPaint().setColorFilter(new PorterDuffColorFilter_(color, PorterDuff_.Mode.SRC_ATOP));
        }
        return drawable;
    };



    /**
     * Class representing a theme.
     * @since 2016-05-03
     * @class
     * @memberOf me.astro.design
     * @param {Object} theme Library theme
     */
    function Theme({
        primary,
        primaryDark,
        accent,
        textBlack,
        textWhite,
        textGrey,
    }) {
        this._colorPrimary = primary || Color.INDIGO;
        this._colorPrimaryDark = primaryDark || Color.INDIGO_DARK;
        this._colorAccent = accent || Color.PINK_ACCENT;
        this._colorTextBlack = textBlack || Color.BLACK;
        this._colorTextWhite = textWhite || Color.WHITE;
        this._colorTextGrey = textGrey || Color.GREY;
    }

    /**
     * Default theme
     * @type {me.astro.design.Theme}
     */
    Theme.DEFAULT = new Theme({});

    /**
     * Background color
     * @type {Number}
     */
    Theme.BACKGROUND_COLOR = 0;

    /**
     * Effect color
     * @type {Number}
     */
    Theme.EFFECT_COLOR = 1;

    /**
     * Text color
     * @type {Number}
     */
    Theme.TEXT_COLOR = 2;

    /**
     * Hint text color at EditText
     * @type {Number}
     */
    Theme.HINT_TEXT_COLOR = 3;

    /**
     * Returns the theme from the file path.
     * @since 2016-08-27
     * @param {String} path File path
     * @returns {me.astro.design.Theme} Theme
     */
    Theme.parse = function (path) {
        if (new File_(path).exists()) {
            return new Theme(JSON.parse(File.read(path)));
        } else {
            return Theme.DEFAULT;
        }
    };

    /**
     * Returns the theme object.
     * @since 2017-01-23
     * @returns {Object} Theme object
     */
    Theme.prototype.getThemeObject = function () {
        return {
            primary: this._colorPrimary,
            primaryDark: this._colorPrimaryDark,
            accent: this._colorAccent,
            textBlack: this._colorTextBlack,
            textWhite: this._colorTextWhite,
            textGrey: this._colorTextGrey
        };
    };

    /**
     * Returns a color of TextView theme.
     * @since 2016-05-28
     * @param {Number} type Type of color
     * @returns {Number} Color
     */
    Theme.prototype.getTextView = function (type) {
        if (type === Theme.TEXT_COLOR) {
            return this._colorTextBlack;
        }
    };

    /**
     * Returns a color of Button theme.
     * @since 2016-05-28
     * @param {Number} type Type of color
     * @returns {Number} Color
     */
    Theme.prototype.getButton = function (type) {
        switch (type) {
        case Theme.BACKGROUND_COLOR:
            return this._colorPrimary;
        case Theme.EFFECT_COLOR:
            return this._colorPrimaryDark;
        case Theme.TEXT_COLOR:
            return this._colorTextWhite;
        }
    };

    /**
     * Returns a color of Divider theme.
     * @since 2017-01-30
     * @param {Number} type Type of color
     * @returns {Number} Color
     */
    Theme.prototype.getDivider = function (type) {
        if (type === Theme.BACKGROUND_COLOR) {
            return this._colorTextGrey;
        }
    };

    /**
     * Returns a color of EditText theme.
     * @since 2016-05-28
     * @param {Number} type Type of color
     * @returns {Number} Color
     */
    Theme.prototype.getEditText = function (type) {
        switch (type) {
        case Theme.BACKGROUND_COLOR:
            return this._colorAccent;
        case Theme.TEXT_COLOR:
            return this._colorTextBlack;
        case Theme.HINT_TEXT_COLOR:
            return this._colorTextGrey;
        }
    };

    /**
     * Returns a color of FloatingWindow theme.
     * @since 2017-02-21
     * @param {Number} type Type of color
     * @returns {Number} Color
     */
    Theme.prototype.getFloatingWindow = function (type) {
        switch (type) {
        case Theme.BACKGROUND_COLOR:
            return this._colorTextWhite;
        case Theme.EFFECT_COLOR:
            return this._colorTextGrey;
        case Theme.TEXT_COLOR:
            return this._colorTextBlack;
        }
    };

    /**
     * Returns a color of NotificationWindow theme.
     * @since 2017-01-30
     * @param {Number} type Type of color
     * @returns {Number} Color
     */
    Theme.prototype.getNotificationWindow = function (type) {
        switch (type) {
        case Theme.BACKGROUND_COLOR:
            return this._colorTextWhite;
        case Theme.EFFECT_COLOR:
            return this._colorPrimary;
        case Theme.TEXT_COLOR:
            return this._colorTextBlack;
        }
    };

    /**
     * Returns a color of ProgressWindow theme.
     * @since 2016-05-28
     * @param {Number} type Type of color
     * @returns {Number} Color
     */
    Theme.prototype.getProgressWindow = function (type) {
        switch (type) {
        case Theme.BACKGROUND_COLOR:
            return this._colorPrimary;
        case Theme.EFFECT_COLOR:
            return this._colorAccent;
        case Theme.TEXT_COLOR:
            return this._colorTextWhite;
        }
    };

    /**
     * Returns a color of Toast theme.
     * @since 2016-05-28
     * @param {Number} type Type of color
     * @returns {Number} Color
     */
    Theme.prototype.getToast = function (type) {
        switch (type) {
        case Theme.BACKGROUND_COLOR:
            return this._colorPrimary;
        case Theme.TEXT_COLOR:
            return this._colorTextWhite;
        }
    };

    /**
     * Returns a color of ScrollView theme.
     * @since 2017-01-30
     * @param {Number} type Type of color
     * @returns {Number} Color
     */
    Theme.prototype.getScrollView = function (type) {
        if (type === Theme.BACKGROUND_COLOR) {
            return this._colorAccent;
        }
    };

    /**
     * Returns a color of ShowcaseWindow theme.
     * @since 2017-01-30
     * @param {Number} type Type of color
     * @returns {Number} Color
     */
    Theme.prototype.getShowcaseWindow = function (type) {
        if (type === Theme.BACKGROUND_COLOR) {
            return this._colorPrimary;
        }
    };

    /**
     * Returns a color of SplashWindow theme.
     * @since 2017-01-30
     * @param {Number} type Type of color
     * @returns {Number} Color
     */
    Theme.prototype.getSplashWindow = function (type) {
        if (type === Theme.BACKGROUND_COLOR) {
            return this._colorPrimary;
        }
    };

    /**
     * Returns a color of PopupWindow theme.
     * @since 2016-05-28
     * @param {Number} type Type of color
     * @returns {Number} Color
     */
    Theme.prototype.getWindow = function (type) {
        switch (type) {
        case Theme.BACKGROUND_COLOR:
            return this._colorPrimary;
        case Theme.EFFECT_COLOR:
            return this._colorPrimaryDark;
        case Theme.TEXT_COLOR:
            return this._colorTextWhite;
        }
    };



    /**
     * Contains classes for using internet.
     * @memberOf me.astro
     * @namespace internet
     */

    /**
     * Returns HTML of a site.
     * @since 2016-05-03
     * @memberOf me.astro.internet
     * @param {String} url URL
     * @returns {String} HTML
     */
    const readHtml = url => {
        try {
            StrictMode_.setThreadPolicy(new StrictMode_.ThreadPolicy.Builder().permitAll().build());
            let byteArrayOutputStream = new ByteArrayOutputStream_();
            AndroidHttpClient_.newInstance("userAgent").execute(new HttpGet_(url)).getEntity().writeTo(byteArrayOutputStream);
            byteArrayOutputStream.close();
            return String(byteArrayOutputStream.toString());
        } catch (e) {
            Toast.show(e);
        }
        return "";
    };



    /**
     * Returns IP of user.
     * @since 2016-05-03
     * @memberOf me.astro.internet
     * @returns {String} IP
     */
    const getIp = () => readHtml("http://minedev.dothome.co.kr/library/get_ip.php");



    /**
     * Class representing a network checker.
     * @since 2016-05-03
     * @class
     * @memberOf me.astro.internet
     */
    function NetworkChecker() {
        this._connectivityManager = CONTEXT.getSystemService(Context_.CONNECTIVITY_SERVICE);
    }

    /**
     * Wi-fi
     * @type {Number}
     */
    NetworkChecker.WIFI = 0;

    /**
     * LTE, 3G, etc
     * @type {Number}
     */
    NetworkChecker.MOBILE = 1;

    /**
     * Not connected
     * @type {Number}
     */
    NetworkChecker.NOT_CONNECTED = 2;

    /**
     * Returns a status of internet connection.
     * @since 2016-05-03
     * @returns {Number} Status of internet connection.
     */
    NetworkChecker.prototype.getConnectedType = function () {
        let connectivityManager = this._connectivityManager,
            wifi = connectivityManager.getNetworkInfo(ConnectivityManager_.TYPE_WIFI).isConnected(),
            mobile = connectivityManager.getNetworkInfo(ConnectivityManager_.TYPE_MOBILE).isConnected();
        if (wifi) {
            return NetworkChecker.WIFI;
        } else if (mobile) {
            return NetworkChecker.MOBILE;
        } else {
            return NetworkChecker.NOT_CONNECTED;
        }
    };

    /**
     * Checks if a device is connected internet.
     * @since 2016-05-03
     * @returns {Boolean} Status of internet connection.
     */
    NetworkChecker.prototype.isConnected = function () {
        let type = this.getConnectedType();
        return type <= 1;
    };



    /**
     * Class representing a web server.
     * @since 2016-05-03
     * @class
     * @memberOf me.astro.internet
     * @param {String} url URL
     */
    function Server(url) {
        this._url = url;
    }

    /**
     * Sends a data to server by POST.
     * @since 2016-05-28
     * @param {String} value key1=value&key2=value2...
     * @param {Function} [response=function(inputStream){}] Callback to be invoked after the data was sent.
     */
    Server.prototype.post = function (value, response) {
        if (new NetworkChecker().isConnected()) {
            let thiz = this;
            response = response || (() => {});
            new Thread_({
                run() {
                    try {
                        StrictMode_.setThreadPolicy(new StrictMode_.ThreadPolicy.Builder().permitAll().build());
                        let httpUrlConnection = new URL_(thiz._url).openConnection(),
                            outputStream;
                        httpUrlConnection.setDoInput(true);
                        httpUrlConnection.setDoOutput(true);
                        httpUrlConnection.setUseCaches(false);
                        httpUrlConnection.setRequestMethod("POST");
                        httpUrlConnection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
                        outputStream = httpUrlConnection.getOutputStream();
                        outputStream.write(new String_(value).getBytes());
                        outputStream.flush();
                        outputStream.close();
                        response(httpUrlConnection.getInputStream());
                    } catch (e) {
                        Toast.show(e);
                    }
                }
            }).start();
        } else {
            Toast.show("Error: No Internet.");
        }
        return this;
    };

    /**
     * Uploads a file to server.
     * @since 2016-05-03
     * @param {String} path File path
     * @param {Function} [response=function(code){}] Callback to be invoked after the file was uploaded.
     */
    Server.prototype.upload = function (path, response) {
        if (new NetworkChecker().isConnected()) {
            let thiz = this;
            response = response || (() => {});
            new Thread_({
                run() {
                    try {
                        StrictMode_.setThreadPolicy(new StrictMode_.ThreadPolicy.Builder().permitAll().build());
                        let urlConnection = new URL_(thiz._url).openConnection(),
                            fileInputStream = new FileInputStream_(path),
                            dataOutputStream,
                            buffer,
                            bufferSize;
                        urlConnection.setDoInput(true);
                        urlConnection.setDoOutput(true);
                        urlConnection.setUseCaches(false);
                        urlConnection.setRequestMethod("POST");
                        urlConnection.setRequestProperty("Connection", "Keep-Alive");
                        urlConnection.setRequestProperty("ENCTYPE", "multipart/form-data");
                        urlConnection.setRequestProperty("Content-Type", "multipart/form-data;boundary=*****");
                        urlConnection.setRequestProperty("uploaded_file", path);
                        dataOutputStream = new DataOutputStream_(urlConnection.getOutputStream());
                        dataOutputStream.writeBytes("--*****\r\n");
                        dataOutputStream.writeBytes("Content-Disposition: form-data;name=\"uploaded_file\";filename=\"" + path + "\"\r\n");
                        dataOutputStream.writeBytes("\r\n");
                        buffer = Array_.newInstance(Byte_.TYPE, bufferSize = Math.min(fileInputStream.available(), 1048576));
                        fileInputStream.read(buffer, 0, bufferSize);
                        dataOutputStream.write(buffer, 0, bufferSize);
                        dataOutputStream.writeBytes("\r\n");
                        dataOutputStream.writeBytes("--*****--\r\n");
                        if (urlConnection.getResponseCode() === 200) {
                            response("success");
                        } else {
                            response("fail");
                        }
                        fileInputStream.close();
                        dataOutputStream.flush();
                        dataOutputStream.close();
                    } catch (e) {
                        Toast.show(e);
                        response("fail");
                    }
                }
            }).start();
        } else {
            Toast.show("Error: No Internet.");
        }
        return this;
    };



    /**
     * Contains classes about security.
     * @memberOf me.astro
     * @namespace security
     */

    /**
     * Class representing a account.
     * @since 2016-05-29
     * @class
     * @memberOf me.astro.security
     * @param {String} id ID
     * @param {String} password Password
     */
    function Account(id, password) {
        this._email = "";
        this._id = id;
        this._name = "";
        this._password = password;
        this._userCode = null;
        this._friends = [];
        this._isAvailable = false;
    }

    /**
     * Sign up fail
     * @type {Number}
     */
    Account.REGISTER_FAIL = 0;

    /**
     * Sign up success
     * @type {Number}
     */
    Account.REGISTER_SUCCESS = 1;

    /**
     * Sign in fail
     * @type {Number}
     */
    Account.LOGIN_FAIL = 2;

    /**
     * Sign in success
     * @type {Number}
     */
    Account.LOGIN_SUCCESS = 3;

    /**
     * Edit fail
     * @type {Number}
     */
    Account.EDIT_FAIL = 4;

    /**
     * Edit success
     * @type {Number}
     */
    Account.EDIT_SUCCESS = 5;

    /**
     * Gets a data from the server fail
     * @type {Number}
     */
    Account.GET_FAIL = 6;

    /**
     * Gets a data from the server success
     * @type {Number}
     */
    Account.GET_SUCCESS = 7;

    /**
     * Sends a data from the server fail
     * @type {Number}
     */
    Account.SEND_FAIL = 8;

    /**
     * Sends a data from the server success
     * @type {Number}
     */
    Account.SEND_SUCCESS = 9;

    /**
     * Logout
     * @type {Number}
     */
    Account.LOGOUT = 10;

    /**
     * Sign up the server.
     * @since 2016-05-29
     * @param {String} id ID
     * @param {String} password Password
     * @param {String} name User's nickname
     * @param {String} email E-mail
     * @param {Function} [response=function(code){}] Callback to be invoked when you connected the server.
     */
    Account.signUp = function (id, password, name, email, response) {
        response = response || (() => {});
        if (Text.verifyId(id) && Text.verifyPassword(password) && Text.verifyName(name) && Text.verifyEmail(email)) {
            let server = new Server(ACCOUNT_URL);
            server.post("type=sign_up&id=" + id + "&password=" + password + "&email=" + email + "&name=" + name, inputStream => {
                if (inputStream !== null) {
                    let byteArrayOutputStream = new ByteArrayOutputStream_(1024),
                        buffer,
                        str;
                    while ((buffer = inputStream.read()) !== -1) {
                        byteArrayOutputStream.write(buffer);
                    }
                    inputStream.close();
                    byteArrayOutputStream.close();
                    str = new String_(byteArrayOutputStream.toByteArray());
                    if (str.contains("Error")) {
                        Toast.show(str);
                        response(Account.REGISTER_FAIL);
                    } else {
                        Toast.show(str);
                        response(Account.REGISTER_SUCCESS);
                    }
                } else {
                    Toast.show("Error: Cannot connect to the server.");
                    response(Account.REGISTER_FAIL);
                }
            });
        } else {
            Toast.show("Error: Invalid format.");
            response(Account.REGISTER_FAIL);
        }
    };

    /**
     * Adds a friend by Friend's ID.
     * @since 2016-09-15
     * @param {String} id Friend's ID
     * @param {Function} [response=function(code){}] Callback to be invoked when you connected the server
     */
    Account.prototype.addFriend = function (id, response) {
        let friends = this._friends;
        id = id + "";
        if (friends.indexOf(id) < 0) {
            friends.push(id);
            this.modifyData("friends", encodeURIComponent(JSON.stringify(friends)), response);
        }
        return this;
    };

    /**
     * Gets a data from the server.
     * @since 2016-07-04
     * @param {String} key Key of data
     * @param {Function} [response=function(code,str){}] Callback to be invoked when you connected the server.
     */
    Account.prototype.getDataFromServer = function (key, response) {
        response = response || (() => {});
        let server = new Server(ACCOUNT_URL);
        server.post("type=get&user_code=" + this._userCode + "&key=" + key, inputStream => {
            if (inputStream !== null) {
                let byteArrayOutputStream = new ByteArrayOutputStream_(1024),
                    buffer,
                    str;
                while ((buffer = inputStream.read()) !== -1) {
                    byteArrayOutputStream.write(buffer);
                }
                inputStream.close();
                byteArrayOutputStream.close();
                str = new String_(byteArrayOutputStream.toByteArray());
                if (str.contains("Error")) {
                    Toast.show(str);
                    response(Account.GET_FAIL);
                } else {
                    response(Account.GET_SUCCESS, str);
                }
            } else {
                Toast.show("Error: Cannot connect to the server.");
                response(Account.GET_FAIL);
            }
        });
        return this;
    };

    /**
     * Gets friend's data from the server.
     * @since 2017-02-18
     * @param {String} friendId Friend's ID
     * @param {String} key Key of data
     * @param {Function} [response=function(code,str){}] Callback to be invoked when you connected the server.
     */
    Account.prototype.getFriendDataFromServer = function (friendId, key, response) {
        response = response || (() => {});
        let server = new Server(ACCOUNT_URL);
        server.post("type=friend_get&user_code=" + this._userCode + "&friend_id=" + friendId + "&key=" + key, inputStream => {
            if (inputStream !== null) {
                let byteArrayOutputStream = new ByteArrayOutputStream_(1024),
                    buffer,
                    str;
                while ((buffer = inputStream.read()) !== -1) {
                    byteArrayOutputStream.write(buffer);
                }
                inputStream.close();
                byteArrayOutputStream.close();
                str = new String_(byteArrayOutputStream.toByteArray());
                if (str.contains("Error")) {
                    Toast.show(str);
                    response(Account.GET_FAIL);
                } else {
                    response(Account.GET_SUCCESS, str);
                }
            } else {
                Toast.show("Error: Cannot connect to the server.");
                response(Account.GET_FAIL);
            }
        });
        return this;
    };

    /**
     * Gets messages from the server.
     * @since 2017-02-24
     * @param {Function} [response=function(code,arr){}] Callback to be invoked when you connected the server.
     */
    Account.prototype.getMessagesFromServer = function (response) {
        response = response || (() => {});
        let server = new Server(ACCOUNT_URL);
        server.post("type=get&user_code=" + this._userCode + "&key=messages", inputStream => {
            if (inputStream !== null) {
                let byteArrayOutputStream = new ByteArrayOutputStream_(1024),
                    buffer,
                    str;
                while ((buffer = inputStream.read()) !== -1) {
                    byteArrayOutputStream.write(buffer);
                }
                inputStream.close();
                byteArrayOutputStream.close();
                str = new String_(byteArrayOutputStream.toByteArray());
                if (str.contains("Error")) {
                    Toast.show(str);
                    response(Account.GET_FAIL);
                } else {
                    response(Account.GET_SUCCESS, JSON.parse(str));
                }
            } else {
                Toast.show("Error: Cannot connect to the server.");
                response(Account.GET_FAIL);
            }
        });
        return this;
    };

    /**
     * Returns user's E-mail.
     * @since 2016-07-04
     * @returns {String} User's E-mail
     */
    Account.prototype.getEmail = function () {
        return this._email;
    };

    /**
     * Returns user's friends.
     * @since 2016-09-15
     * @returns {String} User's friends
     */
    Account.prototype.getFriends = function () {
        return this._friends;
    };

    /**
     * Returns user's ID.
     * @since 2016-07-04
     * @returns {String} User's ID
     */
    Account.prototype.getId = function () {
        return this._id;
    };

    /**
     * Returns user's nickname.
     * @since 2016-07-04
     * @returns {String} User's nickname.
     */
    Account.prototype.getName = function () {
        return this._name;
    };

    /**
     * Returns user's password.
     * @since 2016-07-04
     * @returns {String} User's password
     */
    Account.prototype.getPassword = function () {
        return this._password;
    };

    /**
     * Returns a rank of users' data which are from the server.
     * @since 2016-08-05
     * @param {String} key Key of data
     * @param {Function} [response=function(code,rank){}] Callback to be invoked when you connected the server.
     * @returns {Array.<String>} Rank of users' data which are from the server.
     */
    Account.prototype.getRank = function (key, response) {
        response = response || (() => {});
        let server = new Server(ACCOUNT_URL);
        server.post("type=sort&key=" + key, inputStream => {
            if (inputStream !== null) {
                let byteArrayOutputStream = new ByteArrayOutputStream_(1024),
                    buffer,
                    str;
                while ((buffer = inputStream.read()) !== -1) {
                    byteArrayOutputStream.write(buffer);
                }
                inputStream.close();
                byteArrayOutputStream.close();
                str = new String_(byteArrayOutputStream.toByteArray());
                if (str.contains("Error")) {
                    Toast.show(str);
                    response(Account.GET_FAIL);
                } else {
                    let arr = String(str).split("###");
                    for (let i = arr.length; i--;) {
                        arr[i] = arr[i].split(":");
                    }
                    response(Account.GET_SUCCESS, arr);
                }
            } else {
                Toast.show("Error: Cannot connect to the server.");
                response(Account.GET_FAIL);
            }
        });
        return this;
    };

    /**
     * Returns user's ID which is used to distinguish users at the server.
     * @since 2016-05-29
     * @returns {String} Returns User's ID.
     */
    Account.prototype.getUserCode = function () {
        return this._userCode;
    };

    /**
     * Checks if user is signed in.
     * @since 2016-05-29
     * @returns {Boolean} If user is signed in, returns true, or not returns false.
     */
    Account.prototype.isAvailable = function () {
        return this._isAvailable;
    };

    /**
     * Checks if user is a right friend.
     * @since 2017-02-18
     * @param {String} friendId Friend's ID
     * @param {Function} [response=function(code,isRightFriends){}] Callback to be invoked when you connected the server.
     */
    Account.prototype.isRightFriend = function (friendId, response) {
        response = response || (() => {});
        let server = new Server(ACCOUNT_URL);
        server.post("type=friend_check&user_code=" + this._userCode + "&friend_id=" + friendId, inputStream => {
            if (inputStream !== null) {
                let byteArrayOutputStream = new ByteArrayOutputStream_(1024),
                    buffer,
                    str;
                while ((buffer = inputStream.read()) !== -1) {
                    byteArrayOutputStream.write(buffer);
                }
                inputStream.close();
                byteArrayOutputStream.close();
                str = new String_(byteArrayOutputStream.toByteArray());
                if (str.contains("Error")) {
                    Toast.show(str);
                    response(Account.GET_FAIL);
                } else {
                    response(Account.GET_SUCCESS, Boolean(str));
                }
            } else {
                Toast.show("Error: Cannot connect to the server.");
                response(Account.GET_FAIL);
            }
        });
        return this;
    };

    /**
     * Sign in the server.
     * @since 2016-05-29
     * @param {Function} [response=function(code){}] Callback to be invoked when you connected the server.
     */
    Account.prototype.login = function (response) {
        response = response || (() => {});
        if (Text.verifyId(this._id) && Text.verifyPassword(this._password)) {
            let thiz = this,
                server = new Server(ACCOUNT_URL);
            server.post("type=login&id=" + thiz._id + "&password=" + thiz._password, inputStream => {
                if (inputStream !== null) {
                    let byteArrayOutputStream = new ByteArrayOutputStream_(1024),
                        buffer,
                        str;
                    while ((buffer = inputStream.read()) !== -1) {
                        byteArrayOutputStream.write(buffer);
                    }
                    inputStream.close();
                    byteArrayOutputStream.close();
                    str = new String_(byteArrayOutputStream.toByteArray());
                    if (str.contains("Error")) {
                        Toast.show(str);
                        response(Account.LOGIN_FAIL);
                    } else {
                        let arr = str.split("#");
                        thiz._userCode = arr[1];
                        thiz.getDataFromServer("name", (code, str) => code === Account.GET_SUCCESS && (thiz._name = str));
                        thiz.getDataFromServer("friends", (code, str) => {
                            if (code === Account.GET_SUCCESS) {
                                str = str + "";
                                if (typeof str === "string") {
                                    thiz._friends = JSON.parse(decodeURIComponent(str));
                                } else {
                                    thiz._friends = [];
                                }
                            }
                        });
                        thiz.getDataFromServer("email", (code, str) => {
                            if (code === Account.GET_SUCCESS) {
                                thiz._email = str;
                                thiz._isAvailable = true;
                                Toast.show(arr[0]);
                                response(Account.LOGIN_SUCCESS);
                            }
                        });
                    }
                } else {
                    Toast.show("Error: Cannot connect to the server.");
                    response(Account.LOGIN_FAIL);
                }
            });
        } else {
            Toast.show("Error: Invalid format.");
            response(Account.LOGIN_FAIL);
        }
        return this;
    };

    /**
     * Logout the server.
     * @since 2016-05-29
     */
    Account.prototype.logout = function () {
        this._userCode = null;
        this._isAvailable = false;
        return this;
    };

    /**
     * Modifies the user's information.
     * @since 2016-07-27
     * @param {String} key Key of data.
     * @param {String} value Value of data.
     * @param {Function} [response=function(code){}] Callback to be invoked when you connected the server.
     */
    Account.prototype.modifyData = function (key, value, response) {
        response = response || (() => {});
        let server = new Server(ACCOUNT_URL);
        server.post("type=set&user_code=" + this._userCode + "&key=" + key + "&value=" + value, inputStream => {
            if (inputStream !== null) {
                let byteArrayOutputStream = new ByteArrayOutputStream_(1024),
                    buffer,
                    str;
                while ((buffer = inputStream.read()) !== -1) {
                    byteArrayOutputStream.write(buffer);
                }
                inputStream.close();
                byteArrayOutputStream.close();
                str = new String_(byteArrayOutputStream.toByteArray());
                if (str.contains("Error")) {
                    Toast.show(str);
                    response(Account.EDIT_FAIL);
                } else {
                    Toast.show(str);
                    response(Account.EDIT_SUCCESS);
                }
            } else {
                Toast.show("Error: Cannot connect to the server.");
                response(Account.EDIT_FAIL);
            }
        });
        return this;
    };

    /**
     * Modifies the user's information.
     * @since 2016-07-05
     * @param {String} [password] User's password
     * @param {String} [name] User's nickname
     * @param {String} [email] User's E-mail
     * @param {Function} [response=function(code){}] Callback to be invoked when you connected the server.
     */
    Account.prototype.modifyUserData = function (password, name, email, response) {
        password = password || this._password;
        name = name || this._name;
        email = email || this._email;
        response = response || (() => {});
        if (Text.verifyPassword(password) && Text.verifyName(name) && Text.verifyEmail(email)) {
            let thiz = this,
                server = new Server(ACCOUNT_URL);
            server.post("type=set&user_code=" + this._userCode + "&key=password|name|email&value=" + [password, name, email].join("|"), inputStream => {
                if (inputStream !== null) {
                    let byteArrayOutputStream = new ByteArrayOutputStream_(1024),
                        buffer,
                        str;
                    while ((buffer = inputStream.read()) !== -1) {
                        byteArrayOutputStream.write(buffer);
                    }
                    inputStream.close();
                    byteArrayOutputStream.close();
                    str = new String_(byteArrayOutputStream.toByteArray());
                    if (str.contains("Error")) {
                        response(Account.EDIT_FAIL);
                    } else {
                        thiz._password = password;
                        thiz._name = name;
                        thiz._email = email;
                        response(Account.EDIT_SUCCESS);
                    }
                    Toast.show((str + "").replace(/(.+)\1+/g, "$1"));
                } else {
                    Toast.show("Error: Cannot connect to the server.");
                    response(Account.EDIT_FAIL);
                }
            });
        } else {
            Toast.show("Error: Invalid format.");
            response(Account.EDIT_FAIL);
        }
        return this;
    };

    /**
     * Removes a friend by Friend's ID.
     * @since 2016-09-15
     * @param {String} id Friend's ID
     * @param {Function} [response=function(code){}] Callback to be invoked when you connected the server
     */
    Account.prototype.removeFriend = function (id, response) {
        let friends = this._friends,
            index = friends.indexOf(id + "");
        if (index >= 0) {
            friends.splice(index, 1);
            this.modifyData("friends", encodeURIComponent(JSON.stringify(friends)), response);
        }
        return this;
    };



    /**
     * Sends the message to the friend.
     * @since 2017-02-24
     * @param {String} friendId Friend's ID
     * @param {String} message Message text
     * @param {Function} [response=function(code){}] Callback to be invoked when you connected the server.
     */
    Account.prototype.sendMessage = function (friendId, message, response) {
        response = response || (() => {});
        let server = new Server(ACCOUNT_URL);
        server.post("type=send_message&user_code=" + this._userCode + "&friend_id=" + friendId + "&value=" + message, inputStream => {
            if (inputStream !== null) {
                let byteArrayOutputStream = new ByteArrayOutputStream_(1024),
                    buffer,
                    str;
                while ((buffer = inputStream.read()) !== -1) {
                    byteArrayOutputStream.write(buffer);
                }
                inputStream.close();
                byteArrayOutputStream.close();
                str = new String_(byteArrayOutputStream.toByteArray());
                if (str.contains("Error")) {
                    Toast.show(str);
                    response(Account.SEND_FAIL);
                } else {
                    Toast.show(str);
                    response(Account.SEND_SUCCESS);
                }
            } else {
                Toast.show("Error: Cannot connect to the server.");
                response(Account.SEND_FAIL);
            }
        });
        return this;
    };



    /**
     * Class representing a user connection.
     * @since 2017-02-18
     * @class
     * @memberOf me.astro.security
     * @param {me.astro.security.Account} account Account instance
     */
    function UserConnection(account) {
        this._account = account;
        this._isRunning = false;
        this._response = (() => {});
        this._cache = {};
    }

    /**
     * Returns whether the user connecting socket is currently running.
     * @since 2017-02-18
     * @returns {Boolean} Whether the user connecting socket is running
     */
    UserConnection.prototype.isRunning = function () {
        return this._isRunning;
    };

    /**
     * Sets the socket receiver function.
     * @since 2017-02-18
     * @param {Function} func Socket receiver function
     */
    UserConnection.prototype.setReceiver = function (func) {
        this._response = func;
        return this;
    };

    /**
     * Sends the message to the friend.
     * @since 2017-02-18
     * @param {String} friendId Friend's ID
     * @param {String} str Message text
     */
    UserConnection.prototype.send = function (friendId, str) {
        let cache = this._cache;
        const callback = ip => {
            new Thread_({
                run() {
                    try {
                        let buffer = new String_(str).getBytes(),
                            socket = new DatagramSocket_();
                        socket.send(new DatagramPacket_(buffer, buffer.length, InetSocketAddress_.getByName(ip), 19000));
                        socket.close();
                    } catch (e) {
                        print(e);
                    }
                }
            }).start();
        };
        if (friendId in cache) {
            callback(cache[friendId]);
        } else {
            this._account.getFriendDataFromServer(friendId, "ip", (code, str) => {
                if (code === Account.GET_SUCCESS) {
                    callback(str);
                }
            });
        }
        return this;
    };

    /**
     * Starts the socket receiver.
     * @since 2017-02-18
     */
    UserConnection.prototype.start = function () {
        let thiz = this;
        thiz._isRunning = true;
        new Thread_({
            run() {
                try {
                    let cache = thiz._cache,
                        buffer = Array_.newInstance(Byte_.TYPE, 128),
                        socket = new DatagramSocket_(19000),
                        packet = new DatagramPacket_(buffer, buffer.length);
                    while (thiz._isRunning) {
                        Thread_.sleep(1000);
                        socket.receive(packet);
                        let str = new String_(packet.getData(), 0, packet.getLength());
                        print(str);
                        let ip = packet.getAddress().toString(),
                            isUnknown = false;
                        for (let id in cache) {
                            if (cache[id] === ip) {
                                thiz._response(id, str);
                                isUnknown = false;
                                break;
                            }
                        }
                        if (isUnknown) {
                            thiz._response("Unknown(" + ip + ")", str);
                        }
                    }
                    socket.close();
                } catch (e) {
                    print(e);
                }
            }
        }).start();
        return this;
    };

    /**
     * Stops the socket receiver.
     * @since 2017-02-18
     */
    UserConnection.prototype.stop = function () {
        this._isRunning = false;
        return this;
    };



    /**
     * Contains classes about utils.
     * @memberOf me.astro
     * @namespace utils
     */

    /**
     * Class representing a addon manager.
     * @since 2016-07-28
     * @class
     * @memberOf me.astro.utils
     * @param {String} packageName Package name of application
     */
    function AddonManager(packageName) {
        this._manager = net.zhuoweizhang.mcpelauncher.AddonManager(CONTEXT);
        this._packageName = packageName;
    }

    /**
     * Download and install
     * @type {Number}
     */
    AddonManager.DOWNLOAD_INSTALL = 0;

    /**
     * Download only
     * @type {Number}
     */
    AddonManager.DOWNLOAD_ONLY = 1;

    /**
     * Downloads an addon from URL.
     * @since 2016-07-28
     * @param {String} path File path where to save downloaded addon.
     * @param {String} url URL
     * @param {Number} [downloadType=me.astro.utils.AddonManager.DOWNLOAD_INSTALL] Download type
     */
    AddonManager.prototype.download = function (path, url, downloadType) {
        let thiz = this,
            file = new File_(path.toString());
        if (file.exists()) {
            file.delete();
        }
        if (typeof downloadType === "undefined" || downloadType === AddonManager.DOWNLOAD_INSTALL) {
            File.download(path, url, () => {
                if (file.exists()) {
                    thiz.install(path);
                }
            });
        } else {
            File.download(path, url);
        }
        return this;
    };

    /**
     * Returns version of addon.
     * @since 2016-07-28
     * @returns {String} Version of addon
     */
    AddonManager.prototype.getVersion = function () {
        return CONTEXT.getPackageManager().getPackageInfo(this._packageName, PackageManager_.GET_INSTRUMENTATION).versionName;
    };

    /**
     * Installs the addon on your device.
     * @since 2016-07-28
     * @param {String} path File path
     */
    AddonManager.prototype.install = function (path) {
        let intent = new Intent_(Intent_.ACTION_VIEW);
        intent.setDataAndType(new Uri_.parse("file://" + path.toString()), "application/vnd.android.package-archive");
        CONTEXT.startActivity(intent);
        return this;
    };

    /**
     * Check if the addon is enabled.
     * @since 2016-07-28
     * @returns {Boolean} If the addon is enabled, returns true, or not returns false.
     */
    AddonManager.prototype.isEnabled = function () {
        return this._manager.isEnabled(this._packageName);
    };

    /**
     * Check if the addon is installed.
     * @since 2016-07-28
     * @returns {Boolean} If the addon is installed, returns true, or not returns false.
     */
    AddonManager.prototype.isInstalled = function () {
        return CONTEXT.getPackageManager().getLaunchIntentForPackage(this._packageName) !== null;
    };

    /**
     * Sets the addon disabled.
     * @since 2016-07-28
     */
    AddonManager.prototype.setDisable = function () {
        this._manager.setEnabled(this._packageName, false);
        return this;
    };

    /**
     * Sets the addon enabled.
     * @since 2016-07-28
     */
    AddonManager.prototype.setEnabled = function () {
        this._manager.setEnabled(this._packageName, true);
        return this;
    };



    /**
     * Class representing a file.
     * @since 2016-07-08
     * @class
     * @memberOf me.astro.utils
     */
    function File() {}

    /**
     * Downloads a file.
     * @since 2016-07-08
     * @param {String} path File path
     * @param {String} url URL
     * @param {Function} [response] Callback to be invoked when finished downloading the file.
     */
    File.download = function (path, url, response) {
        try {
            let file = new File_(path),
                filename = file.getName(),
                downloadManager = CONTEXT.getSystemService(Context_.DOWNLOAD_SERVICE),
                request = new DownloadManager_.Request(new Uri_.parse(url));
            request.setTitle(filename);
            request.setNotificationVisibility(0);
            request.setDestinationInExternalPublicDir(file.getParent().replace(Environment_.getExternalStorageDirectory().getAbsolutePath(), ""), filename);
            let id = downloadManager.enqueue(request);
            if (typeof response === "function") {
                let query = new DownloadManager_.Query(),
                    cursor = downloadManager.query(query),
                    idIndex = cursor.getColumnIndex(DownloadManager_.COLUMN_ID),
                    statusIndex = cursor.getColumnIndex(DownloadManager_.COLUMN_STATUS);
                new Thread_({
                    run() {
                        while (true) {
                            Thread_.sleep(1000);
                            cursor = downloadManager.query(query);
                            for (let i = 0; i < cursor.getCount(); i++) {
                                cursor.moveToPosition(i);
                                if (cursor.getLong(idIndex) === id) {
                                    break;
                                }
                            }
                            if (cursor.getInt(statusIndex) === DownloadManager_.STATUS_SUCCESSFUL || cursor.getInt(statusIndex) === DownloadManager_.STATUS_FAILED) {
                                break;
                            }
                        }
                        response(cursor.getInt(statusIndex));
                        cursor.close();
                    }
                }).start();
            }
        } catch (e) {
            Toast.show(e);
        }
    };

    /**
     * Prevents media scanning on the directory.
     * @since 2016-12-14
     * @param {String} path Directory path
     */
    File.preventMediaScanning = function (path) {
        new File_(path + (path.endsWith("/") ? ".nomedia" : "/.nomedia")).createNewFile();
    };

    /**
     * Reads a file and returns the contents of the file.
     * @since 2016-08-20
     * @param {String} path File path
     * @returns {String} Contents of the file
     */
    File.read = function (path) {
        let file = new File_(path);
        if (file.exists()) {
            let fileInputStream = new FileInputStream_(path),
                inputStreamReader = new InputStreamReader_(fileInputStream),
                bufferedReader = new BufferedReader_(inputStreamReader),
                arr = [],
                line;
            while ((line = bufferedReader.readLine()) !== null) {
                arr.push(line);
            }
            bufferedReader.close();
            inputStreamReader.close();
            fileInputStream.close();
            return arr.join("\n");
        } else {
            return "";
        }
    };

    /**
     * Unzips a file.
     * @since 2016-11-10
     * @param {String} path File path
     */
    File.unzip = function (path) {
        let file = new File_(path),
            zipInputStream = new ZipInputStream_(new FileInputStream_(file)),
            parentPath = file.getParent(),
            entry;
        while ((entry = zipInputStream.getNextEntry()) !== null) {
            let fileOutputStream = new FileOutputStream_(parentPath + entry.getName()),
                buffer = new ByteBuffer_.allocate(1024).array(),
                len;
            while ((len = zipInputStream.read(buffer)) !== -1) {
                fileOutputStream.write(buffer, 0, len);
            }
            zipInputStream.closeEntry();
            fileOutputStream.close();
        }
        zipInputStream.close();
    };

    /**
     * Writes a file.
     * @since 2016-08-20
     * @param {String} path File path
     * @param {String} str Contents to write
     */
    File.write = function (path, str) {
        let file = new File_(path),
            fileOutputStream = new FileOutputStream_(path);
        file.getParentFile().mkdirs();
        fileOutputStream.write(new String_(str).getBytes());
        fileOutputStream.close();
    };



    /**
     * Class representing a preference.
     * @since 2016-08-26
     * @class
     * @memberOf me.astro.utils
     * @param {String} path Path of preference file
     */
    function Preference(path) {
        this._path = path;
        this._file = new File_(path);
        if (this._file.exists()) {
            this._obj = JSON.parse(File.read(path));
        } else {
            this._obj = {};
        }
    }

    /**
     * Returns the value at key.
     * @since 2016-08-26
     * @param {String} key Key
     * @returns {Object} Value
     */
    Preference.prototype.get = function (key) {
        return this._obj[key];
    };

    /**
     * Returns true if this object has the value named the key. 
     * @since 2016-08-26
     * @param {String} key Key
     * @returns {Boolean} If this object has the value named the key
     */
    Preference.prototype.has = function (key) {
        return key in this._obj;
    };

    /**
     * Save the preference.
     * @since 2016-08-26
     */
    Preference.prototype.save = function () {
        File.write(this._path, JSON.stringify(this._obj));
        return this;
    };

    /**
     * Sets the value at key.
     * @since 2016-08-26
     * @param {String} key Key
     * @param {Object} value Value
     */
    Preference.prototype.set = function (key, value) {
        this._obj[key] = value;
        return this;
    };

    /**
     * Encodes and returns the preference as a human readable JSON string.
     * @since 2016-08-26
     * @returns {String} JSON string
     */
    Preference.prototype.toString = function () {
        return JSON.stringify(this._obj);
    };



    /**
     * Class representing a text.
     * @since 2016-07-03
     * @class
     * @memberOf me.astro.utils
     */
    function Text() {}

    /**
     * Verifies validation of E-mail.
     * @since 2016-07-05
     * @param {String} str E-mail
     * @returns {Boolean} Validation
     */
    Text.verifyEmail = function (str) {
        return new RegExp(Patterns_.EMAIL_ADDRESS.toString()).test(str);
    };

    /**
     * Verifies validation of ID.
     * @since 2016-07-05
     * @param {String} str ID
     * @returns {Boolean} Validation
     */
    Text.verifyId = function (str) {
        return /^\w{4,12}$/i.test(str);
    };

    /**
     * Verifies validation of name.
     * @since 2016-07-05
     * @param {String} str Name
     * @returns {Boolean} Validation
     */
    Text.verifyName = function (str) {
        return /^\w{1,20}$/i.test(str);
    };

    /**
     * Verifies validation of number.
     * @since 2016-07-05
     * @param {String} str Number
     * @returns {Boolean} Validation
     */
    Text.verifyNumber = function (str) {
        return /^\d+$/.test(str);
    };

    /**
     * Verifies validation of password.
     * @since 2016-07-05
     * @param {String} str Password
     * @returns {Boolean} Validation
     */
    Text.verifyPassword = function (str) {
        return /^\w{4,12}$/i.test(str);
    };



    /**
     * Contains classes for views and widgets.
     * @memberOf me.astro
     * @namespace widget
     */

    /**
     * Class representing a view.
     * @since 2016-05-03
     * @class
     * @memberOf me.astro.widget
     */
    function View() {}

    /**
     * Returns the theme of the view.
     * @since 2016-05-03
     * @returns {me.astro.design.Theme} Theme of the view
     */
    View.prototype.getTheme = function () {
        return this._theme;
    };

    /**
     * Returns the view.
     * @since 2016-05-03
     * @returns {android.view.View} View
     */
    View.prototype.getView = function () {
        return this._view;
    };

    /**
     * Sets a gravity for the view.
     * @since 2016-05-03
     * @abstract
     * @param {Number} gravity Gravity for the view
     */
    View.prototype.setGravity = function () {};

    /**
     * Sets the theme of the view.
     * @since 2016-05-03
     * @param {me.astro.design.Theme} theme Theme of the view
     */
    View.prototype.setTheme = function (theme) {
        this._theme = theme;
        return this;
    };

    /**
     * Returns the view.
     * @since 2016-05-03
     * @returns {android.view.View} View
     */
    View.prototype.show = function () {
        return this._view;
    };



    /**
     * Class representing view utils.
     * @since 2017-01-23
     * @class
     * @memberOf me.astro.widget
     */
    function ViewUtils() {}

    /**
     * Returns the theme from the view.
     * @since 2016-01-23
     * @param {android.view.View} view View
     * @returns {?me.astro.design.Theme} Theme of the view
     */
    ViewUtils.getTheme = function (view) {
        if ("getTag" in view) {
            let tag = view.getTag();
            if (tag.contains("theme:")) {
                return new Theme(JSON.parse(tag.replace("theme:", "").toString()));
            }
        }
        return null;
    };

    /**
     * Sets the theme at the view.
     * @since 2016-01-23
     * @param {android.view.View} view View
     * @param {me.astro.design.Theme} theme Theme to be set at the view
     */
    ViewUtils.setTheme = function (view, theme) {
        if ("setTag" in view && theme instanceof Theme) {
            view.setTag("theme:" + JSON.stringify(theme.getThemeObject()));
        }
    };



    /**
     * Class representing a text view.
     * @since 2016-05-03
     * @class
     * @extends me.astro.widget.View
     * @memberOf me.astro.widget
     * @param {me.astro.design.Theme} [theme=me.astro.design.Theme.DEFAULT] Theme of text view
     */
    function TextView(theme) {
        theme = theme || Theme.DEFAULT;
        let params = this._params = new LinearLayout_.LayoutParams(-1, -2),
            view = this._view = new TextView_(CONTEXT);
        this._theme = theme;
        params.setMargins(DP * 8, DP * 8, DP * 8, DP * 8);
        view.setLayoutParams(params);
        view.setText("TextView");
        view.setTextColor(theme.getTextView(Theme.TEXT_COLOR));
        view.setTextSize(1, 16);
    }

    TextView.prototype = Object.create(View.prototype);
    TextView.constructor = TextView;

    /**
     * Returns the displayed text.
     * @since 2016-05-03
     * @returns {String} Displayed text
     */
    TextView.prototype.getText = function () {
        return this._view.getText().toString();
    };

    /**
     * Returns the color of displayed text.
     * @since 2016-05-03
     * @returns {Number} Color of displayed text
     */
    TextView.prototype.getTextColor = function () {
        return this._view.getTextColor();
    };

    /**
     * Returns the size of displayed text.
     * @since 2016-05-03
     * @returns {Number} Size of displayed text
     */
    TextView.prototype.getTextSize = function () {
        return this._view.getTextSize();
    };

    /**
     * Returns the width and height of the view.
     * @since 2016-05-03
     * @returns {Array.<Number>} Width and height of view
     */
    TextView.prototype.getWH = function () {
        let params = this._params;
        return [params.width, params.height];
    };

    TextView.prototype.setGravity = function (gravity) {
        this._view.setGravity(gravity);
        return this;
    };

    /**
     * Sets the padding of the view.
     * @since 2016-05-03
     * @param {Number} left Left padding
     * @param {Number} top Top padding
     * @param {Number} right Right padding
     * @param {Number} bottom Bottom padding
     */
    TextView.prototype.setPadding = function (left, top, right, bottom) {
        this._params.setMargins(left, top, right, bottom);
        return this;
    };

    /**
     * Sets a displayed text.
     * @since 2016-05-03
     * @param {String} text Displayed text
     */
    TextView.prototype.setText = function (text) {
        this._view.setText(text.toString());
        return this;
    };

    /**
     * Sets the color of displayed text.
     * @since 2016-05-03
     * @param {Number} textColor Color of displayed text
     */
    TextView.prototype.setTextColor = function (textColor) {
        this._view.setTextColor(textColor);
        return this;
    };

    /**
     * Sets the size of displayed text.
     * @since 2016-05-03
     * @param {Number} textSize Size of displayed text
     */
    TextView.prototype.setTextSize = function (textSize) {
        this._view.setTextSize(1, textSize);
        return this;
    };

    /**
     * Sets the width and height of the view.
     * @since 2016-05-03
     * @param {Number} width Width of the view
     * @param {Number} height Height of the view
     */
    TextView.prototype.setWH = function (width, height) {
        let params = this._params;
        params.width = width;
        params.height = height;
        return this;
    };

    TextView.prototype.show = function () {
        ViewUtils.setTheme(this._view, this._theme);
        return this._view;
    };



    /**
     * Class representing a button.
     * @since 2016-05-03
     * @class
     * @extends me.astro.widget.TextView
     * @memberOf me.astro.widget
     * @param {me.astro.design.Theme} [theme=me.astro.design.Theme.DEFAULT] Theme of button
     */
    function Button(theme) {
        theme = theme || Theme.DEFAULT;
        let thiz = this,
            params = this._params = new LinearLayout_.LayoutParams(DP * 88, DP * 36),
            view = this._view = new TextView_(CONTEXT),
            unpressedDrawable = this._unpressedDrawable = new ColorDrawable_(theme.getButton(Theme.BACKGROUND_COLOR));
        this._theme = theme;
        this._pressedDrawable = new ColorDrawable_(theme.getButton(Theme.EFFECT_COLOR));
        this._func = () => {};
        params.setMargins(DP * 8, DP * 6, DP * 8, DP * 6);
        view.setBackgroundDrawable(unpressedDrawable);
        view.setGravity(Gravity_.CENTER);
        view.setLayoutParams(params);
        view.setOnTouchListener(new View_.OnTouchListener({
            onTouch(v, event) {
                let width = v.getWidth(),
                    height = v.getHeight(),
                    x = event.getX(),
                    y = event.getY();
                switch (event.getAction()) {
                case MotionEvent_.ACTION_DOWN:
                    v.setBackgroundDrawable(thiz._pressedDrawable);
                    break;
                case MotionEvent_.ACTION_MOVE:
                    if (x >= 0 && x <= width && y >= 0 && y <= height) {
                        v.setBackgroundDrawable(thiz._pressedDrawable);
                    } else {
                        v.setBackgroundDrawable(thiz._unpressedDrawable);
                    }
                    break;
                case MotionEvent_.ACTION_UP:
                    if (x >= 0 && x <= width && y >= 0 && y <= height) {
                        v.setBackgroundDrawable(thiz._unpressedDrawable);
                        thiz._func(v);
                    }
                    break;
                case MotionEvent_.ACTION_CANCEL:
                    if (x >= 0 && x <= width && y >= 0 && y <= height) {
                        v.setBackgroundDrawable(thiz._unpressedDrawable);
                    }
                }
                return true;
            }
        }));
        view.setText("Button");
        view.setTextColor(theme.getButton(Theme.TEXT_COLOR));
        view.setTextSize(1, 16);
    }
    Button.prototype = Object.create(TextView.prototype);
    Button.prototype.constructor = Button;

    /**
     * Returns the effect function.
     * @since 2016-05-03
     * @returns {Function} Effect function
     */
    Button.prototype.getEffect = function () {
        return this._func;
    };

    /**
     * Sets the color of the button.
     * @since 2016-05-03
     * @param {Number} color Color of the button
     */
    Button.prototype.setColor = function (color) {
        this._view.setBackgroundDrawable(this._unpressedDrawable = new ColorDrawable_(color));
        return this;
    };

    /**
     * Sets the effect function.
     * @since 2016-05-03
     * @param {Function} func Effect function
     */
    Button.prototype.setEffect = function (func) {
        if (typeof func === "function") {
            this._func = func;
        } else {
            this._func = () => {};
        }
        return this;
    };

    /**
     * Sets the color of the clicked button.
     * @since 2016-05-03
     * @param {Number} color Color of the clicked button
     */
    Button.prototype.setEffectColor = function (color) {
        this._pressedDrawable = new ColorDrawable_(color);
        return this;
    };



    /**
     * Class representing a color picker.
     * @since 2017-01-26
     * @class
     * @memberOf me.astro.widget
     * @param {Number} [r=255] Red
     * @param {Number} [g=0] Blue
     * @param {Number} [b=0] Green
     * @param {Function} [func=function(){}] Callback to be invoked when color was changed
     */
    function ColorPicker(r, g, b, func) {
        r = r || 255;
        g = g || 0;
        b = b || 0;
        func = func || (() => {});
        let controller = this._controller = new TextView_(CONTEXT),
            picker = this._picker = new TextView_(CONTEXT),
            paint = new Paint_(),
            bitmapC = Bitmap_.createBitmap(40, 240, Bitmap_.Config.ARGB_8888),
            bitmapP = Bitmap_.createBitmap(240, 240, Bitmap_.Config.ARGB_8888),
            canvasC = new Canvas_(bitmapC),
            canvasP = new Canvas_(bitmapP),
            pickerX = 120,
            pickerY = 1;

        paint.setShader(new LinearGradient_(0, 0, 0, 40, Color_.rgb(255, 0, 0), Color_.rgb(255, 255, 0), Shader_.TileMode.CLAMP));
        canvasC.drawRect(0, 0, 40, 40, paint);
        paint.setShader(new LinearGradient_(0, 40, 0, 80, Color_.rgb(255, 255, 0), Color_.rgb(0, 255, 0), Shader_.TileMode.CLAMP));
        canvasC.drawRect(0, 40, 40, 80, paint);
        paint.setShader(new LinearGradient_(0, 80, 0, 120, Color_.rgb(0, 255, 0), Color_.rgb(0, 255, 255), Shader_.TileMode.CLAMP));
        canvasC.drawRect(0, 80, 40, 120, paint);
        paint.setShader(new LinearGradient_(0, 120, 0, 160, Color_.rgb(0, 255, 255), Color_.rgb(0, 0, 255), Shader_.TileMode.CLAMP));
        canvasC.drawRect(0, 120, 40, 160, paint);
        paint.setShader(new LinearGradient_(0, 160, 0, 200, Color_.rgb(0, 0, 255), Color_.rgb(255, 0, 255), Shader_.TileMode.CLAMP));
        canvasC.drawRect(0, 160, 40, 200, paint);
        paint.setShader(new LinearGradient_(0, 200, 0, 240, Color_.rgb(255, 0, 255), Color_.rgb(255, 0, 0), Shader_.TileMode.CLAMP));
        canvasC.drawRect(0, 200, 40, 240, paint);
        paint.setShader(new LinearGradient_(240, 0, 0, 0, Color_.rgb(r, g, b), Color_.WHITE, Shader_.TileMode.CLAMP));
        canvasP.drawRect(0, 0, 240, 240, paint);
        paint.setShader(new LinearGradient_(0, 0, 0, 240, Color_.TRANSPARENT, Color_.BLACK, Shader_.TileMode.CLAMP));
        canvasP.drawRect(0, 0, 240, 240, paint);

        controller.setBackgroundDrawable(new BitmapDrawable_(bitmapC));
        controller.setOnTouchListener(new View_.OnTouchListener({
            onTouch(view, event) {
                let action = event.getAction();
                if (action === MotionEvent_.ACTION_DOWN || action === MotionEvent_.ACTION_MOVE || action === MotionEvent_.ACTION_UP) {
                    let x = Math.floor(event.getX() / DP),
                        y = Math.floor(event.getY() / DP);
                    if (x > 0 && x < 40 && y > 0 && y < 240) {
                        paint.setShader(new LinearGradient_(240, 0, 0, 0, bitmapC.getPixel(0, y), Color_.WHITE, Shader_.TileMode.CLAMP));
                        canvasP.drawRect(0, 0, 240, 240, paint);
                        paint.setShader(new LinearGradient_(0, 0, 0, 240, Color_.TRANSPARENT, Color_.BLACK, Shader_.TileMode.CLAMP));
                        canvasP.drawRect(0, 0, 240, 240, paint);
                        picker.setBackgroundDrawable(new BitmapDrawable_(bitmapP));
                        func(bitmapP.getPixel(pickerX, pickerY));
                    }
                }
                return true;
            }
        }));

        picker.setBackgroundDrawable(new BitmapDrawable_(bitmapP));
        picker.setOnTouchListener(new View_.OnTouchListener({
            onTouch(view, event) {
                let action = event.getAction();
                if (action === MotionEvent_.ACTION_DOWN || action === MotionEvent_.ACTION_MOVE || action === MotionEvent_.ACTION_UP) {
                    let x = Math.floor(event.getX() / DP),
                        y = Math.floor(event.getY() / DP);
                    if (x > 0 && x < 240 && y > 0 && y < 240) {
                        pickerX = x;
                        pickerY = y;
                        func(bitmapP.getPixel(x, y));
                    }
                }
                return true;
            }
        }));
    }

    /**
     * Returns the widget of color picker.
     * @since 2017-01-26
     * @returns {android.widget.LinearLayout} the widget of color picker
     */
    ColorPicker.prototype.show = function () {
        let layout = new LinearLayout_(CONTEXT);
        layout.addView(this._picker, DP * 240, DP * 240);
        layout.addView(this._controller, DP * 40, DP * 240);
        return layout;
    };



    /**
     * Class representing a divider.
     * @since 2017-01-27
     * @class
     * @extends me.astro.widget.TextView
     * @memberOf me.astro.widget
     * @param {me.astro.design.Theme} [theme=me.astro.design.Theme.DEFAULT] Theme of divider
     */
    function Divider(theme) {
        theme = theme || Theme.DEFAULT;
        let params = this._params = new LinearLayout_.LayoutParams(-1, DP * 1),
            view = this._view = new TextView_(CONTEXT);
        this._theme = theme;
        params.setMargins(DP * 8, DP * 8, DP * 8, DP * 7);
        view.setBackgroundDrawable(new ColorDrawable_(theme.getDivider(Theme.BACKGROUND_COLOR)));
        view.setLayoutParams(params);
    }

    Divider.prototype = Object.create(TextView.prototype);
    Divider.prototype.constructor = Divider;



    /**
     * Class representing a edit text.
     * @since 2016-05-27
     * @class
     * @extends me.astro.widget.TextView
     * @memberOf me.astro.widget
     * @param {me.astro.design.Theme} [theme=me.astro.design.Theme.DEFAULT] Theme of edit text
     */
    function EditText(theme) {
        theme = theme || Theme.DEFAULT;
        let thiz = this,
            shapeDrawable = new ShapeDrawable_(),
            paint = shapeDrawable.getPaint();
        paint.setColor(-1);
        paint.setStyle(Paint_.Style.STROKE);
        paint.setColor(theme.getEditText(Theme.BACKGROUND_COLOR));
        paint.setStrokeWidth(DP * 3);
        thiz._theme = theme;
        thiz._params = new LinearLayout_.LayoutParams(-1, DP * 40);
        thiz._view = new EditText_(CONTEXT);
        thiz._params.setMargins(DP * 8, DP * 4, DP * 8, DP * 4);
        thiz._view.setBackgroundDrawable(shapeDrawable);
        thiz._view.setHint("EditText");
        thiz._view.setHintTextColor(theme.getEditText(Theme.HINT_TEXT_COLOR));
        thiz._view.setImeOptions(6);
        thiz._view.setLayoutParams(thiz._params);
        thiz._view.setPadding(DP * 8, DP * 8, DP * 8, DP * 8);
        thiz._view.setTextColor(theme.getEditText(Theme.TEXT_COLOR));
        thiz._view.setTextSize(1, 16);
    }

    EditText.prototype = Object.create(TextView.prototype);
    EditText.prototype.constructor = EditText;

    /**
     * Returns the hint text of the edit text.
     * @since 2016-05-27
     * @returns {String} Hint Hint text of the edit text
     */
    EditText.prototype.getHint = function () {
        return this._view.getHint().toString();
    };

    /**
     * Sets the color of the edit text.
     * @since 2016-05-27
     * @param {Number} color Color of the edit text
     */
    EditText.prototype.setColor = function (color) {
        let shapeDrawable = new ShapeDrawable_(),
            paint = shapeDrawable.getPaint();
        paint.setColor(-1);
        paint.setStyle(Paint_.Style.STROKE);
        paint.setColor(color);
        paint.setStrokeWidth(DP * 3);
        this._view.setBackgroundDrawable(shapeDrawable);
        return this;
    };

    /**
     * Sets the hint text of the edit text.
     * @since 2016-05-27
     * @param {String} Hint Hint text of the edit text
     */
    EditText.prototype.setHint = function (text) {
        this._view.setHint(text);
        return this;
    };

    /**
     * Sets the color of the hint text.
     * @since 2016-05-27
     * @param {Number} color Hint Color of the hint text
     */
    EditText.prototype.setHintColor = function (color) {
        this._view.setHintTextColor(color);
        return this;
    };



    /**
     * Class representing a grid layout.
     * @since 2016-09-09
     * @class
     * @memberOf me.astro.widget
     */
    function GridLayout() {
        this._layout = new LinearLayout_(CONTEXT);
        this._views = [];
        this._row = 5;
        this._column = -1;
        this._width = DP * 60;
        this._height = DP * 60;
        this._layout.setOrientation(1);
    }

    /**
     * Adds a view on the layout.
     * @since 2016-09-09
     * @param {android.view.View} view View
     */
    GridLayout.prototype.addView = function (view) {
        this._views.push(view);
        return this;
    };

    /**
     * Returns the column of the layout.
     * @since 2016-09-09
     * @returns {Number} Column of the layout
     */
    GridLayout.prototype.getColumn = function () {
        return this._column;
    };

    /**
     * Returns the height of the layout.
     * @since 2016-09-09
     * @returns {Number} Height of the layout
     */
    GridLayout.prototype.getHeight = function () {
        return this._height;
    };

    /**
     * Returns the layout.
     * @since 2016-09-09
     * @returns {android.widget.LinearLayout} Layout
     */
    GridLayout.prototype.getLayout = function () {
        return this._layout;
    };

    /**
     * Returns the row of the layout.
     * @since 2016-09-09
     * @returns {Number} Row of the layout
     */
    GridLayout.prototype.getRow = function () {
        return this._row;
    };

    /**
     * Returns the width of the layout.
     * @since 2016-09-09
     * @returns {Number} Width of the layout
     */
    GridLayout.prototype.getWidth = function () {
        return this._width;
    };

    /**
     * Sets the column of the layout.
     * @since 2016-09-09
     * @param {Number} column Column of the layout
     */
    GridLayout.prototype.setColumn = function (column) {
        this._column = column;
        return this;
    };

    /**
     * Sets the height of the layout.
     * @since 2016-09-09
     * @param {Number} height Height of the layout
     */
    GridLayout.prototype.setHeight = function (height) {
        this._height = height;
        return this;
    };

    /**
     * Sets the row of the layout.
     * @since 2016-09-09
     * @param {Number} row Row of the layout
     */
    GridLayout.prototype.setRow = function (row) {
        this._row = row;
        return this;
    };

    /**
     * Sets the width of the layout.
     * @since 2016-09-09
     * @param {Number} width Width of the layout
     */
    GridLayout.prototype.setWidth = function (width) {
        this._width = width;
        return this;
    };

    /**
     * Returns the layout.
     * @since 2016-09-09
     * @returns {android.widget.LinearLayout} Layout
     */
    GridLayout.prototype.show = function () {
        let layout = this._layout,
            views = this._views,
            column = this._column,
            row = this._row,
            width = this._width * row,
            height = this._height * column,
            width2 = this._width,
            height2 = this._height;

        if (column < 0) {
            column = Math.ceil(views.length / row);
        }

        layout.setLayoutParams(new LinearLayout_.LayoutParams(width, height));

        for (let i = 0; i < column; i++) {
            let temp = new LinearLayout_(CONTEXT);
            temp.setLayoutParams(new LinearLayout_.LayoutParams(width, height2));
            for (let j = 0; j < row; j++) {
                if (row * i + j < views.length) {
                    let view = views[row * i + j];
                    view.setLayoutParams(new LinearLayout_.LayoutParams(width2, height2));
                    temp.addView(view);
                }
            }
            layout.addView(temp);
        }
        return layout;
    };



    /**
     * Class representing a image button.
     * @since 2016-05-27
     * @class
     * @extends me.astro.widget.Button
     * @memberOf me.astro.widget
     * @param {Number} [shape=me.astro.design.Shape.RECT] Shape of image button
     * @param {me.astro.design.Theme} [theme=me.astro.design.Theme.DEFAULT] Theme of image button
     */
    function ImageButton(shape, theme) {
        shape = shape || Shape.RECT;
        theme = theme || Theme.DEFAULT;
        let thiz = this;
        thiz._shape = shape;
        thiz._theme = theme;
        thiz._params = new LinearLayout_.LayoutParams(shape === Shape.RECT ? -1 : DP * 40, shape === Shape.RECT ? DP * 36 : DP * 40);
        thiz._view = new TextView_(CONTEXT);
        thiz._pressedDrawable = new ColorDrawable_(0);
        thiz._unpressedDrawable = new ColorDrawable_(0);
        thiz._func = () => {};
        thiz._params.setMargins(DP * 6, DP * 6, DP * 6, DP * 6);
        thiz._view.setBackgroundDrawable(thiz._unpressedDrawable);
        thiz._view.setGravity(Gravity_.CENTER);
        thiz._view.setLayoutParams(thiz._params);
        thiz._view.setOnTouchListener(new View_.OnTouchListener({
            onTouch(v, event) {
                let width = v.getWidth(),
                    height = v.getHeight(),
                    x = event.getX(),
                    y = event.getY();
                switch (event.getAction()) {
                case MotionEvent_.ACTION_DOWN:
                    v.setBackgroundDrawable(thiz._pressedDrawable);
                    break;
                case MotionEvent_.ACTION_MOVE:
                    if (x >= 0 && x <= width && y >= 0 && y <= height) {
                        v.setBackgroundDrawable(thiz._pressedDrawable);
                    } else {
                        v.setBackgroundDrawable(thiz._unpressedDrawable);
                    }
                    break;
                case MotionEvent_.ACTION_UP:
                    if (x >= 0 && x <= width && y >= 0 && y <= height) {
                        v.setBackgroundDrawable(thiz._unpressedDrawable);
                        thiz._func(v);
                    }
                    break;
                case MotionEvent_.ACTION_CANCEL:
                    if (x >= 0 && x <= width && y >= 0 && y <= height) {
                        v.setBackgroundDrawable(thiz._unpressedDrawable);
                    }
                }
                return true;
            }
        }));
    }

    ImageButton.prototype = Object.create(Button.prototype);
    ImageButton.prototype.constructor = ImageButton;

    /**
     * Sets the image of the button.
     * @since 2016-05-27
     * @param {android.graphics.Bitmap|android.graphics.drawable.BitmapDrawable} image Image bitmap or drawable
     * @param {Number} [color] Color of the background
     * @param {Object.<Number>|Number} [padding=DP*8] Padding of the image
     */
    ImageButton.prototype.setImage = function (image, color, padding) {
        let drawable;
        if (this._shape === Shape.RECT) {
            drawable = new ColorDrawable_(color || this._theme.getButton(Theme.BACKGROUND_COLOR));
        } else {
            drawable = new ShapeDrawable_(new OvalShape_());
            drawable.getPaint().setColor(color || this._theme.getButton(Theme.BACKGROUND_COLOR));
        }
        this._unpressedDrawable = new LayerDrawable_([drawable, (image instanceof Bitmap_ ? new BitmapDrawable_(image) : image)]);
        padding = padding || DP * 8;
        if (typeof padding === "number") {
            this._unpressedDrawable.setLayerInset(1, padding, padding, padding, padding);
        } else if (typeof padding === "object") {
            this._unpressedDrawable.setLayerInset(1, padding[0], padding[1], padding[2], padding[3]);
        }
        this._view.setBackgroundDrawable(this._unpressedDrawable);
        return this;
    };

    /**
     * Sets the image of the clicked button.
     * @since 2016-05-27
     * @param {android.graphics.Bitmap|android.graphics.drawable.BitmapDrawable} image Image bitmap or drawable
     * @param {Number} [color] Color of the background
     * @param {Object.<Number>|Number} [padding=DP*8] Padding of the image
     */
    ImageButton.prototype.setEffectImage = function (image, color, padding) {
        let drawable;
        if (this._shape === Shape.RECT) {
            drawable = new ColorDrawable_(color || this._theme.getButton(Theme.EFFECT_COLOR));
        } else {
            drawable = new ShapeDrawable_(new OvalShape_());
            drawable.getPaint().setColor(color || this._theme.getButton(Theme.EFFECT_COLOR));
        }
        this._pressedDrawable = new LayerDrawable_([drawable, (image instanceof Bitmap_ ? new BitmapDrawable_(image) : image)]);
        padding = padding || DP * 8;
        if (typeof padding === "number") {
            this._pressedDrawable.setLayerInset(1, padding, padding, padding, padding);
        } else if (typeof padding === "object") {
            this._pressedDrawable.setLayerInset(1, padding[0], padding[1], padding[2], padding[3]);
        }
        return this;
    };



    /**
     * Class representing a image toggle.
     * @since 2016-05-27
     * @class
     * @extends me.astro.widget.ImageButton
     * @memberOf me.astro.widget
     * @param {Number} [shape=me.astro.design.Shape.RECT] Shape of image toggle
     * @param {me.astro.design.Theme} [theme=me.astro.design.Theme.DEFAULT] Theme of image toggle
     */
    function ImageToggle(shape, theme) {
        shape = shape || Shape.RECT;
        theme = theme || Theme.DEFAULT;
        let thiz = this;
        thiz._shape = shape;
        thiz._theme = theme;
        thiz._params = new LinearLayout_.LayoutParams(-1, DP * 36);
        thiz._view = new ToggleButton_(CONTEXT);
        thiz._pressedDrawable = new ColorDrawable_(0);
        thiz._unpressedDrawable = new ColorDrawable_(0);
        thiz._func = () => {};
        thiz._params.setMargins(DP * 6, DP * 6, DP * 6, DP * 6);
        thiz._view.setBackgroundDrawable(thiz._unpressedDrawable);
        thiz._view.setGravity(Gravity_.CENTER);
        thiz._view.setLayoutParams(thiz._params);
        thiz._view.setOnCheckedChangeListener(new CompoundButton_.OnCheckedChangeListener({
            onCheckedChanged(buttonView, isChecked) {
                thiz._func(buttonView, isChecked);
                if (isChecked) {
                    buttonView.setBackgroundDrawable(thiz._pressedDrawable);
                } else {
                    buttonView.setBackgroundDrawable(thiz._unpressedDrawable);
                }
            }
        }));
        thiz._view.setTextOff("");
        thiz._view.setTextOn("");
    }

    ImageToggle.prototype = Object.create(ImageButton.prototype);
    ImageToggle.prototype.constructor = ImageToggle;

    /**
     * Checks whether the toggle is clicked.
     * @since 2016-05-27
     * @returns {Boolean} isChecked If the toggle is clicked, returns true, or not returns false
     */
    ImageToggle.prototype.isChecked = function () {
        return this._view.isChecked();
    };

    /**
     * Sets the click state of the toggle.
     * @since 2016-05-27
     * @param {Boolean} checked Click state of the toggle
     */
    ImageToggle.prototype.setChecked = function (checked) {
        if (checked) {
            this._view.setBackgroundDrawable(this._pressedDrawable);
        } else {
            this._view.setBackgroundDrawable(this._unpressedDrawable);
        }
        this._view.setChecked(checked);
        return this;
    };



    /**
     * Class representing a kakao link button.
     * @since 2016-08-28
     * @class
     * @extends me.astro.widget.TextView
     * @memberOf me.astro.widget
     */
    function KakaoLink() {
        this._params = new LinearLayout_.LayoutParams(DP * 40, DP * 44);
        this._view = new WebView_(CONTEXT);
        this._params.setMargins(DP * 4, DP * 2, DP * 4, DP * 2);
        this._view.setInitialScale(100);
        this._view.setLayoutParams(this._params);
        this._view.getSettings().setJavaScriptEnabled(true);
    }

    KakaoLink.prototype = Object.create(TextView.prototype);
    KakaoLink.prototype.constructor = KakaoLink;

    /**
     * Sets the displayed text on the link button.
     * @since 2016-08-28
     * @param {String} text Displayed text
     */
    KakaoLink.prototype.setLinkButtonText = function (text) {
        this._linkButtonText = text.toString();
        return this;
    };

    /**
     * Sets the url on the link button.
     * @since 2016-08-28
     * @param {String} url URL
     */
    KakaoLink.prototype.setLinkButtonUrl = function (url) {
        this._linkButtonUrl = url.toString();
        return this;
    };

    /**
     * Sets the displayed image on the link. 
     * @since 2016-08-28
     * @param {String} url Image url
     */
    KakaoLink.prototype.setLinkImage = function (url) {
        this._linkImage = url.toString();
        this._linkImageWidth = "300";
        this._linkImageHeight = "200";
        return this;
    };

    /**
     * Sets the size of displayed image on the link.
     * @since 2016-08-28
     * @param {Number} width Width of the image
     * @param {Number} height Height of the image
     */
    KakaoLink.prototype.setLinkImageWH = function (width, height) {
        this._linkImageWidth = width.toString();
        this._linkImageHeight = height.toString();
        return this;
    };

    /**
     * Sets the displayed text on the link.
     * @since 2016-08-28
     * @param {String} text Displayed text
     */
    KakaoLink.prototype.setLinkText = function (text) {
        this._linkText = text.toString();
        return this;
    };

    KakaoLink.prototype.show = function () {
        this._view.loadUrl("http://minedev.dothome.co.kr/library/kakaolink.php?text=" + this._linkText + "&image_url=" + this._linkImage + "&image_width=" + this._linkImageWidth + "&image_height=" + this._linkImageHeight + "&button_text=" + this._linkButtonText + "&button_url=" + this._linkButtonUrl);
        return this._view;
    };



    /**
     * Class representing a layout.
     * @since 2016-07-14
     * @class
     * @memberOf me.astro.widget
     * @param {me.astro.design.Theme} [theme=me.astro.design.Theme.DEFAULT] Theme of layout
     */
    function Layout(theme) {
        this._theme = theme || Theme.DEFAULT;
        this._layout = new LinearLayout_(CONTEXT);
        this._layout.setOrientation(1);
    }

    /**
     * Adds a view on the layout.
     * @since 2016-07-14
     * @param {android.view.View} view View
     */
    Layout.prototype.addView = function (view) {
        this._layout.addView(view);
        return this;
    };

    /**
     * Returns the layout.
     * @since 2016-07-14
     * @returns {android.widget.LinearLayout} Layout
     */
    Layout.prototype.getLayout = function () {
        return this._layout;
    };

    /**
     * Sets a gravity for the layout.
     * @since 2016-09-15
     * @param {Number} gravity Gravity for the layout
     */
    Layout.prototype.setGravity = function (gravity) {
        this._layout.setGravity(gravity);
        return this;
    };

    /**
     * Sets the orientation of the layout.
     * @since 2016-07-14
     * @param {Number} orientation Orientation of the layout
     */
    Layout.prototype.setOrientation = function (orientation) {
        this._layout.setOrientation(orientation);
        return this;
    };

    /**
     * Returns the layout.
     * @since 2016-07-14
     * @returns {android.widget.LinearLayout} Layout
     */
    Layout.prototype.show = function (canScroll) {
        if (this._layout.getOrientation() === 1 && (typeof canScroll === "undefined" || canScroll)) {
            let scrollView = new ScrollView(this._theme);
            scrollView.addView(this._layout);
            scrollView = scrollView.show();
            ViewUtils.setTheme(scrollView, this._theme);
            return scrollView;
        } else {
            ViewUtils.setTheme(this._layout, this._theme);
            return this._layout;
        }
    };



    /**
     * Class representing a palette.
     * @since 2016-09-09
     * @class
     * @memberOf me.astro.widget
     */
    function Palette() {
        let thiz = this,
            layout = this._layout = new GridLayout();
        thiz._func = (() => {});
        for (let i in Color) {
            let color = Color[i];
            if (typeof color === "number") {
                let view = new TextView_(CONTEXT);
                view.setBackgroundDrawable(new ColorDrawable_(color));
                view.setOnClickListener(new View_.OnClickListener({
                    onClick(view) {
                        thiz._func(view.getTag());
                    }
                }));
                view.setTag(color);
                layout.addView(view);
            }
        }
    }

    /**
     * Returns the effect function.
     * @since 2016-09-09
     * @returns {Function} Effect function
     */
    Palette.prototype.getEffect = function () {
        return this._func;
    };

    /**
     * Returns the view.
     * @since 2016-09-09
     * @returns {android.widget.LinearLayout} View
     */
    Palette.prototype.getView = function () {
        return this._layout.getLayout();
    };

    /**
     * Sets the effect function.
     * @since 2016-09-09
     * @param {Function} func Effect function
     */
    Palette.prototype.setEffect = function (func) {
        this._func = func;
        return this;
    };

    /**
     * Returns the palette.
     * @since 2016-09-09
     * @returns {android.widget.LinearLayout} Palette
     */
    Palette.prototype.show = function () {
        return this._layout.show();
    };



    /**
     * Class representing a scroll view.
     * @since 2016-09-06
     * @class
     * @memberOf me.astro.widget
     * @param {me.astro.design.Theme} [theme=me.astro.design.Theme.DEFAULT] Theme of scroll view
     */
    function ScrollView(theme) {
        theme = theme || Theme.DEFAULT;
        let thiz = this;
        this._scrollView = new ScrollView_(CONTEXT);
        this._scroller = new LinearLayout_(CONTEXT);
        this._track = new TextView_(CONTEXT);
        this._thumb = new TextView_(CONTEXT);
        this._theme = theme;
        this._width = DP * 340;
        this._scrollView.setLayoutParams(new LinearLayout_.LayoutParams(this._width - DP * 6, -1));
        this._scrollView.setOnScrollChangeListener(new View_.OnScrollChangeListener({
            onScrollChange(v, scrollX, scrollY, oldScrollX, oldScrollY) {
                CONTEXT.runOnUiThread({
                    run() {
                        thiz._track.setLayoutParams(new LinearLayout_.LayoutParams(DP * 12, v.getHeight() * scrollY / v.getChildAt(0).getHeight()));
                    }
                });
            }
        }));
        this._scrollView.setOverScrollMode(View_.OVER_SCROLL_NEVER);
        this._scrollView.setVerticalScrollBarEnabled(false);
        this._scrollView.setHorizontalScrollBarEnabled(false);
        this._scroller.addView(this._track);
        this._scroller.addView(this._thumb);
        this._scroller.setOrientation(1);
        this._track.setLayoutParams(new LinearLayout_.LayoutParams(DP * 6, 0));
        this._thumb.setBackgroundDrawable(new ColorDrawable_(theme.getScrollView(Theme.BACKGROUND_COLOR)));
        this._thumb.setLayoutParams(new LinearLayout_.LayoutParams(DP * 6, DP * 36));
        this._thumb.setOnTouchListener(new View_.OnTouchListener({
            onTouch(v, event) {
                let y = event.getRawY();
                if (event.getAction() === MotionEvent_.ACTION_MOVE) {
                    thiz._track.setLayoutParams(new LinearLayout_.LayoutParams(DP * 12, thiz._scrollView.getChildAt(0).getHeight() * y / (thiz._scrollView.getHeight() - DP * 18)));
                    thiz._scrollView.scrollTo(0, thiz._scrollView.getChildAt(0).getHeight() * y / (thiz._scrollView.getHeight() - DP * 18));
                }
                return true;
            }
        }));
    }

    /**
     * Adds a view on the scroll view.
     * @since 2016-09-06
     * @param {android.view.View} view View
     */
    ScrollView.prototype.addView = function (view) {
        this._scrollView.addView(view);
        return this;
    };

    /**
     * Returns the scroll view.
     * @since 2016-09-06
     * @returns {android.widget.LinearLayout} Scroll view
     */
    ScrollView.prototype.getLayout = function () {
        return this._scrollView;
    };

    /**
     * Returns the theme of the view.
     * @since 2016-09-06
     * @returns {me.astro.design.Theme} Theme of the scroll view
     */
    ScrollView.prototype.getTheme = function () {
        return this._theme;
    };

    /**
     * Sets the color of the thumb of the scroll view.
     * @since 2016-09-06
     * @param {Number} color Color of the thumb of the scroll view
     */
    ScrollView.prototype.setThumbColor = function (color) {
        this._thumb.setBackgroundDrawable(new ColorDrawable_(color));
        return this;
    };

    /**
     * Sets the drawable of the thumb of the scroll view.
     * @since 2016-09-06
     * @param {android.graphics.drawable.Drawable} drawable Drawable of the thumb of the scroll view
     */
    ScrollView.prototype.setThumbDrawable = function (drawable) {
        this._thumb.setBackgroundDrawable(drawable);
        return this;
    };

    /**
     * Sets the color of the track of the scroll view.
     * @since 2016-09-06
     * @param {Number} color Color of the track of the scroll view
     */
    ScrollView.prototype.setTrackColor = function (color) {
        this._scroller.setBackgroundDrawable(new ColorDrawable_(color));
        return this;
    };

    /**
     * Sets the drawable of the track of the scroll view.
     * @since 2016-09-06
     * @param {android.graphics.drawable.Drawable} drawable Drawable of the track of the scroll view
     */
    ScrollView.prototype.setTrackDrawable = function (drawable) {
        this._scroller.setBackgroundDrawable(drawable);
        return this;
    };

    /**
     * Sets the width of scroll view.
     * @since 2017-02-03
     * @param {Number} width Width of scroll view
     */
    ScrollView.prototype.setWidth = function (width) {
        this._width = width;
        this._scrollView.setLayoutParams(new LinearLayout_.LayoutParams(this._width - DP * 6, -1));
        return this;
    };

    /**
     * Returns the scroll view.
     * @since 2016-09-06
     * @returns {android.widget.LinearLayout} Scroll view
     */
    ScrollView.prototype.show = function () {
        let mainLayout = new LinearLayout_(CONTEXT);
        mainLayout.addView(this._scrollView);
        mainLayout.addView(this._scroller);
        mainLayout.setLayoutParams(new LinearLayout_.LayoutParams(this._width, -1));
        ViewUtils.setTheme(mainLayout, this._theme);
        return mainLayout;
    };



    /**
     * Class representing a sensor button.
     * @since 2016-08-04
     * @class
     * @extends me.astro.widget.ImageButton
     * @memberOf me.astro.widget
     * @param {Number} [shape=me.astro.design.Shape.RECT] Shape of sensor button
     * @param {me.astro.design.Theme} [theme=me.astro.design.Theme.DEFAULT] Theme of sensor button
     */
    function SensorButton(shape, theme) {
        shape = shape || Shape.RECT;
        theme = theme || Theme.DEFAULT;
        let thiz = this,
            isLongClick = false;
        thiz._shape = shape;
        thiz._theme = theme;
        thiz._params = new LinearLayout_.LayoutParams(shape === Shape.RECT ? -1 : DP * 40, shape === Shape.RECT ? DP * 36 : DP * 40);
        thiz._view = new TextView_(CONTEXT);
        thiz._pressedDrawable = new ColorDrawable_(0);
        thiz._unpressedDrawable = new ColorDrawable_(0);
        thiz._func = () => {};
        thiz._params.setMargins(DP * 6, DP * 6, DP * 6, DP * 6);
        thiz._view.setBackgroundDrawable(thiz._unpressedDrawable);
        thiz._view.setGravity(Gravity_.CENTER);
        thiz._view.setLayoutParams(thiz._params);
        thiz._view.setOnLongClickListener(new View_.OnLongClickListener({
            onLongClick(v) {
                isLongClick = true;
                return true;
            }
        }));
        thiz._view.setOnTouchListener(new View_.OnTouchListener({
            onTouch(v, event) {
                let width = v.getWidth(),
                    height = v.getHeight(),
                    x = event.getX(),
                    y = event.getY();
                switch (event.getAction()) {
                case MotionEvent_.ACTION_DOWN:
                    v.setBackgroundDrawable(thiz._pressedDrawable);
                    break;
                case MotionEvent_.ACTION_MOVE:
                    if (isLongClick) {
                        thiz._func(event.getRawX(), event.getRawY(), v.getWidth(), v.getHeight());
                    }
                    if (x >= 0 && x <= width && y >= 0 && y <= height) {
                        v.setBackgroundDrawable(thiz._pressedDrawable);
                    } else {
                        v.setBackgroundDrawable(thiz._unpressedDrawable);
                    }
                    break;
                case MotionEvent_.ACTION_UP:
                    isLongClick = false;
                    if (x >= 0 && x <= width && y >= 0 && y <= height) {
                        v.setBackgroundDrawable(thiz._unpressedDrawable);
                    }
                    break;
                case MotionEvent_.ACTION_CANCEL:
                    isLongClick = false;
                    if (x >= 0 && x <= width && y >= 0 && y <= height) {
                        v.setBackgroundDrawable(thiz._unpressedDrawable);
                    }
                }
                return false;
            }
        }));
    }

    SensorButton.prototype = Object.create(ImageButton.prototype);
    SensorButton.prototype.constructor = SensorButton;



    /**
     * Class representing a slide button.
     * @since 2016-08-04
     * @class
     * @extends me.astro.widget.ImageButton
     * @memberOf me.astro.widget
     * @param {Number} [shape=me.astro.design.Shape.RECT] Shape of slide button
     * @param {me.astro.design.Theme} [theme=me.astro.design.Theme.DEFAULT] Theme of slide button
     */
    function SlideButton(shape, theme) {
        shape = shape || Shape.RECT;
        theme = theme || Theme.DEFAULT;
        let thiz = this,
            oriX;
        thiz._shape = shape;
        thiz._theme = theme;
        thiz._params = new LinearLayout_.LayoutParams(shape === Shape.RECT ? -1 : DP * 40, shape === Shape.RECT ? DP * 36 : DP * 40);
        thiz._view = new TextView_(CONTEXT);
        thiz._pressedDrawable = new ColorDrawable_(0);
        thiz._unpressedDrawable = new ColorDrawable_(0);
        thiz._func = () => {};
        thiz._params.setMargins(DP * 6, DP * 6, DP * 6, DP * 6);
        thiz._view.setBackgroundDrawable(thiz._unpressedDrawable);
        thiz._view.setGravity(Gravity_.CENTER);
        thiz._view.setLayoutParams(thiz._params);
        thiz._view.setOnTouchListener(new View_.OnTouchListener({
            onTouch(v, event) {
                let width = v.getWidth(),
                    height = v.getHeight(),
                    x = event.getX(),
                    y = event.getY();
                switch (event.getAction()) {
                case MotionEvent_.ACTION_DOWN:
                    oriX = x;
                    v.setBackgroundDrawable(thiz._pressedDrawable);
                    break;
                case MotionEvent_.ACTION_MOVE:
                    if (x >= 0 && x <= width && y >= 0 && y <= height) {
                        v.setBackgroundDrawable(thiz._pressedDrawable);
                    } else {
                        v.setBackgroundDrawable(thiz._unpressedDrawable);
                    }
                    break;
                case MotionEvent_.ACTION_UP:
                    if (Math.abs(oriX - x) > width / 2) {
                        if (oriX < x) {
                            thiz._func(v, SlideButton.LEFT_RIGHT);
                        } else {
                            thiz._func(v, SlideButton.RIGHT_LEFT);
                        }
                    }
                    if (x >= 0 && x <= width && y >= 0 && y <= height) {
                        v.setBackgroundDrawable(thiz._unpressedDrawable);
                    }
                    break;
                case MotionEvent_.ACTION_CANCEL:
                    if (x >= 0 && x <= width && y >= 0 && y <= height) {
                        v.setBackgroundDrawable(thiz._unpressedDrawable);
                    }
                }
                return true;
            }
        }));
    }

    SlideButton.LEFT_RIGHT = 0;
    SlideButton.RIGHT_LEFT = 1;

    SlideButton.prototype = Object.create(ImageButton.prototype);
    SlideButton.prototype.constructor = SlideButton;



    /**
     * Class representing a toast.
     * @since 2016-05-28
     * @class
     * @memberOf me.astro.widget
     */
    function Toast() {}

    /**
     * Shows the toast on the screen.
     * @since 2016-05-27
     * @param {String} text Displayed text of the toast
     * @param {me.astro.design.Theme} [theme=me.astro.design.Theme.DEFAULT] Theme of toast
     */
    Toast.show = function (text, theme) {
        theme = theme || Theme.DEFAULT;
        CONTEXT.runOnUiThread({
            run() {
                let textView = new TextView_(CONTEXT);
                textView.setBackgroundDrawable(new ColorDrawable_(theme.getToast(Theme.BACKGROUND_COLOR)));
                textView.setPadding(DP * 12, DP * 8, DP * 12, DP * 8);
                textView.setText(text.toString());
                textView.setTextColor(theme.getToast(Theme.TEXT_COLOR));
                textView.setTextSize(1, 14);
                let toast_ = new Toast_(CONTEXT);
                toast_.setView(textView);
                toast_.show();
            }
        });
    };



    /**
     * Contains classes for windows.
     * @memberOf me.astro
     * @namespace window
     */

    /**
     * Class representing a window.
     * @since 2017-02-20
     * @class
     * @memberOf me.astro.window
     * @param {me.astro.design.Theme} [theme=me.astro.design.Theme.DEFAULT] Theme of window
     */
    function Window(theme) {
        theme = theme || Theme.DEFAULT;
        this._theme = theme;
        this._window = new PopupWindow_(CONTEXT);
    }

    /**
     * Disposes of the window.
     * @since 2017-02-20
     */
    Window.prototype.dismiss = function () {
        let thiz = this;
        CONTEXT.runOnUiThread({
            run() {
                if (thiz._window instanceof PopupWindow_) {
                    thiz._window.dismiss();
                    thiz._window = null;
                }
            }
        });
        return this;
    };

    /**
     * Returns the theme of the window.
     * @since 2017-02-20
     * @returns {me.astro.design.Theme} Theme of the window
     */
    Window.prototype.getTheme = function () {
        return this._theme;
    };

    /**
     * Returns the window.
     * @since 2017-02-20
     * @returns {android.widget.PopupWindow} Window
     */
    Window.prototype.getWindow = function () {
        return this._window;
    };

    /**
     * Sets the focusable of the window.
     * @since 2017-02-20
     * @param {Boolean} focusable Focusable of the window
     */
    Window.prototype.setFocusable = function (focusable) {
        this._window.setFocusable(focusable);
        return this;
    };

    /**
     * Sets the theme of the window.
     * @since 2017-02-20
     * @param {me.astro.design.Theme} theme Theme of the window
     */
    Window.prototype.setTheme = function (theme) {
        this._theme = theme;
        return this;
    };

    /**
     * Shows the window on the screen.
     * @since 2017-02-20
     */
    Window.prototype.show = function () {
        this._window.showAtLocation(SCREEN, Gravity_.CENTER, 0, 0);
        return this;
    };



    /**
     * Class representing a size changed window.
     * @since 2017-02-20
     * @class
     * @extends me.astro.window.Window
     * @memberOf me.astro.window
     * @param {me.astro.design.Theme} [theme=me.astro.design.Theme.DEFAULT] Theme of window
     */
    function SizeChangedWindow(theme) {
        theme = theme || Theme.DEFAULT;
        this._theme = theme;
        this._height = DP * 200;
        this._width = DP * 360;
        this._window = new PopupWindow_(CONTEXT);
    }

    SizeChangedWindow.prototype = Object.create(Window.prototype);
    SizeChangedWindow.prototype.constructor = SizeChangedWindow;

    /**
     * Returns the size of the window.
     * @since 2017-02-20
     * @returns {Array.<Number>} Width and height of the window
     */
    SizeChangedWindow.prototype.getWH = function () {
        return [this._width, this._height];
    };

    /**
     * Sets the size of the window.
     * @since 2017-02-20
     * @param {Number} width Width of the window
     * @param {Number} height Height of the window
     */
    SizeChangedWindow.prototype.setWH = function (width, height) {
        this._width = width;
        this._height = height;
        this._window.setWidth(width);
        this._window.setHeight(height);
        return this;
    };



    /**
     * Class representing a size fixed window.
     * @since 2017-02-20
     * @class
     * @extends me.astro.window.Window
     * @memberOf me.astro.window
     * @param {me.astro.design.Theme} [theme=me.astro.design.Theme.DEFAULT] Theme of window
     */
    function SizeFixedWindow(theme) {
        theme = theme || Theme.DEFAULT;
        this._theme = theme;
        this._window = new PopupWindow_(CONTEXT);
        this._window.setWidth(DEVICE_WIDTH);
        this._window.setHeight(DEVICE_HEIGHT);
    }

    SizeFixedWindow.prototype = Object.create(Window.prototype);
    SizeFixedWindow.prototype.constructor = SizeFixedWindow;




    /**
     * Class representing a window that shows a color picker.
     * @since 2017-02-20
     * @class
     * @extends me.astro.window.SizeFixedWindow
     * @memberOf me.astro.window
     * @param {Number} [r=255] Red
     * @param {Number} [g=0] Green
     * @param {Number} [b=0] Blue
     * @param {Function} [func=function(){}] Callback to be invoked when color was changed
     */
    function ColorPickerWindow(r, g, b, func) {
        r = r || 255;
        g = g || 0;
        b = b || 0;
        func = func || (() => {});
        let viewer = this._viewer = new TextView_(CONTEXT);
        this._picker = new ColorPicker(r, g, b, color => {
            viewer.setBackgroundDrawable(new ColorDrawable_(color));
            func(color);
        });
        viewer.setBackgroundDrawable(new ColorDrawable_(Color_.rgb(r, g, b)));
        viewer.setGravity(Gravity_.CENTER);
        viewer.setText("Click to close");
        viewer.setTextColor(Color_.rgb(r, g, b));
        viewer.setTextSize(1, 18);
    }

    ColorPickerWindow.prototype = Object.create(SizeFixedWindow.prototype);
    ColorPickerWindow.prototype.constructor = ColorPickerWindow;

    /**
     * Shows the window of color picker.
     * @since 2017-02-20
     */
    ColorPickerWindow.prototype.show = function () {
        let thiz = this;
        CONTEXT.runOnUiThread({
            run() {
                let drawable = new GradientDrawable_(),
                    layout = new LinearLayout_(CONTEXT),
                    window = new PopupWindow_(layout, -2, -2);
                thiz._window = window;
                thiz._viewer.setOnClickListener(new View_.OnClickListener({
                    onClick(view) {
                        CONTEXT.runOnUiThread({
                            run() {
                                window.dismiss();
                                window = null;
                            }
                        });
                    }
                }));
                drawable.setColor(Color_.rgb(97, 97, 97));
                drawable.setCornerRadius(DP * 4);
                layout.addView(thiz._picker.show(), DP * 280, DP * 240);
                layout.addView(thiz._viewer, DP * 280, DP * 60);
                layout.setBackgroundDrawable(drawable);
                layout.setOrientation(1);
                layout.setPadding(DP * 24, DP * 24, DP * 24, DP * 24);
                window.setBackgroundDrawable(new ColorDrawable_(0));
                window.showAtLocation(CONTEXT.getWindow().getDecorView(), Gravity_.CENTER, 0, 0);
            }
        });
    };



    /**
     * Class representing a floating window.
     * @since 2017-02-20
     * @class
     * @extends me.astro.window.SizeChangedWindow
     * @memberOf me.astro.window
     * @param {me.astro.design.Theme} [theme=me.astro.design.Theme.DEFAULT] Theme of window
     */
    function FloatingWindow(theme) {
        theme = theme || Theme.DEFAULT;
        this._theme = theme;
        this._height = DP * 240;
        this._width = DP * 360;
        this._window = new PopupWindow_(CONTEXT);
        this._layout = new LinearLayout_(CONTEXT);
        this._layout.setBackgroundDrawable(new ColorDrawable_(theme.getFloatingWindow(Theme.BACKGROUND_COLOR)));
        this._layout.setOrientation(1);
        this._window.setBackgroundDrawable(ShadowDrawable.create());
        this._window.setContentView(this._layout);
        this._window.setWidth(this._width + DP * 24);
        this._window.setHeight(this._height + DP * 24);
    }

    FloatingWindow.prototype = Object.create(SizeChangedWindow.prototype);
    FloatingWindow.prototype.constructor = FloatingWindow;

    /**
     * Adds a layout on the floating window.
     * @since 2017-02-20
     * @param {android.view.View} view View
     */
    FloatingWindow.prototype.addView = function (view) {
        this._layout.addView(view);
        return this;
    };

    /**
     * Sets the color of the window.
     * @since 2017-02-20
     * @param {Number} color Color of the window
     */
    FloatingWindow.prototype.setColor = function (color) {
        this._layout.setBackgroundDrawable(new ColorDrawable_(color));
        return this;
    };

    FloatingWindow.prototype.setWH = function (width, height) {
        this._width = width;
        this._height = height;
        this._window.setWidth(width + DP * 24);
        this._window.setHeight(height + DP * 24);
        return this;
    };



    /**
     * Class representing a notification window.
     * @since 2017-02-20
     * @class
     * @extends me.astro.window.SizeFixedWindow
     * @memberOf me.astro.window
     */
    function NotificationWindow() {}

    NotificationWindow.getInstance = function () {
        if (typeof notificationWindowInstance === "undefined") {
            /** @lends me.astro.window.NotificationWindow */
            const NotificationWindowInstance = function () {
                this._theme = Theme.DEFAULT;
                this._isRunning = false;
                this._notifications = [];
                this._unread = 0;
            };

            NotificationWindowInstance.prototype = Object.create(SizeFixedWindow.prototype);
            NotificationWindowInstance.prototype.constructor = NotificationWindow;

            /**
             * Adds a notification.
             * @since 2017-02-20
             * @param {String} title Title of notification
             * @param {String} text Text of notification
             * @param {String} [buttonText] Text of notification button
             * @param {Function} [func] Function of notification button
             */
            NotificationWindowInstance.prototype.addNotification = function (title, text, buttonText, func) {
                this._notifications.push({
                    title: title,
                    text: text,
                    buttonText: buttonText,
                    func: func
                });
                this._unread++;
                return this;
            };

            NotificationWindowInstance.prototype.dismiss = function () {
                let windowLayout = this._windowLayout,
                    window = this._window;
                new Thread_({
                    run() {
                        CONTEXT.runOnUiThread({
                            run() {
                                if (windowLayout instanceof LinearLayout_) {
                                    let anim = new TranslateAnimation_(0, DP * -200, 0, 0);
                                    anim.setDuration(500);
                                    anim.setInterpolator(new DecelerateInterpolator_());
                                    windowLayout.startAnimation(anim);
                                    windowLayout = null;
                                }
                            }
                        });
                        Thread_.sleep(500);
                        CONTEXT.runOnUiThread({
                            run() {
                                if (window instanceof PopupWindow_) {
                                    window.dismiss();
                                    window = null;
                                }
                            }
                        });
                    }
                }).start();
                return this;
            };

            /**
             * Returns whether the notification window is currently running.
             * @since 2017-01-29
             * @returns {Boolean} Whether the notification window is running
             */
            NotificationWindowInstance.prototype.isRunning = function () {
                return this._isRunning;
            };

            NotificationWindowInstance.prototype.show = function () {
                let thiz = this,
                    theme = thiz._theme,
                    notifications = thiz._notifications,
                    unread = thiz._unread;
                CONTEXT.runOnUiThread({
                    run() {
                        let touchX,
                            anim = new TranslateAnimation_(DP * -200, 0, 0, 0),
                            drawable = new GradientDrawable_(GradientDrawable_.Orientation.LEFT_RIGHT, [Color.BLACK, 0]),
                            layout = new LinearLayout_(CONTEXT),
                            notiLayout = thiz._layout = new LinearLayout_(CONTEXT),
                            windowLayout = thiz._windowLayout = new LinearLayout_(CONTEXT),
                            window = thiz._window = new PopupWindow_(windowLayout, DP * 208, -1);
                        anim.setDuration(500);
                        anim.setInterpolator(new DecelerateInterpolator_());
                        layout.addView(new ScrollView(theme)
                            .addView(thiz._layout)
                            .setWidth(DP * 192)
                            .show());
                        layout.setBackgroundDrawable(new ColorDrawable_(theme.getNotificationWindow(Theme.BACKGROUND_COLOR)));
                        for (let i = notifications.length; i--;) {
                            let notification = notifications[i],
                                viewLayout = new LinearLayout_(CONTEXT);
                            viewLayout.addView(new TextView(theme)
                                .setText(notification.title)
                                .setTextColor(unread > 0 ? theme.getNotificationWindow(Theme.EFFECT_COLOR) : theme.getNotificationWindow(Theme.TEXT_COLOR))
                                .setTextSize(18)
                                .show());
                            viewLayout.addView(new TextView(theme)
                                .setText(notification.text)
                                .setTextSize(12)
                                .show());
                            if (typeof notification.func === "function") {
                                viewLayout.addView(new Button(theme)
                                    .setEffect(notification.func)
                                    .setText(notification.buttonText)
                                    .setWH(DP * 162, DP * 36)
                                    .show());
                            }
                            viewLayout.addView(new Divider(theme).show());
                            viewLayout.setOrientation(1);
                            notiLayout.addView(viewLayout, -1, -2);
                            if (unread > 0) {
                                unread--;
                            }
                        }
                        thiz._unread = unread;
                        notiLayout.addView(new TextView(theme)
                            .setGravity(Gravity_.CENTER)
                            .setText("Swipe the edge of the window to the left to close the window")
                            .setTextColor(ColorUtils.setAlpha(theme.getNotificationWindow(Theme.TEXT_COLOR), 160))
                            .setTextSize(10)
                            .show());
                        notiLayout.setOrientation(1);
                        notiLayout.setPadding(DP * 4, DP * 4, DP * 4, DP * 4);
                        windowLayout.addView(layout, -1, -1);
                        windowLayout.setBackgroundDrawable(drawable);
                        windowLayout.setPadding(0, 0, DP * 16, 0);
                        windowLayout.setOnTouchListener(new View_.OnTouchListener({
                            onTouch(v, event) {
                                switch (event.getAction()) {
                                case MotionEvent_.ACTION_DOWN:
                                    touchX = event.getX();
                                    break;
                                case MotionEvent_.ACTION_CANCEL:
                                case MotionEvent_.ACTION_UP:
                                    if (touchX - event.getX() > DP * 16 && touchX >= 0 && touchX <= DP * 208) {
                                        thiz.dismiss();
                                    }
                                    break;
                                }
                                return true;
                            }
                        }));
                        windowLayout.startAnimation(anim);
                        window.showAtLocation(SCREEN, Gravity_.CENTER | Gravity_.LEFT, 0, 0);
                    }
                });
                return this;
            };

            /**
             * Starts the notification window.
             * @since 2017-02-20
             */
            NotificationWindowInstance.prototype.start = function () {
                let thiz = this;
                CONTEXT.runOnUiThread({
                    run() {
                        let touchX;
                        SCREEN.setOnTouchListener(new View_.OnTouchListener({
                            onTouch(v, event) {
                                switch (event.getAction()) {
                                case MotionEvent_.ACTION_DOWN:
                                    touchX = event.getX();
                                    break;
                                case MotionEvent_.ACTION_CANCEL:
                                case MotionEvent_.ACTION_UP:
                                    if (thiz._isRunning && event.getX() - touchX > DP * 16 && touchX >= 0 && touchX <= DP * 16) {
                                        thiz.show();
                                    }
                                    break;
                                }
                                return true;
                            }
                        }));
                    }
                });
                this._isRunning = true;
                return this;
            };

            /**
             * Stops the notification window.
             * @since 2017-02-20
             */
            NotificationWindowInstance.prototype.stop = function () {
                this._isRunning = false;
                return this;
            };

            notificationWindowInstance = new NotificationWindowInstance();
            return notificationWindowInstance;
        } else {
            return notificationWindowInstance;
        }
    };



    /**
     * Class representing a palette window.
     * @since 2017-02-20
     * @class
     * @extends me.astro.window.SizeFixedWindow
     * @memberOf me.astro.window
     * @param {me.astro.design.Theme} [theme=me.astro.design.Theme.DEFAULT] Theme of window
     */
    function PaletteWindow(theme) {
        theme = theme || Theme.DEFAULT;
        this._theme = theme;
        this._window = new PopupWindow_(CONTEXT);
        this._layout = new ScrollView(theme);
        this._palette = new Palette();
        this._window.setBackgroundDrawable(new ColorDrawable_(theme.getWindow(Theme.BACKGROUND_COLOR)));
        this._window.setContentView(this._layout.show());
        this._window.setWidth(DP * 340);
        this._window.setHeight(DP * 340);
        this._layout.addView(this._palette.show());
    }

    PaletteWindow.prototype = Object.create(SizeFixedWindow.prototype);
    PaletteWindow.prototype.constructor = PaletteWindow;

    /**
     * Sets the color of the window.
     * @since 2017-02-20
     * @param {Number} color Color of the window
     */
    PaletteWindow.prototype.setColor = function (color) {
        this._window.setBackgroundDrawable(new ColorDrawable_(color));
        return this;
    };



    /**
     * Class representing a popup window.
     * @since 2017-02-20
     * @class
     * @extends me.astro.window.SizeChangedWindow
     * @memberOf me.astro.window
     * @param {me.astro.design.Theme} [theme=me.astro.design.Theme.DEFAULT] Theme of window
     */
    function PopupWindow(theme) {
        theme = theme || Theme.DEFAULT;
        this._theme = theme;
        this._height = DP * 320;
        this._width = DP * 400;
        this._layouts = [];
        this._toggles = [];
        this._window = new PopupWindow_(CONTEXT);
        this._windowLayout = new LinearLayout_(CONTEXT);
        this._sideBarLayout = new LinearLayout_(CONTEXT);
        this._contentLayout = new FrameLayout_(CONTEXT);
        this._windowLayout.addView(this._sideBarLayout, DP * 60, this._height);
        this._windowLayout.addView(this._contentLayout, this._width - DP * 60, this._height);
        this._windowLayout.setBackgroundDrawable(ShadowDrawable.create());
        this._windowLayout.setGravity(Gravity_.CENTER);
        this._sideBarLayout.setBackgroundDrawable(new ColorDrawable_(theme.getWindow(Theme.BACKGROUND_COLOR)));
        this._sideBarLayout.setOrientation(1);
        this._contentLayout.setBackgroundDrawable(new ColorDrawable_(theme.getWindow(Theme.TEXT_COLOR)));
        this._window.setBackgroundDrawable(new ColorDrawable_(0));
        this._window.setContentView(this._windowLayout);
        this._window.setWidth(this._width + DP * 24);
        this._window.setHeight(this._height + DP * 24);
    }

    PopupWindow.prototype = Object.create(SizeChangedWindow.prototype);
    PopupWindow.prototype.constructor = PopupWindow;

    /**
     * Adds a layout on the window.
     * @since 2017-02-20
     * @param {android.graphics.Bitmap} image Image which is placed the sidebar
     * @param {android.widget.LinearLayout} layout Layout
     */
    PopupWindow.prototype.addLayout = function (image, layout) {
        let thiz = this,
            theme = thiz._theme,
            imageToggle = new ImageToggle();
        imageToggle.getView().setId(thiz._layouts.length);
        thiz._sideBarLayout.addView(imageToggle.setEffect(function (buttonView, isChecked) {
                let layouts = thiz._layouts,
                    toggles = thiz._toggles,
                    id = buttonView.getId();
                for (let i = 0, len = layouts.length; i < len; i++) {
                    layouts[i].setVisibility(View_.GONE);
                    toggles[i].setChecked(false);
                }
                layouts[id].setVisibility(View_.VISIBLE);
            })
            .setEffectImage(Drawable.setTint(new BitmapDrawable_(image), theme.getWindow(Theme.TEXT_COLOR)), theme.getWindow(Theme.EFFECT_COLOR), DP * 12)
            .setImage(Drawable.setTint(new BitmapDrawable_(image), theme.getWindow(Theme.TEXT_COLOR)), theme.getWindow(Theme.BACKGROUND_COLOR), DP * 12)
            .setPadding(0, 0, 0, 0)
            .setWH(DP * 60, DP * 60)
            .show());
        thiz._layouts.push(layout);
        thiz._toggles.push(imageToggle);
        thiz._contentLayout.addView(layout);
        return this;
    };

    PopupWindow.prototype.dismiss = function () {
        let thiz = this,
            layouts = thiz._layouts;
        CONTEXT.runOnUiThread({
            run() {
                thiz._window.dismiss();
                thiz._window = null;
                for (let i = 0, len = layouts.length; i < len; i++) {
                    layouts[i].setVisibility(View_.GONE);
                }
                thiz._layouts = null;
            }
        });
        return this;
    };

    /**
     * Sets the color of the window.
     * @since 2017-02-20
     * @param {Number} color Color of the window
     */
    PopupWindow.prototype.setColor = function (color) {
        this._color = color;
        this._sideBarLayout.setBackgroundDrawable(new ColorDrawable_(color));
        return this;
    };

    PopupWindow.prototype.setWH = function (width, height) {
        this._width = width;
        this._height = height;
        this._window.setWidth(width + DP * 24);
        this._window.setHeight(height + DP * 24);
        return this;
    };

    PopupWindow.prototype.show = function () {
        let thiz = this,
            layouts = thiz._layouts;
        thiz._window.showAtLocation(SCREEN, Gravity_.CENTER, 0, 0);
        thiz._toggles[0].setChecked(true);
        for (let i = 1, len = layouts.length; i < len; i++) {
            layouts[i].setVisibility(View_.GONE);
        }
        return this;
    };



    /**
     * Class representing a progress window.
     * @since 2017-02-20
     * @class
     * @extends me.astro.window.SizeFixedWindow
     * @memberOf me.astro.window
     * @param {me.astro.design.Theme} [theme=me.astro.design.Theme.DEFAULT] Theme of window
     * @param {Boolean} [canForceShutdown=true] Enables force shutdown
     */
    function ProgressWindow(theme, canForceShutdown) {
        theme = theme || Theme.DEFAULT;
        let thiz = this,
            gradientDrawable = new GradientDrawable_(),
            layout = new LinearLayout_(CONTEXT);
        thiz._theme = theme;
        thiz._window = new PopupWindow_(CONTEXT);
        thiz._textView = new TextView_(CONTEXT);
        thiz._layout = new LinearLayout_(CONTEXT);
        thiz._effect = new TextView_(CONTEXT);
        thiz._isRunning = true;
        thiz._window.setBackgroundDrawable(new ColorDrawable_(theme.getProgressWindow(Theme.BACKGROUND_COLOR)));
        thiz._window.setContentView(layout);
        thiz._window.setWidth(DEVICE_WIDTH);
        thiz._window.setHeight(DEVICE_HEIGHT);
        thiz._textView.setGravity(Gravity_.CENTER);
        thiz._textView.setPadding(DP * 12, DP * 8, DP * 12, DP * 24);
        thiz._textView.setText("Now Loading...");
        thiz._textView.setTextColor(theme.getProgressWindow(Theme.TEXT_COLOR));
        thiz._textView.setTextSize(1, 18);
        gradientDrawable.setColors([theme.getProgressWindow(Theme.EFFECT_COLOR), theme.getProgressWindow(Theme.TEXT_COLOR)]);
        gradientDrawable.setOrientation(GradientDrawable_.Orientation.LEFT_RIGHT);
        thiz._effect.setBackgroundDrawable(gradientDrawable);
        thiz._layout.addView(thiz._effect);
        thiz._layout.setBackgroundDrawable(new ColorDrawable_(theme.getProgressWindow(Theme.TEXT_COLOR)));
        thiz._layout.setGravity(Gravity_.LEFT);
        thiz._layout.setLayoutParams(LinearLayout_.LayoutParams(DP * 304, DP * 28));
        thiz._layout.setPadding(DP * 2, DP * 2, DP * 2, DP * 2);
        layout.addView(thiz._textView);
        layout.addView(thiz._layout);
        layout.setGravity(Gravity_.CENTER);
        layout.setOrientation(1);

        if (typeof canForceShutdown === "undefined" || canForceShutdown) {
            new Thread_({
                run() {
                    let max = DP * 300,
                        isIncreasing,
                        canForceShutdown = false,
                        time = 0,
                        progress = 0;
                    while (thiz._isRunning) {
                        Thread_.sleep(5);
                        if (progress >= max) {
                            isIncreasing = false;
                        } else if (progress <= 0) {
                            isIncreasing = true;
                        }
                        time += 5;
                        progress += isIncreasing ? DP : -DP;
                        CONTEXT.runOnUiThread({
                            run() {
                                if (time >= 5000 && !canForceShutdown) {
                                    canForceShutdown = true;
                                    thiz._textView.setText(thiz._textView.getText() + "\n\n[Force shutdown]");
                                    thiz._textView.setOnClickListener(new View_.OnClickListener({
                                        onClick(view) {
                                            thiz._isRunning = false;
                                            thiz._window.dismiss();
                                        }
                                    }));
                                }
                                thiz._effect.setLayoutParams(LinearLayout_.LayoutParams(progress, DP * 24));
                            }
                        });
                    }
                }
            }).start();
        }
    }

    ProgressWindow.prototype = Object.create(SizeFixedWindow.prototype);
    ProgressWindow.prototype.constructor = ProgressWindow;

    ProgressWindow.prototype.dismiss = function () {
        let thiz = this;
        CONTEXT.runOnUiThread({
            run() {
                thiz._isRunning = false;
                if (thiz._window instanceof PopupWindow_) {
                    thiz._window.dismiss();
                    thiz._window = null;
                }
            }
        });
        return this;
    };

    /**
     * Sets the color of the window.
     * @since 2017-02-20
     * @param {Number} color Color of the window
     */
    ProgressWindow.prototype.setColor = function (color) {
        this._window.setBackgroundDrawable(new ColorDrawable_(color));
        return this;
    };

    /**
     * Sets the effect function.
     * @since 2017-02-20
     * @param {Number} color0 Effect color
     * @param {Number} color1 Background color
     */
    ProgressWindow.prototype.setEffectColor = function (color0, color1) {
        let gradientDrawable = new GradientDrawable_();
        gradientDrawable.setColors([color0, color1]);
        gradientDrawable.setOrientation(GradientDrawable_.Orientation.LEFT_RIGHT);
        this._effect.setBackgroundDrawable(gradientDrawable);
        this._layout.setBackgroundDrawable(new ColorDrawable_(color1));
        return this;
    };

    /**
     * Sets a displayed text.
     * @since 2017-02-20
     * @param {Number} text Displayed text
     */
    ProgressWindow.prototype.setText = function (text) {
        this._textView.setText(text.toString());
        return this;
    };

    /**
     * Sets the color of displayed text.
     * @since 2017-02-20
     * @param {Number} textColor Color of displayed text
     */
    ProgressWindow.prototype.setTextColor = function (textColor) {
        this._textView.setTextColor(textColor);
        return this;
    };

    /**
     * Stops the effect of progress.
     * @since 2017-02-20
     */
    ProgressWindow.prototype.stop = function () {
        this._isRunning = false;
        return this;
    };



    /**
     * Class representing a showcase window.
     * @since 2017-02-20
     * @class
     * @extends me.astro.window.SizeFixedWindow
     * @memberOf me.astro.window
     * @param {me.astro.design.Theme} [theme=me.astro.design.Theme.DEFAULT] Theme of showcase window
     */
    function ShowcaseWindow(theme) {
        theme = theme || Theme.DEFAULT;
        this._theme = theme;
        this._color = ColorUtils.setAlpha(theme.getShowcaseWindow(Theme.BACKGROUND_COLOR), 204);
        this._radius = DP * 50;
        this._itemXY = [DP * 100, DP * 100];
        this._window = new PopupWindow_(CONTEXT);
        this._window.setWidth(DEVICE_WIDTH);
        this._window.setHeight(DEVICE_HEIGHT);
    }

    ShowcaseWindow.prototype = Object.create(SizeFixedWindow.prototype);
    ShowcaseWindow.prototype.constructor = ShowcaseWindow;

    /**
     * Sets the color of the window.
     * @since 2017-02-20
     * @param {Number} color Color of the window
     */
    ShowcaseWindow.prototype.setColor = function (color) {
        this._color = color;
        return this;
    };

    /**
     * Sets the item location.
     * @since 2017-02-20
     * @param {Number} x X location of the item
     * @param {Number} y Y location of the item
     */
    ShowcaseWindow.prototype.setItemXY = function (x, y) {
        this._itemXY = [x, y];
        return this;
    };

    /**
     * Sets the circle radius that emphasizes the item.
     * @since 2017-02-20
     * @param {Number} radius
     */
    ShowcaseWindow.prototype.setRadius = function (radius) {
        this._radius = radius;
        return this;
    };

    /**
     * Sets a view on the window.
     * @since 2017-02-20
     * @param {android.widget.LinearLayout} view View
     */
    ShowcaseWindow.prototype.setView = function (view) {
        this._window.setContentView(view);
        return this;
    };

    ShowcaseWindow.prototype.show = function () {
        let itemXY = this._itemXY,
            radius = this._radius,
            bitmap = Bitmap_.createBitmap(DEVICE_WIDTH, DEVICE_HEIGHT, Bitmap_.Config.ARGB_8888),
            canvas = new Canvas_(bitmap),
            paint = new Paint_(),
            drawable = new BitmapDrawable_(bitmap);
        paint.setAntiAlias(true);
        paint.setColor(this._color);
        canvas.drawPaint(paint);
        paint.setXfermode(new PorterDuffXfermode_(PorterDuff_.Mode.CLEAR));
        canvas.drawCircle(itemXY[0], itemXY[1], radius, paint);
        this._window.setBackgroundDrawable(drawable);
        this._window.showAtLocation(SCREEN, Gravity_.CENTER, 0, 0);
        return this;
    };



    /**
     * Class representing a splash window.
     * @since 2017-02-20
     * @class
     * @extends me.astro.window.SizeFixedWindow
     * @memberOf me.astro.window
     * @param {me.astro.design.Theme} [theme=me.astro.design.Theme.DEFAULT] Theme of splash window
     */
    function SplashWindow(theme) {
        theme = theme || Theme.DEFAULT;
        this._theme = theme;
        this._height = DEVICE_HEIGHT;
        this._width = DEVICE_WIDTH;
        this._delay = 1000;
        this._layout = new LinearLayout_(CONTEXT);
        this._layout.setBackgroundDrawable(new ColorDrawable_(theme.getSplashWindow(Theme.BACKGROUND_COLOR)));
        this._layout.setGravity(Gravity_.CENTER);
        this._window = new PopupWindow_(CONTEXT);
        this._window.setBackgroundDrawable(new ColorDrawable_(0));
        this._window.setContentView(this._layout);
        this._window.setWidth(DEVICE_WIDTH);
        this._window.setHeight(DEVICE_HEIGHT);
    }

    SplashWindow.prototype = Object.create(SizeFixedWindow.prototype);
    SplashWindow.prototype.constructor = SplashWindow;

    /**
     * Returns the delay of the splash window.
     * @since 2017-02-20
     * @returns {Number} Delay of the splash window
     */
    SplashWindow.prototype.getDelay = function () {
        return this._delay;
    };

    /**
     * Sets the color of the window.
     * @since 2017-02-20
     * @param {Number} color Color of the window
     */
    SplashWindow.prototype.setColor = function (color) {
        this._layout.setBackgroundDrawable(new ColorDrawable_(color));
        return this;
    };

    /**
     * Sets the delay of the splash window.
     * @since 2017-02-20
     * @param {Number} delay Delay of the splash window
     */
    SplashWindow.prototype.setDelay = function (delay) {
        this._delay = delay;
        return this;
    };

    /**
     * Sets a view on the window.
     * @since 2017-02-20
     * @param {android.widget.LinearLayout} view View
     */
    SplashWindow.prototype.setView = function (view) {
        this._layout.addView(view);
        return this;
    };

    SplashWindow.prototype.show = function () {
        let thiz = this,
            anim = new AlphaAnimation_(0, 1);
        thiz._window.showAtLocation(SCREEN, Gravity_.BOTTOM | Gravity_.RIGHT, 0, 0);
        anim.setDuration(Math.floor(thiz._delay / 4));
        anim.setInterpolator(new DecelerateInterpolator_());
        thiz._layout.startAnimation(anim);
        thiz._thread = new Thread_({
            run() {
                Thread_.sleep(Math.floor(thiz._delay / 2));
                CONTEXT.runOnUiThread({
                    run() {
                        let anim = new AlphaAnimation_(1, 0);
                        anim.setDuration(Math.floor(thiz._delay / 4));
                        anim.setInterpolator(new DecelerateInterpolator_());
                        thiz._layout.startAnimation(anim);
                    }
                });
                Thread_.sleep(Math.floor(thiz._delay / 4));
                CONTEXT.runOnUiThread({
                    run() {
                        thiz._window.dismiss();
                        thiz._window = null;
                    }
                });
            }
        });
        thiz._thread.start();
        return this;
    };



    /**
     * Class representing a verticle window.
     * @since 2017-02-20
     * @class
     * @extends me.astro.window.SizeChangedWindow
     * @memberOf me.astro.window
     * @param {me.astro.design.Theme} [theme=me.astro.design.Theme.DEFAULT] Theme of verticle window
     */
    function VerticalWindow(theme) {
        theme = theme || Theme.DEFAULT;
        let thiz = this;
        thiz._theme = theme;
        thiz._height = DP * 156;
        thiz._width = DP * 52;
        thiz._layouts = [];
        thiz._window = new PopupWindow_(CONTEXT);
        thiz._windowLayout = new FrameLayout_(CONTEXT);
        thiz._sensor = new SensorButton(Shape.CIRCLE, theme)
            .setEffect((x, y, width, height) => {
                x = thiz._x = DEVICE_WIDTH - x + DP * 26;
                y = thiz._y = DEVICE_HEIGHT - y - DP * 78;
                thiz._window.update(x, y, -1, -1);
            })
            .setEffectImage(Bitmap.createBitmap(PATH + "ic_open_with.png", DP * 24, DP * 24), theme.getButton(Theme.EFFECT_COLOR))
            .setImage(Bitmap.createBitmap(PATH + "ic_open_with.png", DP * 24, DP * 24), theme.getButton(Theme.BACKGROUND_COLOR));
        thiz._slides = [];
        thiz._window.setBackgroundDrawable(new ColorDrawable_(0));
        thiz._window.setContentView(thiz._windowLayout);
        thiz._window.setWidth(DP * 52);
        thiz._window.setHeight(DP * 156);
    }

    VerticalWindow.prototype = Object.create(SizeChangedWindow.prototype);
    VerticalWindow.prototype.constructor = VerticalWindow;

    /**
     * Adds a view on the window.
     * @since 2017-02-20
     * @param {android.widget.LinearLayout} view View
     */
    VerticalWindow.prototype.addView = function (view) {
        let thiz = this,
            layouts = thiz._layouts;
        if (typeof layouts[0] === "undefined" || layouts[layouts.length - 1].getChildCount() >= 3) {
            let theme = ViewUtils.getTheme(view) || thiz._theme,
                slideButton = new SlideButton(Shape.CIRCLE, theme);
            slideButton.getView().setId(layouts.length);
            slideButton.setEffect((view, direction) => {
                    let id = 0;
                    if (direction === SlideButton.LEFT_RIGHT) {
                        id = view.getId() - 1;
                    } else if (direction === SlideButton.RIGHT_LEFT) {
                        id = view.getId() + 1;
                    }
                    if (layouts[id] instanceof LinearLayout_) {
                        for (let i = 0, len = layouts.length; i < len; i++) {
                            layouts[i].setVisibility(View_.GONE);
                        }
                        layouts[id].setVisibility(View_.VISIBLE);
                    }
                })
                .setEffectImage(Bitmap.createBitmap(PATH + "ic_swap_horiz.png", DP * 24, DP * 24), ColorUtils.blendColors([theme.getButton(Theme.EFFECT_COLOR), thiz._theme.getButton(Theme.EFFECT_COLOR)]))
                .setImage(Bitmap.createBitmap(PATH + "ic_swap_horiz.png", DP * 24, DP * 24), ColorUtils.blendColors([theme.getButton(Theme.BACKGROUND_COLOR), thiz._theme.getButton(Theme.BACKGROUND_COLOR)]));
            thiz._slides.push(slideButton);
            let layout = new LinearLayout_(CONTEXT);
            layout.addView(view, 0);
            layout.addView(new TextView_(CONTEXT), 1, new LinearLayout_.LayoutParams(DP * 52, DP * 52));
            layout.addView(slideButton.show(), 2);
            layout.removeViewAt(1);
            layout.setOrientation(1);
            layout.setVisibility(View_.GONE);
            thiz._layouts.push(layout);
            thiz._windowLayout.addView(layout);
        } else {
            let theme0 = ViewUtils.getTheme(layouts[layouts.length - 1].getChildAt(0)) || thiz._theme,
                theme1 = ViewUtils.getTheme(view) || thiz._theme;
            thiz._slides[thiz._slides.length - 1].setEffectImage(Bitmap.createBitmap(PATH + "ic_swap_horiz.png", DP * 24, DP * 24), ColorUtils.blendColors([theme0.getButton(Theme.EFFECT_COLOR), theme1.getButton(Theme.EFFECT_COLOR), thiz._theme.getButton(Theme.EFFECT_COLOR)]))
                .setImage(Bitmap.createBitmap(PATH + "ic_swap_horiz.png", DP * 24, DP * 24), ColorUtils.blendColors([theme0.getButton(Theme.BACKGROUND_COLOR), theme1.getButton(Theme.BACKGROUND_COLOR), thiz._theme.getButton(Theme.BACKGROUND_COLOR)]));
            layouts[layouts.length - 1].addView(view, 1);
        }
        return this;
    };

    VerticalWindow.prototype.dismiss = function () {
        let thiz = this,
            layouts = thiz._layouts;
        CONTEXT.runOnUiThread({
            run() {
                thiz._window.dismiss();
                thiz._window = null;
                for (let i = 0, len = layouts.length; i < len; i++) {
                    layouts[i].setVisibility(View_.GONE);
                }
                thiz._layouts = null;
            }
        });
        return this;
    };

    /**
     * Returns the x location of the vertical window.
     * @since 2017-02-20
     * @returns {Number} X location of the vertical window.
     */
    VerticalWindow.prototype.getX = function () {
        return this._x;
    };

    /**
     * Returns the y location of the vertical window.
     * @since 2017-02-20
     * @returns {Number} Y location of the vertical window.
     */
    VerticalWindow.prototype.getY = function () {
        return this._y;
    };

    /**
     * Sets the color of the window.
     * @since 2017-02-20
     * @param {Number} color Color of the window
     */
    VerticalWindow.prototype.setColor = function (color) {
        this._sensor.setImage(Bitmap.createBitmap(PATH + "ic_open_with.png", DP * 24, DP * 24), color);
        for (let i = this._slides.length; i--;) {
            this._slides[i].setEffectImage(Bitmap.createBitmap(PATH + "ic_swap_horiz.png", DP * 24, DP * 24), color)
                .setImage(Bitmap.createBitmap(PATH + "ic_swap_horiz.png", DP * 24, DP * 24), color);
        }
        return this;
    };

    /**
     * Shows the window on the screen.
     * @since 2017-02-20
     * @param {Number} [x=0] X location of the window.
     * @param {Number} [y=0] Y location of the window.
     */
    VerticalWindow.prototype.show = function (x, y) {
        let thiz = this,
            layouts = thiz._layouts;
        thiz.addView(thiz._sensor.show());
        layouts[0].setVisibility(View_.VISIBLE);
        thiz._window.showAtLocation(SCREEN, Gravity_.BOTTOM | Gravity_.RIGHT, x || 0, y || 0);
        return this;
    };



    /**
     * Returns the context.
     * @since 2017-01-22
     * @memberOf me.astro
     * @returns {android.content.Context} Context
     */
    const getContext = () => CONTEXT;



    /**
     * Returns the resource path.
     * @since 2017-01-22
     * @memberOf me.astro
     * @returns {String} Resource path
     */
    const getPath = () => PATH;



    /**
     * Returns the account instance.
     * @since 2016-07-05
     * @memberOf me.astro
     * @returns {me.astro.security.Account} Account instance
     */
    const getUser = () => user;



    /**
     * Returns the window.
     * @since 2016-07-05
     * @memberOf me.astro
     * @returns {me.astro.window.VerticalWindow} Window
     */
    const getWindow = () => verticalWindow;



    /**
     * Loads the library.
     * @since 2016-01-28
     * @memberOf me.astro
     * @param {org.mozilla.javascript.Scriptable} scope Javascript object
     */
    function loadLibrary(scope) {
        if (!ScriptableObject_.hasProperty(scope, "me")) {
            ScriptableObject_.putProperty(scope, "me", {
                astro: astro
            });
            if (ScriptableObject_.hasProperty(scope, "onLibraryLoaded")) {
                ScriptableObject_.callMethod(scope, "onLibraryLoaded", [NAME, NAME_CODE, VERSION]);
            }
        } else {
            let tmpObj = ScriptableObject_.getProperty(scope, "me");
            if (typeof tmpObj.astro !== "object") {
                tmpObj.astro = astro;
                ScriptableObject_.putProperty(scope, "me", tmpObj);
                if (ScriptableObject_.hasProperty(scope, "onLibraryLoaded")) {
                    ScriptableObject_.callMethod(scope, "onLibraryLoaded", [NAME, NAME_CODE, VERSION]);
                }
            }
        }
    }



    /**
     * Sign in the server.
     * @since 2016-06-04
     * @private
     * @memberOf me.astro
     */
    function login() {
        let file = new File_(PATH, "user.dat");
        if (file.exists()) {
            if (new NetworkChecker().isConnected()) {
                let progressWindow,
                    fileInputStream = new FileInputStream_(file),
                    inputStreamReader = new InputStreamReader_(fileInputStream),
                    bufferedReader = new BufferedReader_(inputStreamReader),
                    str = bufferedReader.readLine(),
                    arr = str.split(",");
                fileInputStream.close();
                inputStreamReader.close();
                bufferedReader.close();
                CONTEXT.runOnUiThread({
                    run() {
                        progressWindow = new ProgressWindow();
                        progressWindow.setText("Logging in...");
                        progressWindow.show();
                    }
                });
                user = null;
                user = new Account(arr[0], arr[1]);
                user.login(code => {
                    if (code === Account.LOGIN_FAIL) {
                        user = null;
                        showWindow();
                    } else if (code === Account.LOGIN_SUCCESS) {
                        showWindowAccount();
                    }
                    ScriptManager_.callScriptMethod("onLoginListener", [code]);
                    progressWindow.dismiss();
                });
            } else {
                Toast.show("Error: No Internet.");
            }
        } else {
            showWindow();
        }
    }



    /**
     * Logout the server.
     * @since 2016-07-05
     * @private
     * @memberOf me.astro
     */
    function logout() {
        new File_(PATH, "user.dat").delete();
        if (user instanceof Account && user.isAvailable()) {
            user.logout();
            ScriptManager_.callScriptMethod("onLoginListener", [Account.LOGOUT]);
        }
        showWindow();
    }



    /**
     * Shows the window about the library information and login.
     * @since 2016-06-04
     * @private
     * @memberOf me.astro
     */
    function showWindow() {
        CONTEXT.runOnUiThread({
            run() {
                let window = new PopupWindow(),
                    loginId = new EditText(),
                    loginPassword = new EditText(),
                    registerId = new EditText(),
                    registerPassword = new EditText(),
                    registerName = new EditText(),
                    registerEmail = new EditText();
                window.addLayout(Bitmap.createBitmap(PATH + "ic_person.png"), new Layout()
                        .addView(new TextView()
                            .setPadding(DP * 8, DP * 16, DP * 8, DP * 4)
                            .setText("Deneb DB")
                            .setTextSize(24)
                            .show())
                        .addView(new TextView()
                            .setPadding(DP * 12, 0, DP * 8, DP * 12)
                            .setText("Login")
                            .setTextSize(14)
                            .show())
                        .addView(loginId.setHint("ID")
                            .show())
                        .addView(loginPassword.setHint("Password")
                            .show())
                        .addView(new Layout()
                            .addView(new Button()
                                .setText("Login")
                                .setEffect(() => {
                                    let id = loginId.getText(),
                                        password = loginPassword.getText(),
                                        progressWindow = new ProgressWindow();
                                    progressWindow.setText("Logging in...");
                                    progressWindow.show();
                                    user = new Account(id, password);
                                    user.login(code => {
                                        if (code === Account.LOGIN_FAIL) {
                                            user = null;
                                            CONTEXT.runOnUiThread({
                                                run() {
                                                    loginPassword.setText("");
                                                }
                                            });
                                        } else if (code === Account.LOGIN_SUCCESS) {
                                            let fileOutputStream = new FileOutputStream_(PATH + "user.dat");
                                            fileOutputStream.write(new String_(id + "," + password).getBytes());
                                            fileOutputStream.close();
                                            window.dismiss();
                                        }
                                        ScriptManager_.callScriptMethod("onLoginListener", [code]);
                                        progressWindow.dismiss();
                                    });
                                })
                                .show())
                            .addView(new Button()
                                .setText("Close")
                                .setEffect(() => window.dismiss())
                                .show())
                            .setOrientation(0)
                            .show())
                        .show())
                    .addLayout(Bitmap.createBitmap(PATH + "ic_person_add.png"), new Layout()
                        .addView(new TextView()
                            .setPadding(DP * 8, DP * 16, DP * 8, DP * 4)
                            .setText("Deneb DB")
                            .setTextSize(24)
                            .show())
                        .addView(new TextView()
                            .setPadding(DP * 12, 0, DP * 8, DP * 12)
                            .setText("Sign up")
                            .setTextSize(14)
                            .show())
                        .addView(registerId.setHint("ID")
                            .show())
                        .addView(registerPassword.setHint("Password")
                            .show())
                        .addView(registerEmail.setHint("E-mail")
                            .show())
                        .addView(registerName.setHint("Name")
                            .show())
                        .addView(new Layout()
                            .addView(new Button()
                                .setText("Sign up")
                                .setEffect(() => {
                                    let id = registerId.getText(),
                                        password = registerPassword.getText(),
                                        email = registerEmail.getText(),
                                        name = registerName.getText(),
                                        progressWindow = new ProgressWindow();
                                    progressWindow.setText("Signing up...");
                                    progressWindow.show();
                                    Account.signUp(id, password, name, email, code => {
                                        if (code === Account.REGISTER_FAIL) {
                                            CONTEXT.runOnUiThread({
                                                run() {
                                                    registerId.setText("");
                                                }
                                            });
                                        }
                                        progressWindow.dismiss();
                                    });
                                })
                                .show())
                            .addView(new Button()
                                .setText("Close")
                                .setEffect(() => window.dismiss())
                                .show())
                            .setOrientation(0)
                            .show())
                        .show())
                    .setFocusable(true)
                    .show();
            }
        });
    }



    /**
     * Shows the window about the user information.
     * @since 2016-07-04
     * @private
     * @memberOf me.astro
     */
    function showWindowAccount() {
        if (user instanceof Account && user.isAvailable()) {
            CONTEXT.runOnUiThread({
                run() {
                    try {
                        let window = new PopupWindow(),
                            password = new EditText(),
                            name = new EditText(),
                            email = new EditText(),
                            friendId = new EditText();
                        window.addLayout(Bitmap.createBitmap(PATH + "ic_person.png"), new Layout()
                                .addView(new TextView()
                                    .setPadding(DP * 8, DP * 16, DP * 8, DP * 4)
                                    .setText("Account")
                                    .setTextSize(24)
                                    .show())
                                .addView(new TextView()
                                    .setPadding(DP * 12, 0, DP * 8, DP * 12)
                                    .setText("My Account (" + user.getId() + ")")
                                    .setTextSize(14)
                                    .show())
                                .addView(new TextView()
                                    .setPadding(DP * 8, DP * 12, DP * 8, DP * 12)
                                    .setText("Password")
                                    .show())
                                .addView(password.setHint("Password")
                                    .setText(user.getPassword())
                                    .show())
                                .addView(new TextView()
                                    .setPadding(DP * 8, DP * 12, DP * 8, DP * 12)
                                    .setText("Name")
                                    .show())
                                .addView(name.setHint("Name")
                                    .setText(user.getName())
                                    .show())
                                .addView(new TextView()
                                    .setPadding(DP * 8, DP * 12, DP * 8, DP * 12)
                                    .setText("E-mail")
                                    .show())
                                .addView(email.setHint("E-mail")
                                    .setText(user.getEmail())
                                    .show())
                                .addView(new Layout()
                                    .addView(new Button()
                                        .setText("Save")
                                        .setEffect(() => {
                                            let progressWindow = new ProgressWindow();
                                            progressWindow.setText("Modifying...");
                                            progressWindow.show();
                                            user.modifyUserData(password.getText(), name.getText(), email.getText(), code => {
                                                if (code === Account.EDIT_SUCCESS) {
                                                    let fileOutputStream = new FileOutputStream_(PATH + "user.dat");
                                                    fileOutputStream.write(new String_(user.getId() + "," + password.getText()).getBytes());
                                                    fileOutputStream.close();
                                                    window.dismiss();
                                                }
                                                ScriptManager_.callScriptMethod("onLoginListener", [code]);
                                                progressWindow.dismiss();
                                            });
                                        })
                                        .show())
                                    .addView(new Button()
                                        .setText("Logout")
                                        .setEffect(() => {
                                            window.dismiss();
                                            logout();
                                        })
                                        .show())
                                    .addView(new Button()
                                        .setText("Close")
                                        .setEffect(() => window.dismiss())
                                        .show())
                                    .setOrientation(0)
                                    .show())
                                .show())
                            .addLayout(Bitmap.createBitmap(PATH + "ic_group.png"), new Layout()
                                .addView(new TextView()
                                    .setPadding(DP * 8, DP * 16, DP * 8, DP * 4)
                                    .setText("Friends")
                                    .setTextSize(24)
                                    .show())
                                .addView(new TextView()
                                    .setPadding(DP * 12, 0, DP * 8, DP * 12)
                                    .setText("Your friends")
                                    .setTextSize(14)
                                    .show())
                                .addView(new Layout()
                                    .addView(friendId.setHint("Friend ID")
                                        .setWH(DP * 220, DP * 40)
                                        .show())
                                    .addView(new Button()
                                        .setText("Add")
                                        .setEffect(() => {
                                            let progressWindow = new ProgressWindow();
                                            progressWindow.setText("Adding...");
                                            progressWindow.show();
                                            user.addFriend(friendId.getText(), code => {
                                                if (code === Account.EDIT_SUCCESS) {
                                                    window.dismiss();
                                                }
                                                progressWindow.dismiss();
                                            });
                                        })
                                        .setPadding(0, 0, 0, 0)
                                        .show())
                                    .setGravity(Gravity_.CENTER | Gravity_.LEFT)
                                    .setOrientation(0)
                                    .show())
                                .addView((() => {
                                    let layout = new LinearLayout_(CONTEXT),
                                        friends = user.getFriends(),
                                        len = friends.length;
                                    if (len > 0) {
                                        layout.addView(new TextView()
                                            .setPadding(DP * 12, DP * 24, DP * 8, DP * 12)
                                            .setText("Click to remove your friends")
                                            .setTextSize(14)
                                            .show());
                                    }
                                    for (let i = 0; i < len; i++) {
                                        layout.addView(new Button()
                                            .setText(friends[i])
                                            .setTextColor(Color.INDIGO)
                                            .setColor(Color.WHITE)
                                            .setEffect(view => {
                                                let floatingWindow = new FloatingWindow(),
                                                    nameTextView = new TextView().setText("Name: None");
                                                user.getFriendDataFromServer(view.getText(), "name", (code, str) => {
                                                    if (code === Account.GET_SUCCESS) {
                                                        nameTextView.setText("Name: " + str);
                                                    }
                                                });
                                                floatingWindow.addView(new TextView()
                                                        .setPadding(DP * 8, DP * 16, DP * 8, DP * 4)
                                                        .setText("Manager")
                                                        .setTextSize(24)
                                                        .show())
                                                    .addView(new TextView()
                                                        .setPadding(DP * 8, 0, DP * 8, DP * 16)
                                                        .setText("You can only show your right friend information.")
                                                        .setTextSize(14)
                                                        .show())
                                                    .addView(nameTextView.show())
                                                    .addView(new Layout()
                                                        .addView(new Button()
                                                            .setText("Remove")
                                                            .setEffect(() => {
                                                                let progressWindow = new ProgressWindow();
                                                                progressWindow.setText("Removing...");
                                                                progressWindow.show();
                                                                user.removeFriend(view.getText(), code => {
                                                                    if (code === Account.EDIT_SUCCESS) {
                                                                        floatingWindow.dismiss();
                                                                        window.dismiss();
                                                                    }
                                                                    progressWindow.dismiss();
                                                                });
                                                            })
                                                            .show())
                                                        .addView(new Button()
                                                            .setText("Close")
                                                            .setEffect(() => floatingWindow.dismiss())
                                                            .show())
                                                        .setOrientation(0)
                                                        .show())
                                                    .setFocusable(true)
                                                    .show();
                                            })
                                            .setEffectColor(Color.WHITE)
                                            .setWH(-1, DP * 36)
                                            .show());
                                    }
                                    layout.setOrientation(1);
                                    return layout;
                                })())
                                .addView(new Button()
                                    .setText("Close")
                                    .setEffect(() => window.dismiss())
                                    .show())
                                .show())
                            .addLayout(Bitmap.createBitmap(PATH + "ic_edit.png"), (() => {
                                if (hasLevel) {
                                    let health = new EditText(),
                                        hunger = new EditText(),
                                        level = new EditText(),
                                        exp = new EditText(),
                                        playerEntity = Player.getEntity();
                                    return new Layout().addView(new TextView()
                                            .setPadding(DP * 8, DP * 16, DP * 8, DP * 4)
                                            .setText("Player Manager")
                                            .setTextSize(24)
                                            .show())
                                        .addView(new TextView()
                                            .setPadding(DP * 8, DP * 16, DP * 8, DP * 4)
                                            .setText("Gamemode")
                                            .setTextSize(14)
                                            .show())
                                        .addView(new Layout()
                                            .addView(new Button()
                                                .setText("Survival")
                                                .setEffect(() => {
                                                    Level.setGameMode(0);
                                                    Toast.show("Gamemode changed.");
                                                })
                                                .show())
                                            .addView(new Button()
                                                .setText("Creative")
                                                .setEffect(() => {
                                                    Level.setGameMode(1);
                                                    Toast.show("Gamemode changed.");
                                                })
                                                .show())
                                            .setOrientation(0)
                                            .show(false))
                                        .addView(new TextView()
                                            .setPadding(DP * 8, DP * 16, DP * 8, DP * 4)
                                            .setText("Health")
                                            .setTextSize(14)
                                            .show())
                                        .addView(health.setHint("Health")
                                            .setText(Entity.getHealth(playerEntity))
                                            .show())
                                        .addView(new Button()
                                            .setText("Set")
                                            .setEffect(() => {
                                                let str = health.getText();
                                                if (Text.verifyNumber(str)) {
                                                    Entity.setHealth(playerEntity, Number(str));
                                                    Toast.show("Health changed.");
                                                } else {
                                                    Toast.show("Error: Invalid number.");
                                                }
                                            })
                                            .show())
                                        .addView(new TextView()
                                            .setPadding(DP * 8, DP * 16, DP * 8, DP * 4)
                                            .setText("Hunger")
                                            .setTextSize(14)
                                            .show())
                                        .addView(hunger.setHint("Hunger")
                                            .setText(Player.getHunger())
                                            .show())
                                        .addView(new Button()
                                            .setText("Set")
                                            .setEffect(() => {
                                                let str = hunger.getText();
                                                if (Text.verifyNumber(str)) {
                                                    Player.setHunger(Number(str));
                                                    Toast.show("Hunger changed.");
                                                } else {
                                                    Toast.show("Error: Invalid number.");
                                                }
                                            })
                                            .show())
                                        .addView(new TextView()
                                            .setPadding(DP * 8, DP * 16, DP * 8, DP * 4)
                                            .setText("Level")
                                            .setTextSize(14)
                                            .show())
                                        .addView(level.setHint("Level")
                                            .setText(Player.getLevel())
                                            .show())
                                        .addView(new Button()
                                            .setText("Set")
                                            .setEffect(() => {
                                                let str = level.getText();
                                                if (Text.verifyNumber(str)) {
                                                    Player.setLevel(Number(str));
                                                    Toast.show("Level changed.");
                                                } else {
                                                    Toast.show("Error: Invalid number.");
                                                }
                                            })
                                            .show())
                                        .addView(new TextView()
                                            .setPadding(DP * 8, DP * 16, DP * 8, DP * 4)
                                            .setText("Exp")
                                            .setTextSize(14)
                                            .show())
                                        .addView(exp.setHint("Exp")
                                            .setText(Player.getExp().toFixed(2))
                                            .show())
                                        .addView(new Button()
                                            .setText("Set")
                                            .setEffect(() => {
                                                let str = exp.getText();
                                                if (Text.verifyNumber(str)) {
                                                    Player.setExp(Number(str));
                                                    Toast.show("Exp changed.");
                                                } else {
                                                    Toast.show("Error: Invalid number.");
                                                }
                                            })
                                            .show())
                                        .addView(new Button()
                                            .setText("Close")
                                            .setEffect(() => window.dismiss())
                                            .show())
                                        .show();
                                } else {
                                    return new Layout().addView(new TextView()
                                            .setPadding(DP * 8, DP * 16, DP * 8, DP * 4)
                                            .setText("Player Manager")
                                            .setTextSize(24)
                                            .show())
                                        .addView(new TextView()
                                            .setText("Error: Can not find player.")
                                            .show())
                                        .addView(new Button()
                                            .setText("Close")
                                            .setEffect(() => window.dismiss())
                                            .show())
                                        .show();
                                }
                            })())
                            .setFocusable(true)
                            .show();
                    } catch (e) {
                        print(e + "-" + e.lineNumber);
                    }
                }
            });
        } else {
            login();
        }
    }



    /**
     * Shows the window about the settings.
     * @since 2016-08-28
     * @private
     * @memberOf me.astro
     */
    function showWindowSettings() {
        CONTEXT.runOnUiThread({
            run() {
                try {
                    let window = new PopupWindow();
                    window.addLayout(Bitmap.createBitmap(PATH + "ic_settings.png"), new Layout()
                            .addView(new TextView()
                                .setPadding(DP * 8, DP * 16, DP * 8, DP * 4)
                                .setText("Settings")
                                .setTextSize(24)
                                .show())
                            .addView(new me.astro.widget.TextView()
                                .setText("Show splash screen")
                                .setTextSize(14)
                                .show())
                            .addView(new me.astro.widget.Layout()
                                .addView(new me.astro.widget.Button()
                                    .setText("On")
                                    .setEffect(() => {
                                        preference.set("enable_splash", true)
                                            .save();
                                        Toast.show("Enable splash screen");
                                    })
                                    .show())
                                .addView(new me.astro.widget.Button()
                                    .setText("Off")
                                    .setEffect(() => {
                                        preference.set("enable_splash", false)
                                            .save();
                                        Toast.show("Disable splash screen");
                                    })
                                    .show())
                                .setOrientation(0)
                                .show())
                            .addView(new me.astro.widget.TextView()
                                .setText("Open notifications with gestures")
                                .setTextSize(14)
                                .show())
                            .addView(new me.astro.widget.Layout()
                                .addView(new me.astro.widget.Button()
                                    .setText("On")
                                    .setEffect(() => {
                                        preference.set("enable_notifications", true)
                                            .save();
                                        notificationWindow.start();
                                        Toast.show("Enable opening notifications with gestures");
                                    })
                                    .show())
                                .addView(new me.astro.widget.Button()
                                    .setText("Off")
                                    .setEffect(() => {
                                        preference.set("enable_notifications", false)
                                            .save();
                                        notificationWindow.stop();
                                        Toast.show("Disable opening notifications with gestures");
                                    })
                                    .show())
                                .setOrientation(0)
                                .show())
                            .addView(new Button()
                                .setText("Close")
                                .setEffect(() => window.dismiss())
                                .show())
                            .show())
                        .addLayout(Bitmap.createBitmap(PATH + "ic_announcement.png"), new Layout()
                            .addView(new TextView()
                                .setPadding(DP * 8, DP * 16, DP * 8, DP * 4)
                                .setText("Notice")
                                .setTextSize(24)
                                .show())
                            .addView(new TextView()
                                .setText(notice)
                                .setTextColor(Color.GREY_DARK)
                                .show())
                            .addView(new Button()
                                .setText("Close")
                                .setEffect(() => window.dismiss())
                                .show())
                            .show())
                        .addLayout(Bitmap.createBitmap(PATH + "ic_info_outline.png"), new Layout()
                            .addView(new TextView()
                                .setPadding(DP * 8, DP * 16, DP * 8, DP * 4)
                                .setText("Device Info")
                                .setTextSize(24)
                                .show())
                            .addView(new TextView()
                                .setText("Device model: " + DEVICE_MODEL + "\nDevice version: " + DEVICE_VERSION)
                                .setTextColor(Color.GREY_DARK)
                                .show())
                            .addView(new TextView()
                                .setPadding(DP * 8, DP * 16, DP * 8, DP * 4)
                                .setText("Library Info")
                                .setTextSize(24)
                                .show())
                            .addView(new TextView()
                                .setText(NAME + " " + VERSION + "\n\nName Code: " + NAME_CODE + "\nDeveleoper: " + DEVELOPER)
                                .setTextColor(Color.GREY_DARK)
                                .show())
                            .addView(new TextView()
                                .setPadding(DP * 8, DP * 16, DP * 8, DP * 4)
                                .setText("License")
                                .setTextSize(24)
                                .show())
                            .addView(new TextView()
                                .setText(LICENSE_TEXT)
                                .setTextColor(Color.GREY_DARK)
                                .show())
                            .addView(new TextView()
                                .setPadding(DP * 8, DP * 16, DP * 8, DP * 4)
                                .setText("Share with your friends")
                                .setTextSize(24)
                                .show())
                            .addView(new KakaoLink()
                                .setLinkButtonText("Github")
                                .setLinkButtonUrl("https://github.com/Astro36/AstroLibrary")
                                .setLinkText(SHARE_TEXT)
                                .show())
                            .addView(new Button()
                                .setText("Close")
                                .setEffect(() => window.dismiss())
                                .show())
                            .show())
                        .addLayout(Bitmap.createBitmap(PATH + "ic_help_outline.png"), new Layout()
                            .addView(new TextView()
                                .setPadding(DP * 8, DP * 16, DP * 8, DP * 4)
                                .setText("Error Message Translation (Korean)")
                                .setTextSize(24)
                                .show())
                            .addView(new TextView()
                                .setText(TRANSLATION_TEXT)
                                .setTextColor(Color.GREY_DARK)
                                .show())
                            .addView(new Button()
                                .setText("Close")
                                .setEffect(() => window.dismiss())
                                .show())
                            .show())
                        .setFocusable(true)
                        .show();
                } catch (e) {
                    print(e);
                }
            }
        });
    }



    /**
     * Initializes the library.
     * @since 2016-05-03
     * @memberOf me.astro
     */
    function init() {
        let res = ["ic_account_circle.png", "ic_announcement.png", "ic_colorize.png", "ic_edit.png", "ic_group.png", "ic_help_outline.png", "ic_info_outline.png", "ic_open_with.png", "ic_palette.png", "ic_person.png", "ic_person_add.png", "ic_settings.png", "ic_swap_horiz.png", "img_astro_library_transparent.png"],
            isExists = true;
        for (let i = res.length; i--;) {
            if (!new File_(PATH, res[i]).exists()) {
                File.download(PATH + res[i], GITHUB_URL + "res/" + res[i]);
                isExists = false;
            }
        }
        if (!new File_(PATH, "LICENSE").exists()) {
            File.download(PATH + "LICENSE", GITHUB_URL + "LICENSE");
            isExists = false;
        }
        if (isExists) {
            if (new NetworkChecker().isConnected()) {
                new Thread_({
                    run() {
                        notice = readHtml(NOTICE_URL);
                    }
                }).start();
            }
            preference = new Preference(PATH + "preference.json");
            notificationWindow = NotificationWindow.getInstance();
            verticalWindow = new VerticalWindow();
            if (preference.get("enable_notifications")) {
                notificationWindow.start();
            }
            notificationWindow.addNotification("About", "AstroLibrary lets you add flat design and feel to your scripts.", "Get Started", () => {
                CONTEXT.startActivity(new Intent_(Intent_.ACTION_VIEW, Uri_.parse("https://github.com/Astro36/AstroLibrary")));
            });
            CONTEXT.runOnUiThread({
                run() {
                    verticalWindow.addView(new ImageButton(Shape.CIRCLE)
                            .setEffect(showWindowAccount)
                            .setEffectImage(Bitmap.createBitmap(PATH + "ic_account_circle.png", DP * 24, DP * 24))
                            .setImage(Bitmap.createBitmap(PATH + "ic_account_circle.png", DP * 24, DP * 24))
                            .show())
                        .addView(new ImageButton(Shape.CIRCLE)
                            .setEffect(showWindowSettings)
                            .setEffectImage(Bitmap.createBitmap(PATH + "ic_settings.png", DP * 24, DP * 24))
                            .setImage(Bitmap.createBitmap(PATH + "ic_settings.png", DP * 24, DP * 24))
                            .show())
                        .show(preference.get("window_location_x"), preference.get("window_location_y"));
                    if (preference.get("enable_splash")) {
                        let layout = new LinearLayout_(CONTEXT),
                            image = new TextView_(CONTEXT);
                        image.setBackgroundDrawable(new BitmapDrawable_(Bitmap.createBitmap(PATH + "img_astro_library_transparent.png", DP * 480, DP * 270)));
                        layout.addView(image);
                        layout.setGravity(Gravity_.CENTER);

                        new SplashWindow().setColor(Color.WHITE)
                            .setDelay(3000)
                            .setView(layout)
                            .show();
                    }
                }
            });
            new Thread_({
                run() {
                    let scripts = ScriptManager_.scripts,
                        scriptSize = 0;
                    while (true) {
                        let size = scripts.size();
                        if (size > scriptSize) {
                            for (let i = size - scriptSize; i--;) {
                                loadLibrary(scripts.get(scriptSize + i).scope);
                            }
                        }
                        scriptSize = size;
                        Thread_.sleep(1000);
                    }
                }
            }).start();
        } else {
            if (new NetworkChecker().isConnected()) {
                let progressWindow;
                CONTEXT.runOnUiThread({
                    run() {
                        progressWindow = new ProgressWindow();
                        progressWindow.setText("Downloading...");
                        progressWindow.show();
                    }
                });
                new Thread_({
                    run() {
                        while (!isExists) {
                            Thread_.sleep(1000);
                            for (let i = res.length; i--;) {
                                if (!new File_(PATH, res[i]).exists() || !new File_(PATH, "LICENSE").exists()) {
                                    isExists = false;
                                    break;
                                } else {
                                    isExists = true;
                                }
                            }
                        }
                        progressWindow.dismiss();
                        init();
                    }
                }).start();
            } else {
                Toast.show("Error: No Internet.");
            }
        }
    }



    astro.getContext = getContext;
    astro.getPath = getPath;
    astro.getUser = getUser;
    astro.getWindow = getWindow;
    astro.init = init;
    astro.loadLibrary = loadLibrary;
    astro.design = {
        Bitmap: Bitmap,
        Color: Color,
        ColorUtils: ColorUtils,
        Drawable: Drawable,
        ShadowDrawable: ShadowDrawable,
        Shape: Shape,
        SquircleDrawable: SquircleDrawable,
        Theme: Theme
    };
    astro.internet = {
        NetworkChecker: NetworkChecker,
        Server: Server,
        getIp: getIp,
        readHtml: readHtml
    };
    astro.security = {
        Account: Account,
        UserConnection: UserConnection
    };
    astro.utils = {
        AddonManager: AddonManager,
        File: File,
        Preference: Preference,
        Text: Text
    };
    astro.widget = {
        View: View,
        ViewUtils: ViewUtils,
        TextView: TextView,
        Button: Button,
        ColorPicker: ColorPicker,
        Divider: Divider,
        EditText: EditText,
        GridLayout: GridLayout,
        ImageButton: ImageButton,
        ImageToggle: ImageToggle,
        KakaoLink: KakaoLink,
        Layout: Layout,
        Palette: Palette,
        ScrollView: ScrollView,
        SensorButton: SensorButton,
        SlideButton: SlideButton,
        Toast: Toast,
        // This class was deprecated in version 2.1. Use me.astro.window.PopupWindow instead.
        Window: PopupWindow
    };
    astro.window = {
        Window: Window,
        SizeChangedWindow: SizeChangedWindow,
        SizeFixedWindow: SizeFixedWindow,
        ColorPickerWindow: ColorPickerWindow,
        FloatingWindow: FloatingWindow,
        NotificationWindow: NotificationWindow,
        PaletteWindow: PaletteWindow,
        PopupWindow: PopupWindow,
        ProgressWindow: ProgressWindow,
        ShowcaseWindow: ShowcaseWindow,
        SplashWindow: SplashWindow,
        VerticalWindow: VerticalWindow,
    };
    Object.freeze(astro);

    $.selectLevelHook = () => {
        hasLevel = true;
        preference.set("window_location_x", verticalWindow.getX())
            .set("window_location_y", verticalWindow.getY())
            .save();
    };

    $.leaveGame = () => {
        hasLevel = false;
        preference.set("window_location_x", verticalWindow.getX())
            .set("window_location_y", verticalWindow.getY())
            .save();
    };

})(this, (typeof me.astro === "object" ? me.astro : (me.astro = {})));

me.astro.init();