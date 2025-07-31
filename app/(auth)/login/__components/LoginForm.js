"use client"

import Field from "@/components/common/Field";
import React, {useEffect, useState} from "react";
import {signIn} from "next-auth/react";
import {redirect, useRouter} from "next/navigation";
import {formatErrors} from "@/utils/helpers/ErrorHeloper";
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa";
import Link from "next/link";
import {Checkbox} from "@/components/common/checkbox";

const LoginForm = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [errors, setErrors] = useState(null);
    const router = useRouter();
    const [location, setLocation] = useState(null);
    const [rememberMe, setRememberMe] = useState(false);

    const [credential, setCredential] = useState({
        username: '',
        password: '',
        redirect: false,
        callbackUrl: '/',
        device: '',
        browser: '',
        ip: ''
    });

    const handleRememberMe = (status) => {
        setRememberMe(status);
    };

    const getDeviceInfo = () => {
        if (typeof window !== 'undefined') {
            const userAgent = window.navigator.userAgent;
            const isMobile = /Mobile|Android|iP(ad|hone)/i.test(userAgent);
            return {
                device: isMobile ? "mobile" : "desktop",
                browser: userAgent
            };
        }
    };

    useEffect(() => {
        const getClientLocation = async () => {
            const res = await fetch('https://ipinfo.io/json');
            const locationData = await res.json();
            const deviceInfo = getDeviceInfo();
            setLocation(locationData);
            const savedUsername = localStorage.getItem("savedUsername");
            if (savedUsername) {
                setRememberMe(true);
            }

            setCredential({
                ...credential,
                ip: locationData.ip,
                username: savedUsername || '',
                device: deviceInfo.device,
                browser: deviceInfo.browser
            })
        };

        getClientLocation();
    }, []);

    const onChangeHandler = (e) => {
        setCredential({
            ...credential,
            [e.target.name]: e.target.value
        });
    }

    const submitLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        // Save or remove username based on the checkbox state
        if (credential.username) {
            if (rememberMe) {
                localStorage.setItem("savedUsername", credential.username);
            } else {
                localStorage.removeItem("savedUsername");
            }
        }

        const response = await signIn('credentials', credential);

        if (!response.ok) {
            setLoading(false);
            if(response.error && JSON.parse(response.error)){
                setErrors(formatErrors(JSON.parse(response.error)))
            }

            setError(response.error);
        } else {
            router.push('/');
        }
    }
    const [showPassword, setShowPassword] = useState(false);
    const showPasswordHandler = () => {
        setShowPassword(!showPassword);
    }

    const handleKeyPress = (e) =>{
        if (e.key === "Enter") {
            e.preventDefault();
            submitLogin(e)
        }
    }

    return (
        <form>
            <Field onSubmit={submitLogin} label="아이디" classes={'form-input mb-4'}>
                <>
                    <input
                        type="text"
                        placeholder="아이디를 입력하세요."
                        className="form-input-common-style"
                        name={'username'}
                        value={credential.username}
                        onKeyDown={handleKeyPress}
                        onChange={onChangeHandler}
                    />
                    {errors?.username && <small className="pt-1 text-dangerColor">{errors.username}</small>}
                </>
            </Field>

            <Field label="비밀번호" classes={'form-input mb-4 has-error'}>
                <>
                    <div className={' relative items-center'}>
                        <input
                            type={`${showPassword ? 'text' : 'password'}`}
                            placeholder="패스워드를 입력하세요."
                            className="form-input-common-style"
                            name={'password'}
                            value={credential.password}
                            onKeyDown={handleKeyPress}
                            onChange={onChangeHandler}
                        />
                        <span
                            className={`absolute ${error ? 'top-1/2' : ''} right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-medium`}
                            onClick={showPasswordHandler}>
                                {!showPassword ?
                                    <FaRegEyeSlash/>
                                    :
                                    <FaRegEye/>
                                }
                            </span>
                    </div>
                    {errors?.password && <small className="pt-1 text-dangerColor">{errors.password}</small>}
                </>
            </Field>

            <Field classes={'flex items-center py-2 mb-4'} >
                <>
                    <Checkbox color="lmscheckbox"
                              className={'pl-2'}
                              name="savedUsername"
                              checked={rememberMe}
                              clickHandler={handleRememberMe} />
                    <label htmlFor="savedUsername" className="ms-2 text-[15px] font-medium text-gray-900"> 아이디 기억하기</label>
                </>
            </Field>

            <button
                type="button"
                className="w-full text-[19px] h-[48px] bg-themeColor text-white py-2 rounded hover:bg-blue-600"
                onClick={submitLogin}
                disabled={loading}
            >
                로그인
                {loading && <span className={'text-[16px] ml-1 opacity-70 '}>x</span>}
            </button>
            <ul className="flex items-center justify-center gap-4 text-[13px] py-6 leading-none">
                <li><Link href="/find-id-password">아이디/패스워드 찾기</Link></li>
            </ul>
        </form>
    );
}

export default LoginForm;